import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 505
 *
 * No description available
 *
 */
class HttpVersionNotSupportedError extends Error implements IHTTPError {

    httpStatusCode = 505;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, HttpVersionNotSupportedError.prototype);
    }

}

export default HttpVersionNotSupportedError;
