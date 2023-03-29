import * as promptSync from 'prompt-sync'
const prompt = promptSync()

function Finbonacci(No : number)
{
    let a : number = 0
    let b : number = 1

    let c :number =0;

    for(var Cnt =1; Cnt <= No-2 && c < No; Cnt++)
    {
        c = a + b;
        console.log(c);
        a = b
        b = c;
    }
}

console.log("Enter number")
var No =parseInt(prompt())

Finbonacci(No);