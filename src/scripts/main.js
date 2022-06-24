//import { makePottery } from "./PotteryWheel";
const {makePottery} = require("./PotteryWheel.js")

const pot1 = makePottery("round","5 lbs", "7 inches");
const pot2 = makePottery("oval","6 lbs", "9 inches");
const pot3 = makePottery("square","4 lbs", "5 inches");
const pot4 = makePottery("rectangle","3 lbs", "6 inches");
const pot5 = makePottery("diamond","5.5 lbs", "8 inches");

console.log(pot1);
console.log(pot2);
console.log(pot3);
console.log(pot4);
console.log(pot5);