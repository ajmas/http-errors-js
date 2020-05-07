import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 505
 *
 * No description available
 *
 */
declare class HttpVersionNotSupportedError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default HttpVersionNotSupportedError;
