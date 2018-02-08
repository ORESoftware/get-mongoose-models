"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings = {
    myMongoose: null
};
exports.setMongoose = function (v) {
    settings.myMongoose = v;
};
exports.getModels = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Array.from(arguments).map(function (n) {
        return settings.myMongoose.model(n);
    });
};
var $exports = module.exports;
exports.default = $exports;
