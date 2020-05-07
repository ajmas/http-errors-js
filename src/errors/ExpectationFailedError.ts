import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 417
 *
 * No description available
 *
 */
class ExpectationFailedError extends Error implements IHTTPError {

    httpStatusCode = 417;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ExpectationFailedError.prototype);
    }

}

export default ExpectationFailedError;
