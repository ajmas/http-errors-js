import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 502
 *
 * No description available
 *
 */
class BadGatewayError extends Error implements IHTTPError {

    httpStatusCode = 502;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, BadGatewayError.prototype);
    }

}

export default BadGatewayError;
