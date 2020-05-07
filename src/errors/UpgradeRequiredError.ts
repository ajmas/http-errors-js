import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 426
 *
 * No description available
 *
 */
class UpgradeRequiredError extends Error implements IHTTPError {

    httpStatusCode = 426;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UpgradeRequiredError.prototype);
    }

}

export default UpgradeRequiredError;
