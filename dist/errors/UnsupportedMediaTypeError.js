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
 * HTTP status code: 415
 *
 * No description available
 *
 */
var UnsupportedMediaTypeError = /** @class */ (function (_super) {
    __extends(UnsupportedMediaTypeError, _super);
    function UnsupportedMediaTypeError(message) {
        var _this = _super.call(this, message) || this;
        _this.httpStatusCode = 415;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, UnsupportedMediaTypeError.prototype);
        return _this;
    }
    return UnsupportedMediaTypeError;
}(Error));
exports.default = UnsupportedMediaTypeError;
