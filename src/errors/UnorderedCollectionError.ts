import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 425
 *
 * No description available
 *
 */
class UnorderedCollectionError extends Error implements IHTTPError {

    httpStatusCode = 425;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UnorderedCollectionError.prototype);
    }

}

export default UnorderedCollectionError;
