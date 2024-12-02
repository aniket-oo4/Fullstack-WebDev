function SayHello(){

console.log("Hello");
}
setTimeout(SayHello,1000*3);
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// let myInterval= setInterval(()=> {
// console.clear();
//   now = new Date();
//   hours = now.getHours();
//   minutes = now.getMinutes();
//   seconds = now.getSeconds();
// console.log(`${hours}:${minutes}:${seconds}`);
// },1000); 

// function stopInterval(interval){
//     clearInterval(interval);
// }
//  setTimeout(stopInterval(myInterval),1000*20);
