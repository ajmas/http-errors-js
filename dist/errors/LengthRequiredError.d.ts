import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 411
 *
 * No description available
 *
 */
declare class LengthRequiredError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default LengthRequiredError;
