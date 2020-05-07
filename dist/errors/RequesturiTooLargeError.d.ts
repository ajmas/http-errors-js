import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 414
 *
 * No description available
 *
 */
declare class RequesturiTooLargeError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default RequesturiTooLargeError;
