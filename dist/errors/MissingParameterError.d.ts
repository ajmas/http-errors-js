import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 409
 *
 * No description available
 *
 */
declare class MissingParameterError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default MissingParameterError;
