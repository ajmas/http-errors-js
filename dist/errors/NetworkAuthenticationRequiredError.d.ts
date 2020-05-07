import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 511
 *
 * No description available
 *
 */
declare class NetworkAuthenticationRequiredError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default NetworkAuthenticationRequiredError;
