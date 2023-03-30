class Circle
{
    Radius;
    PI;

    constructor(No : number)
    {
        this.Radius = No;
        this.PI = 3.14;
    }

    Area()
    {
        return this.PI * this.Radius * this.Radius;
    }

}

class CircleX extends Circle{

    constructor(Input : number)
    {
        super(Input);
    }

    Circumferance()
    {
        return 2 * this.PI * this.Radius;
    }
}

var Ret : number = 0;

var obj = new CircleX(5.2)
var obj2 = new CircleX(10)

Ret = obj.Area()
console.log("Area of Circle :"+Ret+" sq cm")

Ret = obj2.Area()
console.log("Area of Circle :"+Ret+" sq cm")

Ret = obj.Circumferance()
console.log("Circumferance of Circle :"+Ret)

Ret = obj2.Circumferance()
console.log("Circumferance of Circle :"+Ret)