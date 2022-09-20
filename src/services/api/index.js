/**
 * @prettier
 */

import ky from 'ky';
import debug from '../debug';
import AuthService from '../auth';
/**
 * This one makes api requests on entire application
 */
const api = ky.extend({
  retry: {
    limit: 3,
    methods: ['get', 'post', 'put', 'delete', 'patch'],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
  },
  timeout: 60000,
  hooks: {
    afterResponse: [
      async (request, options, response) => {
        try {
          if (response.status === 401) {
            const accessToken = await AuthService.getAccessTokenFromStorage();
            const refreshToken = await AuthService.getRefreshTokenFromStorage();
            const newTokens = await AuthService.refreshTokens({
              accessToken,
              refreshToken,
            });
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
