import * as promptSynac from 'prompt-sync'
const promt = promptSynac()

function Summation(arr : number[]) 
{
    let i, first, second;

    let arr_size = arr.length;

  
        // There should be atleast twoelements
        if (arr_size < 2) {
            console.log(" Invalid Input ");
            return;
        }
  
        // sort the array
        arr.sort();
  
        // start from second last element
        // as the largest element is at last
        for (i = arr_size - 2; i >= 0; i--) {
            // if the element is not
            // equal to largest element
            if (arr[i] != arr[arr_size - 1]) {
                console.log("The second largest element is " + arr[i]);
                return;
            }
        }
  
        console.log("There is no second largest element<br>");
    }


var Arr : number[] = [23,6,7,4,5,7]
var Ret : number = 0;
 Summation(Arr)
console.log("Second largest number from Araay  is :"+Ret);