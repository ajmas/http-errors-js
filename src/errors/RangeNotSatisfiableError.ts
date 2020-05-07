import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 416
 *
 * No description available
 *
 */
class RangeNotSatisfiableError extends Error implements IHTTPError {

    httpStatusCode = 416;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, RangeNotSatisfiableError.prototype);
    }

}

export default RangeNotSatisfiableError;
