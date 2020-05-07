import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 509
 *
 * No description available
 *
 */
class BandwidthLimitExceededError extends Error implements IHTTPError {

    httpStatusCode = 509;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, BandwidthLimitExceededError.prototype);
    }

}

export default BandwidthLimitExceededError;
