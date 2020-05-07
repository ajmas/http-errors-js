import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 401
 *
 * No description available
 *
 */
class InvalidCredentialsError extends Error implements IHTTPError {

    httpStatusCode = 401;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, InvalidCredentialsError.prototype);
    }

}

export default InvalidCredentialsError;
