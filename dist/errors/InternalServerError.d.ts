import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 500
 *
 * No description available
 *
 */
declare class InternalServerError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default InternalServerError;
