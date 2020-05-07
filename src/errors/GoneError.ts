import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 410
 *
 * No description available
 *
 */
class GoneError extends Error implements IHTTPError {

    httpStatusCode = 410;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, GoneError.prototype);
    }

}

export default GoneError;
