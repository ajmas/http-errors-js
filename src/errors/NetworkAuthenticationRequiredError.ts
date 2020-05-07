import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 511
 *
 * No description available
 *
 */
class NetworkAuthenticationRequiredError extends Error implements IHTTPError {

    httpStatusCode = 511;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NetworkAuthenticationRequiredError.prototype);
    }

}

export default NetworkAuthenticationRequiredError;
