import {requestWrapper} from '../api';

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

  static #request = requestWrapper();

  /**
   * Register user
   * @returns {
   *  {
   *     "firstName": "string",
   *     "patronymic": "string",
   *     "patronymic": "string",
   *     "birthDate": "string",
   *     "gender": "string",
   *     "phoneNumber": "string",
   *     "email": "string",
   *     "password": "string",
   *     "responseMessage": "string"
   *  },
   * }
   */

  static async registration(data) {
    return this.#request.put(this.#API_ENDPOINTS.registration, data);
  }
}
