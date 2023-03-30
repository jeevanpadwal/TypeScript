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

var Ret : number = 0;

var obj = new Circle(5.2)
var obj2 = new Circle(10)

Ret = obj.Area()
console.log("Area of Circle :"+Ret+" sq cm")


Ret = obj2.Area()
console.log("Area of Circle :"+Ret+" sq cm")
