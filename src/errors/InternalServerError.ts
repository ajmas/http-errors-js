import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 500
 *
 * No description available
 *
 */
class InternalServerError extends Error implements IHTTPError {

    httpStatusCode = 500;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }

}

export default InternalServerError;
