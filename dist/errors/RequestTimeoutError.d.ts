import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 408
 *
 * No description available
 *
 */
declare class RequestTimeoutError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default RequestTimeoutError;
