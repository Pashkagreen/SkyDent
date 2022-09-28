/**
 * @prettier
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

import {HTTP_STATUS, URL} from '../config';

import {api, debug} from '..';

/**
 * Auth service
 * @signIn()
 * @refreshToken()
 * @logout()
 */
export default class AuthService {
  /**
   * API endpoints urls
   */
  static #API_ENDPOINTS = {
    signIn: '/login',
    refresh: '/tokens/refresh',
  };

  /**
   * Login user
   * @param {Object}
   * @returns {Promise<Object>}
   */
  static async signIn(data) {
    try {
      const request = await api.post(`${URL}${this.#API_ENDPOINTS.signIn}`, {
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (request.status !== HTTP_STATUS.SUCCESS) {
        debug.error('signIn invalid status');
        return request;
      }
      const requestData = await request.json();

      if (requestData.innerEntity.accessToken) {
        return requestData;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * Refresh user token
   * @param {Object} data - { accessToken, refreshToken}
   * @returns {Promise<*>} // TODO
   */
  static async refreshTokens(data) {
    try {
      const request = await api.post(`${URL}${this.#API_ENDPOINTS.refresh}`, {
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (request.status !== HTTP_STATUS.SUCCESS) {
        debug.error('refreshToken invalid status');
        return Promise.reject();
      }

      return await request.json();
    } catch (error) {
      debug.error(`Failed to refresh user token with data ${data}`, error);
      throw error;
    }
  }

  /**
   * Get auth token from async storage
   * @return {Promise<String>} - Auth token
   */
  static async getAccessTokenFromStorage() {
    try {
      return await AsyncStorage.getItem('authToken');
    } catch (error) {
      debug.error('Failed to get auth token', error);
      throw error;
    }
  }

  /**
   * Get auth token from async storage
   * @return {Promise<String>} - Auth token
   */
  static async getRefreshTokenFromStorage() {
    try {
      return await AsyncStorage.getItem('refreshToken');
    } catch (error) {
      debug.error('Failed to get auth token', error);
      throw error;
    }
  }

  /**
   * Set auth token to async storage
   * @param {String} token
   * @return {Promise<void>}
   */
  static async setAccessTokenToStorage(token) {
    try {
      return await AsyncStorage.setItem('authToken', token);
    } catch (error) {
      debug.error('Failed to set auth token', error);
      throw error;
    }
  }

  /**
   * Set refresh token to async storage
   * @param {String} token
   * @return {Promise<void>}
   */
  static async setRefreshTokenToStorage(token) {
    try {
      return await AsyncStorage.setItem('refreshToken', token);
    } catch (error) {
      debug.error('Failed to set refresh token', error);
      throw error;
    }
  }

  /**
   * Remove refresh token from async storage
   * @return {Promise<void>}
   */
  static async removeRefreshTokenFromStorage() {
    try {
      return await AsyncStorage.removeItem('refreshToken');
    } catch (error) {
      debug.error('Failed to remove refresh token', error);
      throw error;
    }
  }

  /**
   * Remove auth token from async storage
   * @return {Promise<void>}
   */
  static async removeAccessTokenFromStorage() {
    try {
      return await AsyncStorage.removeItem('authToken');
    } catch (error) {
      debug.error('Failed to remove auth token', error);
      throw error;
    }
  }
}
