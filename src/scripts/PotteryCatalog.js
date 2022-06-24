let pots = [];

const toSellOrNotToSell = (pot) => {
    if (pot.weight >= 6) {
        pot.price = 40;
    } else {
        pot.price = 20;
    }
    if (!pot.cracked) {
        pots.push(pot);
    }
    return usePottery(pots);
}

const usePottery = (potsArray) => {
    return potsArray.map(pot => ({...pot})) 
}

module.exports = {toSellOrNotToSell, usePottery}