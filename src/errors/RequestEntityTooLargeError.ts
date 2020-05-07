import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 413
 *
 * No description available
 *
 */
class RequestEntityTooLargeError extends Error implements IHTTPError {

    httpStatusCode = 413;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, RequestEntityTooLargeError.prototype);
    }

}

export default RequestEntityTooLargeError;
