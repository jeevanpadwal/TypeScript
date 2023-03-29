import * as promptSynac from'prompt-sync'
const prompt = promptSynac()

function ChkAmstrong(number)
{

 let sum = 0;

let temp = number;
    while (temp > 0) {
    
        let iDigit = temp % 10;

        sum += iDigit * iDigit * iDigit;

    
        temp = Math.floor(temp / 10); 
    }

    if (sum == number) {
        console.log("is an Armstrong number");
    }
    else {
        console.log("is not an Armstrong number.");
    }
}

console.log("Enter the positive integer number");
var no = (prompt())

ChkAmstrong(no)