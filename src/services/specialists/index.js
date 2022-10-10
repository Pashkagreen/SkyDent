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

  static async getSpecialists() {
    return this.#request.get(this.#API_ENDPOINTS.specialists);
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
