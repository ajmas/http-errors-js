import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 501
 *
 * No description available
 *
 */
declare class NotImplementedError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default NotImplementedError;
