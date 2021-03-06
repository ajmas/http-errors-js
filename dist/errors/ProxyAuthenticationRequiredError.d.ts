import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 407
 *
 * No description available
 *
 */
declare class ProxyAuthenticationRequiredError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default ProxyAuthenticationRequiredError;
