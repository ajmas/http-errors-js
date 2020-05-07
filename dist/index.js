"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BadRequestError_1 = require("./errors/BadRequestError");
exports.BadRequestError = BadRequestError_1.default;
var UnauthorizedError_1 = require("./errors/UnauthorizedError");
exports.UnauthorizedError = UnauthorizedError_1.default;
var PaymentRequiredError_1 = require("./errors/PaymentRequiredError");
exports.PaymentRequiredError = PaymentRequiredError_1.default;
var ForbiddenError_1 = require("./errors/ForbiddenError");
exports.ForbiddenError = ForbiddenError_1.default;
var NotFoundError_1 = require("./errors/NotFoundError");
exports.NotFoundError = NotFoundError_1.default;
var MethodNotAllowedError_1 = require("./errors/MethodNotAllowedError");
exports.MethodNotAllowedError = MethodNotAllowedError_1.default;
var NotAcceptableError_1 = require("./errors/NotAcceptableError");
exports.NotAcceptableError = NotAcceptableError_1.default;
var ProxyAuthenticationRequiredError_1 = require("./errors/ProxyAuthenticationRequiredError");
exports.ProxyAuthenticationRequiredError = ProxyAuthenticationRequiredError_1.default;
var RequestTimeoutError_1 = require("./errors/RequestTimeoutError");
exports.RequestTimeoutError = RequestTimeoutError_1.default;
var ConflictError_1 = require("./errors/ConflictError");
exports.ConflictError = ConflictError_1.default;
var GoneError_1 = require("./errors/GoneError");
exports.GoneError = GoneError_1.default;
var LengthRequiredError_1 = require("./errors/LengthRequiredError");
exports.LengthRequiredError = LengthRequiredError_1.default;
var PreconditionFailedError_1 = require("./errors/PreconditionFailedError");
exports.PreconditionFailedError = PreconditionFailedError_1.default;
var RequestEntityTooLargeError_1 = require("./errors/RequestEntityTooLargeError");
exports.RequestEntityTooLargeError = RequestEntityTooLargeError_1.default;
var RequesturiTooLargeError_1 = require("./errors/RequesturiTooLargeError");
exports.RequesturiTooLargeError = RequesturiTooLargeError_1.default;
var UnsupportedMediaTypeError_1 = require("./errors/UnsupportedMediaTypeError");
exports.UnsupportedMediaTypeError = UnsupportedMediaTypeError_1.default;
var RangeNotSatisfiableError_1 = require("./errors/RangeNotSatisfiableError");
exports.RangeNotSatisfiableError = RangeNotSatisfiableError_1.default;
var RequestedRangeNotSatisfiableError_1 = require("./errors/RequestedRangeNotSatisfiableError");
exports.RequestedRangeNotSatisfiableError = RequestedRangeNotSatisfiableError_1.default;
var ExpectationFailedError_1 = require("./errors/ExpectationFailedError");
exports.ExpectationFailedError = ExpectationFailedError_1.default;
var ImATeapotError_1 = require("./errors/ImATeapotError");
exports.ImATeapotError = ImATeapotError_1.default;
var UnprocessableEntityError_1 = require("./errors/UnprocessableEntityError");
exports.UnprocessableEntityError = UnprocessableEntityError_1.default;
var LockedError_1 = require("./errors/LockedError");
exports.LockedError = LockedError_1.default;
var FailedDependencyError_1 = require("./errors/FailedDependencyError");
exports.FailedDependencyError = FailedDependencyError_1.default;
var UnorderedCollectionError_1 = require("./errors/UnorderedCollectionError");
exports.UnorderedCollectionError = UnorderedCollectionError_1.default;
var UpgradeRequiredError_1 = require("./errors/UpgradeRequiredError");
exports.UpgradeRequiredError = UpgradeRequiredError_1.default;
var PreconditionRequiredError_1 = require("./errors/PreconditionRequiredError");
exports.PreconditionRequiredError = PreconditionRequiredError_1.default;
var TooManyRequestsError_1 = require("./errors/TooManyRequestsError");
exports.TooManyRequestsError = TooManyRequestsError_1.default;
var RequestHeaderFieldsTooLargeError_1 = require("./errors/RequestHeaderFieldsTooLargeError");
exports.RequestHeaderFieldsTooLargeError = RequestHeaderFieldsTooLargeError_1.default;
var InternalServerError_1 = require("./errors/InternalServerError");
exports.InternalServerError = InternalServerError_1.default;
var NotImplementedError_1 = require("./errors/NotImplementedError");
exports.NotImplementedError = NotImplementedError_1.default;
var BadGatewayError_1 = require("./errors/BadGatewayError");
exports.BadGatewayError = BadGatewayError_1.default;
var ServiceUnavailableError_1 = require("./errors/ServiceUnavailableError");
exports.ServiceUnavailableError = ServiceUnavailableError_1.default;
var GatewayTimeoutError_1 = require("./errors/GatewayTimeoutError");
exports.GatewayTimeoutError = GatewayTimeoutError_1.default;
var HttpVersionNotSupportedError_1 = require("./errors/HttpVersionNotSupportedError");
exports.HttpVersionNotSupportedError = HttpVersionNotSupportedError_1.default;
var VariantAlsoNegotiatesError_1 = require("./errors/VariantAlsoNegotiatesError");
exports.VariantAlsoNegotiatesError = VariantAlsoNegotiatesError_1.default;
var InsufficientStorageError_1 = require("./errors/InsufficientStorageError");
exports.InsufficientStorageError = InsufficientStorageError_1.default;
var BandwidthLimitExceededError_1 = require("./errors/BandwidthLimitExceededError");
exports.BandwidthLimitExceededError = BandwidthLimitExceededError_1.default;
var NotExtendedError_1 = require("./errors/NotExtendedError");
exports.NotExtendedError = NotExtendedError_1.default;
var NetworkAuthenticationRequiredError_1 = require("./errors/NetworkAuthenticationRequiredError");
exports.NetworkAuthenticationRequiredError = NetworkAuthenticationRequiredError_1.default;
var BadDigestError_1 = require("./errors/BadDigestError");
exports.BadDigestError = BadDigestError_1.default;
var BadMethodError_1 = require("./errors/BadMethodError");
exports.BadMethodError = BadMethodError_1.default;
var InternalError_1 = require("./errors/InternalError");
exports.InternalError = InternalError_1.default;
var InvalidArgumentError_1 = require("./errors/InvalidArgumentError");
exports.InvalidArgumentError = InvalidArgumentError_1.default;
var InvalidContentError_1 = require("./errors/InvalidContentError");
exports.InvalidContentError = InvalidContentError_1.default;
var InvalidCredentialsError_1 = require("./errors/InvalidCredentialsError");
exports.InvalidCredentialsError = InvalidCredentialsError_1.default;
var InvalidHeaderError_1 = require("./errors/InvalidHeaderError");
exports.InvalidHeaderError = InvalidHeaderError_1.default;
var InvalidVersionError_1 = require("./errors/InvalidVersionError");
exports.InvalidVersionError = InvalidVersionError_1.default;
var MissingParameterError_1 = require("./errors/MissingParameterError");
exports.MissingParameterError = MissingParameterError_1.default;
var NotAuthorizedError_1 = require("./errors/NotAuthorizedError");
exports.NotAuthorizedError = NotAuthorizedError_1.default;
var RequestExpiredError_1 = require("./errors/RequestExpiredError");
exports.RequestExpiredError = RequestExpiredError_1.default;
var RequestThrottledError_1 = require("./errors/RequestThrottledError");
exports.RequestThrottledError = RequestThrottledError_1.default;
var ResourceNotFoundError_1 = require("./errors/ResourceNotFoundError");
exports.ResourceNotFoundError = ResourceNotFoundError_1.default;
var WrongAcceptError_1 = require("./errors/WrongAcceptError");
exports.WrongAcceptError = WrongAcceptError_1.default;
