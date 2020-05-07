import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 400
 *
 * No description available
 *
 */
declare class InvalidContentError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default InvalidContentError;
