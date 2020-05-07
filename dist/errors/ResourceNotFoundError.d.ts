import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 404
 *
 * No description available
 *
 */
declare class ResourceNotFoundError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default ResourceNotFoundError;
