import * as promptSync from 'prompt-sync'

const prompt = promptSync();

function Factor(No1 : number)
{
    for(let Cnt =0; Cnt < No1; Cnt++)
    {
        if(No1 % Cnt == 0)
        {
            console.log(Cnt);
        }
    }
}

var No = prompt('Enter number');
parseInt(No)

Factor(No);