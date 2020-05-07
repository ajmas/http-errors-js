import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 507
 *
 * No description available
 *
 */
class InsufficientStorageError extends Error implements IHTTPError {

    httpStatusCode = 507;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, InsufficientStorageError.prototype);
    }

}

export default InsufficientStorageError;
