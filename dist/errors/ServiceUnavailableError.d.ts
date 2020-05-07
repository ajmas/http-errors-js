import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 503
 *
 * No description available
 *
 */
declare class ServiceUnavailableError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default ServiceUnavailableError;
