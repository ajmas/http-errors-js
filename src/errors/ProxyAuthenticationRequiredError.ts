import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 407
 *
 * No description available
 *
 */
class ProxyAuthenticationRequiredError extends Error implements IHTTPError {

    httpStatusCode = 407;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ProxyAuthenticationRequiredError.prototype);
    }

}

export default ProxyAuthenticationRequiredError;
