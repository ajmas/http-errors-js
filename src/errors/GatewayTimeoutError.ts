import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 504
 *
 * No description available
 *
 */
class GatewayTimeoutError extends Error implements IHTTPError {

    httpStatusCode = 504;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, GatewayTimeoutError.prototype);
    }

}

export default GatewayTimeoutError;
