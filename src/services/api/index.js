/**
 * @prettier
 */

import ky from 'ky';

import AuthService from '../auth';
import debug from '../debug';
/**
 * This one makes api requests on entire application
 */
const api = ky.extend({
  retry: {
    limit: 3,
    methods: ['get', 'post', 'put', 'delete', 'patch'],
    statusCodes: [403, 408, 413, 429, 500, 502, 503, 504],
  },
  timeout: 60000,
  hooks: {
    beforeError: [
      error => {
        const {response} = error;
        if (response) {
          response.json().then(data => {
            console.log(data);
            return data;
          });
        }
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        try {
          if (response.status === 401) {
            const refreshToken = await AuthService.getRefreshTokenFromStorage();
            request.headers.set('Authorization', `Bearer ${refreshToken}`);

            const newTokens = await AuthService.refreshTokens();

            await AuthService.setAccessTokenToStorage(newTokens.accessToken);
            await AuthService.setRefreshTokenToStorage(newTokens.refreshToken);

            request.headers.set(
              'Authorization',
              `Bearer ${newTokens.accessToken}`,
            );
            return ky(request);
          }
        } catch (error) {
          debug.error('Failed to set auth tokens afterRequest', error);
        }
      },
    ],
    beforeRequest: [
      async request => {
        try {
          // Get and set token to header
          request.headers.set(
            'Authorization',
            `Bearer ${await AuthService.getAccessTokenFromStorage()}`,
          );
        } catch (error) {
          debug.error('Failed to set auth token beforeRequest', error);
        }
      },
    ],
  },
});

export default api;
