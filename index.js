"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.getModels = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Array.from(arguments).map(function (n) {
        return mongoose.model(n);
    });
};
var $exports = module.exports;
exports.default = $exports;
