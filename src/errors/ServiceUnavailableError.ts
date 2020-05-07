import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 503
 *
 * No description available
 *
 */
class ServiceUnavailableError extends Error implements IHTTPError {

    httpStatusCode = 503;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    }

}

export default ServiceUnavailableError;
