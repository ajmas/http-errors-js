import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 429
 *
 * No description available
 *
 */
class TooManyRequestsError extends Error implements IHTTPError {

    httpStatusCode = 429;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, TooManyRequestsError.prototype);
    }

}

export default TooManyRequestsError;
