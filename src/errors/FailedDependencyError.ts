import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 424
 *
 * No description available
 *
 */
class FailedDependencyError extends Error implements IHTTPError {

    httpStatusCode = 424;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, FailedDependencyError.prototype);
    }

}

export default FailedDependencyError;
