import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 405
 *
 * No description available
 *
 */
class BadMethodError extends Error implements IHTTPError {

    httpStatusCode = 405;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, BadMethodError.prototype);
    }

}

export default BadMethodError;
