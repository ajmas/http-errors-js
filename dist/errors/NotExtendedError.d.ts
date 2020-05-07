import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 510
 *
 * No description available
 *
 */
declare class NotExtendedError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default NotExtendedError;
