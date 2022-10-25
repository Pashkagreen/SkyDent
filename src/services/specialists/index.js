import {requestWrapper} from '../api';
/**
 * Specialists service
 * @getSpecialists()
 * @getSpecialistsByService()
 * @getSpecialistById()
 */
class SpecialistsService {
  /**
   * API endpoints urls
   */
  static #API_ENDPOINTS = {
    specialists: '/specialists',
  };

  static #request = requestWrapper();

  static async getSpecialists(page = 1, pageSize = 6) {
    return this.#request.get(
      `${this.#API_ENDPOINTS.specialists}?page=${page}&pageSize=${pageSize}`,
    );
  }

  static async getSpecialistsByService(serviceId) {
    return this.#request.get(
      `${this.#API_ENDPOINTS.specialists}?service=${serviceId}`,
    );
  }

  static async getSpecialistById(specialistId) {
    return this.#request.get(
      `${this.#API_ENDPOINTS.specialists}/${specialistId}`,
    );
  }
}

export default SpecialistsService;
