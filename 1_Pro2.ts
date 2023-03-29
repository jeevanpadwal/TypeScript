import * as promptSync from 'prompt-sync'


function AreaCircle(Radius : number):number
{
    let Area : number =0;

    Area = 3.14 * Radius * Radius;

    return Area;
}

const prompt = promptSync();
const No1 = prompt('Enter Radius of Circle in cm');
parseInt(No1)

var Ret : number = 0;
Ret = AreaCircle(No1);
console.log("Area of Circle is "+ Ret +" sq. m");

