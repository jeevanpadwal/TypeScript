
function Maximum(Arr : number[]) : number
{
    let max : number =0;
    for(let Cnt =0; Cnt < Arr.length; Cnt++)
    {
        if(max < Arr[Cnt])
        {
            max = Arr[Cnt];
        }
    }
    return max;
}

var Arr : number[] = [23,89,6,29,56,45,77,32]
var Ret : number = 0;

Ret = Maximum(Arr)
console.log("Maximum number is :"+Ret);