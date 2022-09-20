/**
 * @prettier
 */

import {URL, HTTP_STATUS} from '../config';
import {api, debug} from '..';

/**
 * Registration service
 * @registration()
 */
export default class RegistrationService {
  /**
   * API endpoints urls
   */
  static #API_ENDPOINTS = {
    registration: '/register',
  };

  /**
   * Register user
   * @param {Object} data - { firstName, patronymic, secondName, birthday, gender, phoneNumber, uId }
   */
  static async registration(data) {
    try {
      const request = await api.put(
        `${URL}${this.#API_ENDPOINTS.registration}`,
        {
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      if (request.status !== HTTP_STATUS.CREATED) {
        debug.error('signUp invalid status');
        return Promise.reject();
      }
      return request;
    } catch (error) {
      debug.error(`Failed to registration with data ${data}`, error);
      throw error;
    }
  }
}
