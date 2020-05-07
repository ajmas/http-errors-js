import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 425
 *
 * No description available
 *
 */
declare class UnorderedCollectionError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default UnorderedCollectionError;
