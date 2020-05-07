import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 424
 *
 * No description available
 *
 */
declare class FailedDependencyError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default FailedDependencyError;
