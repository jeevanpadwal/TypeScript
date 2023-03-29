function Maximum(No1 :number ,No2:number,No3 : number):number
{
    let max = 0
    if(No1 > No2 )
    {
        max = No1;
    }
    else if(No2 > No3)
    {
        max = No2;
    }
    else 
    {
        max = No3;
    }
    return max;
}

var No1 :number = 89
var No2 : number = 23;
var No3 : number = 6;

var Ret : number = 0;
Ret = Maximum(No1,No2,No3);

console.log("Maximum Number is :"+Ret);


