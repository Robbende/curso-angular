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
var point = new Point(10, 20);
var point2 = new Point();
point2.x = 5;
point2.y = 5;
point.draw();
point2.draw();
