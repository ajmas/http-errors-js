import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 423
 *
 * No description available
 *
 */
class LockedError extends Error implements IHTTPError {

    httpStatusCode = 423;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, LockedError.prototype);
    }

}

export default LockedError;
