import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 401
 *
 * No description available
 *
 */
declare class UnauthorizedError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default UnauthorizedError;
