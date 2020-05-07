import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 509
 *
 * No description available
 *
 */
declare class BandwidthLimitExceededError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default BandwidthLimitExceededError;
