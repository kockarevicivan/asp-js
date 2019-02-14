"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostController = /** @class */ (function () {
    function PostController() {
    }
    PostController.prototype.index = function (req, res) {
        res.send('/post/index');
    };
    PostController.prototype.get = function (req, res) {
        res.send('/post/get');
    };
    return PostController;
}());
exports.default = PostController;
