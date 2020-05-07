import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 406
 *
 * No description available
 *
 */
declare class NotAcceptableError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default NotAcceptableError;
