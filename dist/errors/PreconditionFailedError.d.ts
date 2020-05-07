import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 412
 *
 * No description available
 *
 */
declare class PreconditionFailedError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default PreconditionFailedError;
