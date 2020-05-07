import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 428
 *
 * No description available
 *
 */
class PreconditionRequiredError extends Error implements IHTTPError {

    httpStatusCode = 428;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, PreconditionRequiredError.prototype);
    }

}

export default PreconditionRequiredError;
