import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 429
 *
 * No description available
 *
 */
declare class RequestThrottledError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default RequestThrottledError;
