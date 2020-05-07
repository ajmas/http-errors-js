import IHTTPError from '../interfaces/IHttpError';
/**
 * HTTP status code: 426
 *
 * No description available
 *
 */
declare class UpgradeRequiredError extends Error implements IHTTPError {
    httpStatusCode: number;
    constructor(message: string);
}
export default UpgradeRequiredError;
