import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 400
 *
 * No description available
 *
 */
class InvalidContentError extends Error implements IHTTPError {

    httpStatusCode = 400;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, InvalidContentError.prototype);
    }

}

export default InvalidContentError;
