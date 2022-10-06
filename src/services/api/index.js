// /**
//  * @prettier
//  */

// import ky from 'ky';

// import AuthService from '../auth';
// import debug from '../debug';
// /**
//  * This one makes api requests on entire application
//  */
// const api = ky.extend({
//   retry: {
//     limit: 3,
//     methods: ['get', 'post', 'put', 'delete', 'patch'],
//     statusCodes: [403, 408, 413, 429, 500, 502, 503, 504],
//   },
//   timeout: 60000,
//   hooks: {
//     beforeError: [
//       error => {
//         const {response} = error;
//         if (response) {
//           response.json().then(data => {
//             console.log(data);
//             return data;
//           });
//         }
//       },
//     ],
//     afterResponse: [
//       async (request, options, response) => {
//         try {
//           if (response.status === 401) {
//             const refreshToken = await AuthService.getRefreshTokenFromStorage();
//             request.headers.set('Authorization', `Bearer ${refreshToken}`);

// const newTokens = await AuthService.refreshTokens();

//             await AuthService.setAccessTokenToStorage(newTokens.accessToken);
//             await AuthService.setRefreshTokenToStorage(newTokens.refreshToken);

//             request.headers.set(
//               'Authorization',
//               `Bearer ${newTokens.accessToken}`,
//             );
//             return ky(request);
//           }
//         } catch (error) {
//           debug.error('Failed to set auth tokens afterRequest', error);
//         }
//       },
//     ],
//     beforeRequest: [
//       async request => {
//         try {
//           // Get and set token to header
//           request.headers.set(
//             'Authorization',
//             `Bearer ${await AuthService.getAccessTokenFromStorage()}`,
//           );
//         } catch (error) {
//           debug.error('Failed to set auth token beforeRequest', error);
//         }
//       },
//     ],
//   },
// });

// export default api;

import ky from 'ky';
import {BASE_URL} from 'react-native-dotenv';
import EncryptedStorage from 'react-native-encrypted-storage';

import AuthService from '../auth/index.js';
import debug from '../debug';

export const api = ky.extend({
  retry: {
    limit: 3,
    methods: ['get', 'post', 'put', 'patch'],
    statusCodes: [408, 401, 413, 429, 500, 502, 503, 504],
  },
  timeout: 10000,

  hooks: {
    beforeRequest: [
      async request => {
        const token = await EncryptedStorage.getItem('accessToken');

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        } else {
          debug.log('failed to set token');
        }
      },
    ],

    afterResponse: [
      async (request, options, response) => {
        if (response.message?.includes('The Token has expired')) {
          const refreshToken = await EncryptedStorage.getItem('refreshToken');

          request.headers.set('Authorization', `Bearer ${refreshToken}`);

          const newTokens = await AuthService.refreshTokens();

          await EncryptedStorage.setItem(
            'refreshToken',
            newTokens.refreshToken,
          );
          await EncryptedStorage.setItem('accessToken', newTokens.accessToken);
          request.headers.set(
            'Authorization',
            `Bearer ${newTokens.accessToken}`,
          );

          return response;
        }
      },
    ],
  },
});

const configUrl = {
  baseUrl: BASE_URL,
};

export const requestWrapper = (type = 'baseUrl') => {
  const URL = configUrl[type];
  const getRequestUrl = endPoint => `${URL}${endPoint}`;

  const getRequestResult = async (request, endPoint, method = '') => {
    try {
      console.log('getRequestResult - request', request);
      if (request?.headers?.map['content-type']) {
        const requestJson = await request.json();

        debug.log(
          'api-success',
          `[${method}] ${getRequestUrl(endPoint)}:`,
          requestJson,
        );

        return requestJson;
      }
    } catch (e) {
      debug.log('api-error', e);
    }

    debug.log(
      'api-success',
      `[${method}] ${getRequestUrl(endPoint)}:`,
      request,
    );

    return request;
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  const get = async endPoint => {
    try {
      const request = await api.get(getRequestUrl(endPoint), {
        headers,
      });
      return await getRequestResult(request, endPoint, 'GET');
    } catch (error) {
      const result = await error.response.json();

      debug.log('api-error', JSON.stringify(result));
      throw result;
    }
  };

  const post = async (endPoint, data = {}, customHeaders = {}) => {
    try {
      const request = await api.post(getRequestUrl(endPoint), {
        headers: {...headers, ...customHeaders},
        body: Object.values(customHeaders).length ? data : JSON.stringify(data),
      });

      return await getRequestResult(request, endPoint, 'POST');
    } catch (error) {
      const result = await error.response.json();

      debug.log('api-error', JSON.stringify(result));
      throw result;
    }
  };

  const patch = async (endPoint, data) => {
    try {
      const request = await api.patch(`${URL}${endPoint}`, {
        headers,
        body: JSON.stringify(data),
      });

      return await getRequestResult(request, endPoint, 'PATCH');
    } catch (error) {
      const result = await error.response.json();

      debug.log('api-error', JSON.stringify(result));
      throw result;
    }
  };

  const put = async (endPoint, data) => {
    try {
      const request = await api.put(`${URL}${endPoint}`, {
        headers,
        body: JSON.stringify(data),
      });

      console.log('error', request);
      return await getRequestResult(request, endPoint, 'PUT');
    } catch (error) {
      const result = await error.response.json();

      debug.log('api-error', JSON.stringify(result));
      throw result;
    }
  };

  const del = async (endPoint, data) => {
    try {
      const request = await api.delete(`${URL}${endPoint}`, {
        headers,
        body: JSON.stringify(data),
      });

      return await getRequestResult(request, endPoint, 'DEL');
    } catch (error) {
      const result = await error.response.json();

      debug.log('api-error', JSON.stringify(result));
      throw result;
    }
  };

  return {
    get,
    post,
    patch,
    put,
    del,
  };
};
