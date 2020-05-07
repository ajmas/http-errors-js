import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 411
 *
 * No description available
 *
 */
class LengthRequiredError extends Error implements IHTTPError {

    httpStatusCode = 411;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, LengthRequiredError.prototype);
    }

}

export default LengthRequiredError;
