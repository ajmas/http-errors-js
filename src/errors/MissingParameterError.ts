import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 409
 *
 * No description available
 *
 */
class MissingParameterError extends Error implements IHTTPError {

    httpStatusCode = 409;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, MissingParameterError.prototype);
    }

}

export default MissingParameterError;
