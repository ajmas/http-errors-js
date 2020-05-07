import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 506
 *
 * No description available
 *
 */
declare class VariantAlsoNegotiatesError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default VariantAlsoNegotiatesError;
