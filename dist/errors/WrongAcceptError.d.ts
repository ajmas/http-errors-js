import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 406
 *
 * No description available
 *
 */
declare class WrongAcceptError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default WrongAcceptError;
