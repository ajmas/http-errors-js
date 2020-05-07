import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 431
 *
 * No description available
 *
 */
class RequestHeaderFieldsTooLargeError extends Error implements IHTTPError {

    httpStatusCode = 431;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, RequestHeaderFieldsTooLargeError.prototype);
    }

}

export default RequestHeaderFieldsTooLargeError;
