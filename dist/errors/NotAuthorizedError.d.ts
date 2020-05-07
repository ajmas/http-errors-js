import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 403
 *
 * No description available
 *
 */
declare class NotAuthorizedError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default NotAuthorizedError;
