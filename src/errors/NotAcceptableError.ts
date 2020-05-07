import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 406
 *
 * No description available
 *
 */
class NotAcceptableError extends Error implements IHTTPError {

    httpStatusCode = 406;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotAcceptableError.prototype);
    }

}

export default NotAcceptableError;
