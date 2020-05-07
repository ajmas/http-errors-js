import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 414
 *
 * No description available
 *
 */
class RequesturiTooLargeError extends Error implements IHTTPError {

    httpStatusCode = 414;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, RequesturiTooLargeError.prototype);
    }

}

export default RequesturiTooLargeError;
