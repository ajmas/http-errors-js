import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 410
 *
 * No description available
 *
 */
declare class GoneError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default GoneError;
