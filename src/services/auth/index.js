import EncryptedStorage from 'react-native-encrypted-storage';

import {debug} from '..';
import {requestWrapper} from '../api';
/**
 * Auth service
 * @signIn()
 * @logout()
 */
export default class AuthService {
  /**
   * API endpoints urls
   */
  static #API_ENDPOINTS = {
    signIn: '/login',
  };

  static #request = requestWrapper();

  /**
   * Login user
   * @param {Object}
   * @returns {Promise<Object>}
   */
  static async signIn(data) {
    return this.#request.post(this.#API_ENDPOINTS.signIn, data);
  }

  static async logOut() {
    try {
      const accessToken = await EncryptedStorage.getItem('accessToken');
      const refreshToken = await EncryptedStorage.getItem('refreshToken');
      if (accessToken && refreshToken) {
        await EncryptedStorage.removeItem('accessToken');
        await EncryptedStorage.removeItem('refreshToken');
      }
    } catch (error) {
      debug.error('Failed to remove tokens', error);
      throw error;
    }
  }
}
