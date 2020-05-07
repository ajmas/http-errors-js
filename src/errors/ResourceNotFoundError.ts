import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 404
 *
 * No description available
 *
 */
class ResourceNotFoundError extends Error implements IHTTPError {

    httpStatusCode = 404;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ResourceNotFoundError.prototype);
    }

}

export default ResourceNotFoundError;
