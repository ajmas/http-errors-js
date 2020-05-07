import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 422
 *
 * No description available
 *
 */
class UnprocessableEntityError extends Error implements IHTTPError {

    httpStatusCode = 422;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
    }

}

export default UnprocessableEntityError;
