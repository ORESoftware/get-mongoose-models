"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.getModels = function () {
    return Array.from(arguments).map(function (n) {
        return mongoose.model(n);
    });
};
