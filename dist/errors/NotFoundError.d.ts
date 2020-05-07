import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 404
 *
 * No description available
 *
 */
declare class NotFoundError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default NotFoundError;
