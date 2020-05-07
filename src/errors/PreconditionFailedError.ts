import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 412
 *
 * No description available
 *
 */
class PreconditionFailedError extends Error implements IHTTPError {

    httpStatusCode = 412;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, PreconditionFailedError.prototype);
    }

}

export default PreconditionFailedError;
