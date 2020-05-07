import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 416
 *
 * No description available
 *
 */
declare class RangeNotSatisfiableError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default RangeNotSatisfiableError;
