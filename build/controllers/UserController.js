"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        res.send('/user/index');
    };
    UserController.prototype.get = function (req, res) {
        res.send('/user/get');
    };
    return UserController;
}());
exports.default = UserController;
