import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 405
 *
 * No description available
 *
 */
declare class BadMethodError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default BadMethodError;
