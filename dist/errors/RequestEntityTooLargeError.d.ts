import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 413
 *
 * No description available
 *
 */
declare class RequestEntityTooLargeError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default RequestEntityTooLargeError;
