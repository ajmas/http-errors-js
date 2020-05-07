import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 401
 *
 * No description available
 *
 */
declare class InvalidCredentialsError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default InvalidCredentialsError;
