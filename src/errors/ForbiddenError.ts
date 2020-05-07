import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 403
 *
 * No description available
 *
 */
class ForbiddenError extends Error implements IHTTPError {

    httpStatusCode = 403;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }

}

export default ForbiddenError;
