import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 506
 *
 * No description available
 *
 */
class VariantAlsoNegotiatesError extends Error implements IHTTPError {

    httpStatusCode = 506;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, VariantAlsoNegotiatesError.prototype);
    }

}

export default VariantAlsoNegotiatesError;
