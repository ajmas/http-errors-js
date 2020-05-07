import IHTTPError from '../interfaces/IHttpError';

/*
 * This file is generated. To update, please do so via
 * the generator.
 */

/**
 * HTTP status code: 402
 *
 * No description available
 *
 */
class PaymentRequiredError extends Error implements IHTTPError {

    httpStatusCode = 402;

    constructor(message: string) {
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, PaymentRequiredError.prototype);
    }

}

export default PaymentRequiredError;
