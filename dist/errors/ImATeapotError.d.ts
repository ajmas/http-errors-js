import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 418
 *
 * No description available
 *
 */
declare class ImATeapotError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default ImATeapotError;
