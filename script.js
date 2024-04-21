console.log("HW-Functions")

//Part 1: Thinking Functionally
//Take an array of numbers and return the sum.
let myNums = [10, 20, 30, 40, 50];
let sum = 0;
myNums.forEach((el) => sum += el);
console.log(sum);


// Take an array of numbers and return the average.
function calculateAverage(myNums) {
    let total = 0;
    let count = 0;

    myNums.forEach(function(item) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(calculateAverage(myNums));

//Take an array of strings and return the longest string.
function longest_str_in_array(arr)
  {
    let max_str = arr[0].length;
    let output = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let longest = arr[i].length;
        if (longest > max_str) {
            output = arr[i];
            max_str = longest;
        }
    }
    return output;
}
console.log(longest_str_in_array(["come" , "sunday" , "out" , "night" ]));

//Take an array of strings, and a number and return an array of the strings that are longer than the given number.
let arr1 = ['come','sunday','out','night'] ;
let maxAllowedLength = 4;
let returnLarger1 =[]
let output= arr1.forEach((a) => {

   if(a.length > maxAllowedLength) 
   {
    returnLarger1.push(a);
   }
});
console.log(returnLarger1);



// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

    

function printRecursiveNum(num,curVal) { 
    if (curVal>num) { 
        return; 
    } 
    console.log(curVal); 
    printRecursiveNum(num, curVal + 1); 
} 
  
const num = 5; 
printRecursiveNum(num,1);

//Part 2: Thinking Methodically
//Sort the array by age.
let inputarr = 
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

 inputarr.sort(
    function(a, b) {
       return a.age - b.age
    }
);
console.log(inputarr)

//Filter the array to remove entries with an age greater than 50.

let age1 = inputarr.filter((ageofPerson) => ageofPerson.age < 50 );
console.log(age1);
//Map the array to change the “occupation” key to “job” and increment every age by 1.
const resultArray = inputarr.map(elm => ({ job: elm.occupation}));
console.log(resultArray)

