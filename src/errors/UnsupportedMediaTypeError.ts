import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 415
 *
 * No description available
 *
 */
class UnsupportedMediaTypeError extends Error implements IHTTPError {

    httpStatusCode = 415;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UnsupportedMediaTypeError.prototype);
    }

}

export default UnsupportedMediaTypeError;
