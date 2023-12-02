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