import * as promptSync from 'prompt-sync'
const prompt = promptSync();
function ChkPrime(No : number): boolean
{
    var Pri : number = 0
    var Flag : boolean = false;
   for(let Cnt =0; Cnt < No; Cnt++)
   {
     if(No % Cnt == 0)
     {
        Pri++
     }
   }
   if(Pri == 1)
   {
     Flag = true;
   }
   return Flag;
}

console.log("Enter number")
var No = parseInt(prompt());

var Ret : boolean;
Ret = ChkPrime(No);
if(Ret == true)
{
    console.log("It is prime number")
}
else
{
    console.log("It not prime number");
}

