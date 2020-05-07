import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 504
 *
 * No description available
 *
 */
declare class GatewayTimeoutError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default GatewayTimeoutError;
