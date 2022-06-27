import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";

/* const { firePottery } = require("./Kiln.js");
const {makePottery} = require("./PotteryWheel.js")
const {toSellOrNotToSell} = require("./PotteryCatalog.js")
const {potteryList} = require("./PotteryList.js") */

let pot1 = makePottery("round","5", "7");
let pot2 = makePottery("oval","6", "9");
let pot3 = makePottery("square","4", "5");
let pot4 = makePottery("rectangle","3", "6");
let pot5 = makePottery("diamond","5.5", "8");

pot1 = firePottery(pot1, 2400);
pot2 = firePottery(pot2, 2100);
pot3 = firePottery(pot3, 2200);
pot4 = firePottery(pot4, 2000);
pot5 = firePottery(pot5, 2150);

const pots = [pot1,pot2,pot3,pot4,pot5];
let potsToUse = [];

for (const pot of pots) {
    potsToUse = toSellOrNotToSell(pot);
}

const mug = toSellOrNotToSell(firePottery(makePottery("Mug", 10, 8), 3000))
const ornament = toSellOrNotToSell(firePottery(makePottery("Ornament", 2, 5), 2000))
const platter = toSellOrNotToSell(firePottery(makePottery("Platter", 7, 2), 2000))

let potteryParent = document.querySelector(".potteryList");
potteryParent.innerHTML = PotteryList();



console.log(potteryParent.innerHTML);