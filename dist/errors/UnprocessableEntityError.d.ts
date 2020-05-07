import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 422
 *
 * No description available
 *
 */
declare class UnprocessableEntityError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default UnprocessableEntityError;
