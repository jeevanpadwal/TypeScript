

function ChkString(str: string, word: string): boolean
 {
   
    return str.indexOf(word) != -1;
}
  

var sentence = 'Pune kothrud Marvellous Infosystems';
var wordToFind = 'Marvellous';

var isFound = ChkString(sentence, wordToFind);

if (isFound)
{
    console.log('String contains ' + wordToFind + ' in it.');
} 
else
{
    console.log('String does not contain ' + wordToFind + '.');
}
  
