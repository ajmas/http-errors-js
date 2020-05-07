import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 431
 *
 * No description available
 *
 */
declare class RequestHeaderFieldsTooLargeError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default RequestHeaderFieldsTooLargeError;
