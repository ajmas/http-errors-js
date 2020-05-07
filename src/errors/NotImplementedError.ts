import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 501
 *
 * No description available
 *
 */
class NotImplementedError extends Error implements IHTTPError {

    httpStatusCode = 501;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotImplementedError.prototype);
    }

}

export default NotImplementedError;
