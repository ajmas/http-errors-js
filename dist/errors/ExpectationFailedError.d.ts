import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 417
 *
 * No description available
 *
 */
declare class ExpectationFailedError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default ExpectationFailedError;
