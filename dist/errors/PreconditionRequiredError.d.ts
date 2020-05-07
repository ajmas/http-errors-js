import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 428
 *
 * No description available
 *
 */
declare class PreconditionRequiredError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default PreconditionRequiredError;
