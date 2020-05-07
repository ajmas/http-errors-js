import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 416
 *
 * No description available
 *
 */
declare class RequestedRangeNotSatisfiableError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default RequestedRangeNotSatisfiableError;
