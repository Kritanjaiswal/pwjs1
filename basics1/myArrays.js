const myArray=[1,2,3,4,5];

const myNewArray=new Array(1,2,3,4,5);
console.log(myArray.length);
myArray.push(6);
console.log(myArray.length);
console.log(myArray);
const popped_Element=myArray.pop();
console.log(popped_Element);
console.log(myArray);

console.log(myArray.toString());
console.log(myArray.join("-"));

console.log(myArray.slice(1,3));
console.log(myArray);
console.log(myArray.splice(1,3));
console.log(myArray);
