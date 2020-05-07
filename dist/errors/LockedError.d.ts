import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 423
 *
 * No description available
 *
 */
declare class LockedError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default LockedError;
