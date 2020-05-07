import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 502
 *
 * No description available
 *
 */
declare class BadGatewayError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default BadGatewayError;
