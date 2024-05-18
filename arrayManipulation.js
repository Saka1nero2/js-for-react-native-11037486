function processArray(arr){
    const newArray = [];
 
     for(let num of arr){
 
         if(num % 2 == 0){
 
             newArray.push(num * num);
 
         }else{
 
             newArray.push(num*3);
         }
     }
     return newArray;
 }
 //trying out some numbers
 const numbers = [1,2,3,4];
 //processArray = newNumbers
 const newNumbers = processArray(numbers);
 console.log(newNumbers);
 
 //console.log(newNumbers.length);
 
 function formatArrayStrings(stringArray , newNumbers){
     if(stringArray.length!== newNumbers.length){
         throw new error("Input arrays must have the same length");
     }
     for(let i = 0 ; i < stringArray.length ; i++){
         const currentString = stringArray[i];
         const currentNumber = newNumbers[i];
         
         if(currentNumber % 2 ==0 ){
             stringArray[i] = currentString.toUpperCase();
         }else{
             stringArray[i] = currentString.toLowerCase();
         }
     }
 
     return stringArray;
 
 }
 const stringArray = ["hello", "world", "how", "are", "you"];
 const processedNumbers = [2, 1, 4, 3, 0]; // Assume processed by processArray (not shown)
 
 const formattedStrings = formatArrayStrings(stringArray, processedNumbers);
 console.log(formattedStrings);
 