import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 507
 *
 * No description available
 *
 */
declare class InsufficientStorageError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default InsufficientStorageError;
