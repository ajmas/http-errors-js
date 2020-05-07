import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 510
 *
 * No description available
 *
 */
class NotExtendedError extends Error implements IHTTPError {

    httpStatusCode = 510;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotExtendedError.prototype);
    }

}

export default NotExtendedError;
