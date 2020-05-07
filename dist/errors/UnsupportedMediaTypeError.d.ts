import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 415
 *
 * No description available
 *
 */
declare class UnsupportedMediaTypeError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default UnsupportedMediaTypeError;
