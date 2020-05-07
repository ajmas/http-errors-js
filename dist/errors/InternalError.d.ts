import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 500
 *
 * No description available
 *
 */
declare class InternalError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default InternalError;
