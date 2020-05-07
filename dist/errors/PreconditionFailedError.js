"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * This file is generated. To update, please do so via
 * the generator.
 */
/**
 * HTTP status code: 412
 *
 * No description available
 *
 */
var PreconditionFailedError = /** @class */ (function (_super) {
    __extends(PreconditionFailedError, _super);
    function PreconditionFailedError(message) {
        var _this = _super.call(this, message) || this;
        _this.httpStatusCode = 412;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, PreconditionFailedError.prototype);
        return _this;
    }
    return PreconditionFailedError;
}(Error));
exports.default = PreconditionFailedError;
