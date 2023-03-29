

function ChkString(str: string, word: string): boolean
 {
   
    
    return str.indexOf(word) != -1;
}
  

const sentence = 'Pune kothrud Marvellous Infosystems';
const wordToFind = 'Marvellous';

const isFound = ChkString(sentence, wordToFind);

if (isFound)
{
    console.log('String contains ' + wordToFind + ' in it.');
} 
else
{
    console.log('String does not contain ' + wordToFind + '.');
}
  