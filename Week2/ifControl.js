// let temperature=16;
// if(temperature<20){
//     console.log('Its Really Cold');
// }else {
//     console.log('Its Really Hot');
// }
// console.log('Pw Skills');  // It will run always



let score=110;
let life=3;
let bullets=1000;
console.log("Welcom to Kritan's Game");
if(score>99){
    console.log('You will get a life');
    score-=100;
    life++;
   let bullets=2000;
    console.log(`You bullets is ${bullets}`);
}else {
    console.log('You will not get life');
}
console.log(`Your score is ${score}, life is ${life} and bullets is ${bullets}`);



const email='kritanjaiswal9998@gmail.com';
if(email){
    console.log('Please enter your password');
}else {
    console.log('please enter your email');
}
// if(email=='kritanjaiswal9998@gmail.com'){
//     console.log('Please enter your password');
// }else {
//     console.log('please enter your email');
// }

// if(email!=""){
//     console.log('Please enter your password');
// }else {
//     console.log('please enter your email');
// }



//Truthy and Falsy values
console.log(false);
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
let a;
console.log(Boolean(a));
console.log(Boolean(parseInt('abc')));


// Logical Operator
const googleInToken="";
const githubInToken="";
if(googleInToken || githubInToken){
    console.log("Welcome to ou Website");
}else {
    console.log("Please login Firstly");
}