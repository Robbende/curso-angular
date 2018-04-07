"use strict";
/*

    module: any file is a module

    to use this file outside we need to export this class with export keyword, now this file is visible

*/
exports.__esModule = true;
var Point = /** @class */ (function () {
    // typescript can not have multiple constructors
    // the solution is convert tye parameters of the constructor optional (?)
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return Point;
}());
exports.Point = Point;
