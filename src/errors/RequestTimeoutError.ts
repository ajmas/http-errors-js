import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 408
 *
 * No description available
 *
 */
class RequestTimeoutError extends Error implements IHTTPError {

    httpStatusCode = 408;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, RequestTimeoutError.prototype);
    }

}

export default RequestTimeoutError;
