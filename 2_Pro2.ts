import * as promptSynac from 'prompt-sync'
const promt = promptSynac()

function Summation(Arr : number[]) : number
{
    let sum : number =0;
    for(let Cnt =0; Cnt < Arr.length; Cnt++)
    {
       sum = sum + Arr[Cnt];
    }
    return sum;
}

var Arr : number[] = [23,6,7,4,5,7]
var Ret : number = 0;

Ret = Summation(Arr)
console.log("Summation of Araay number is :"+Ret);