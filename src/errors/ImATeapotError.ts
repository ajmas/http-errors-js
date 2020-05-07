import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 418
 *
 * No description available
 *
 */
class ImATeapotError extends Error implements IHTTPError {

    httpStatusCode = 418;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ImATeapotError.prototype);
    }

}

export default ImATeapotError;
