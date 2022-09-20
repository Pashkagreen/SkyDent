/**
 * @prettier
 */

const DEBUG_PREFIX = '[SKYDENT DEBUG] : ';
const DEBUG_PREFIX_SUCCESS = '[SKYDENT DEBUG] SUCCESS : ';
const DEBUG_PREFIX_ERROR = '[SKYDENT DEBUG] ERROR : ';

/**
 * Debugging
 */
class Debug {
  /**
   * Set true when you are in development mode
   * @type {boolean}
   */
  #isDevelopment = true;

  /**
   * Set true when you are in production mode
   * @type {boolean}
   */
  #isProduction = !this.#isDevelopment;

  /**
   * Set names of methods that are available in development mode
   */
  #showIfDevelopment = ['info', 'success', 'error'];

  /**
   * Set names of methods that are available in production mode
   */
  #showIfProduction = ['error'];

  /**
   * Returns true if method allowed for current development or production mode.
   * If there is not development or production always return false.
   * @param {String} method - name of method
   * @returns {boolean}
   */
  makeOrNot(method) {
    if (this.#isDevelopment) {
      return this.#showIfDevelopment.includes(method);
    }

    if (this.#isProduction) {
      return this.#showIfProduction.includes(method);
    }

    /**
     * Don't show logs by default
     */
    return false;
  }

  /**
   * Info log
   * @param {String} message - log message
   * @param data - all other arguments
   */
  info(message, ...data) {
    if (this.makeOrNot('info')) {
      console.log(
        `%c${new Date().toISOString()}`,
        'color: white',
        DEBUG_PREFIX,
        message,
        data,
      );
    }
  }

  /**
   * Info log success
   * @param {String} message - log message
   * @param data - all other arguments
   */
  success(message, ...data) {
    if (this.makeOrNot('success')) {
      console.info(
        `%c${new Date().toISOString()} %c${DEBUG_PREFIX_SUCCESS}`,
        'color: white',
        'color: green',
        message,
        data,
      );
    }
  }

  /**
   * Error log
   * @param {String} message - log message
   * @param data - all other arguments
   */
  error(message, ...data) {
    if (this.makeOrNot('error')) {
      console.warn(
        `%c${new Date().toISOString()} %c${DEBUG_PREFIX_ERROR}`,
        'color: white',
        'color: red',
        message,
        data,
      );
    }
  }

  /**
   * Clear the console
   */
  clear() {
    console.clear();
  }
}

const debug = new Debug();

export default debug;
