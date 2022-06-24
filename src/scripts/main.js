//import { makePottery } from "./PotteryWheel";
const { firePottery } = require("./Kiln.js");
const {makePottery} = require("./PotteryWheel.js")

let pot1 = makePottery("round","5 lbs", "7 inches");
let pot2 = makePottery("oval","6 lbs", "9 inches");
let pot3 = makePottery("square","4 lbs", "5 inches");
let pot4 = makePottery("rectangle","3 lbs", "6 inches");
let pot5 = makePottery("diamond","5.5 lbs", "8 inches");

pot1 = firePottery(pot1, 2400);
pot2 = firePottery(pot2, 2100);
pot3 = firePottery(pot3, 2200);
pot4 = firePottery(pot4, 2000);
pot5 = firePottery(pot5, 2150);


console.log(pot1);
console.log(pot2);
console.log(pot3);
console.log(pot4);
console.log(pot5);