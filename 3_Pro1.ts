class Arithmatic
{
    Number1;
    Number2;
 
    constructor(a : number,b : number)
    {
        this.Number1 = a;
        this.Number2 = b;
    }

    Addition()
    {
        return this.Number1 + this.Number2;

    }

    Substraction()
    {
        return this.Number1 - this.Number2;
    }

    Multiplication()
    {
        return this.Number1 * this.Number2;
    }

    Division()
    {
        return this.Number1 / this.Number2;
    }
    
}

var Ret : number =0;

var obj = new Arithmatic(20,10);
var obj2 = new Arithmatic(20,30);

Ret = obj.Addition()
console.log("Addition is :"+ Ret);

Ret = obj.Substraction()
console.log("Substraction is :"+ Ret);

Ret = obj.Multiplication()
console.log("Multiplication is :"+ Ret);

Ret = obj.Division()
console.log("Division is :"+ Ret);


Ret = obj2.Addition()
console.log("Addition is :"+ Ret);

Ret = obj2.Substraction()
console.log("Substraction is :"+ Ret);

Ret = obj2.Multiplication()
console.log("Multiplication is :"+ Ret);

Ret = obj2.Division()
console.log("Division is :"+ Ret);