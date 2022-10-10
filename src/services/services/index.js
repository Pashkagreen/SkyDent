import {requestWrapper} from '../api';
/**
 * Services service
 * @getServices()
 * @getServiceById()
 */
class ServicesService {
  /**
   * API endpoints urls
   */
  static #API_ENDPOINTS = {
    services: '/services',
  };

  static #request = requestWrapper();

  static async getServices(page = 1, pageSize = 6) {
    return this.#request.get(
      `${this.#API_ENDPOINTS.services}?page=${page}&pageSize=${pageSize}`,
    );
  }

  static async getServiceById(id) {
    return this.#request.get(`${this.#API_ENDPOINTS.services}/${id}`);
  }
}

export default ServicesService;
