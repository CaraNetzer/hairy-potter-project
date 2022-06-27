let pots = [];

export const toSellOrNotToSell = (pot) => {
    if (pot.cracked == false) {
        if (pot.weight >= 6) {
            pot.price = 40;
        } else {
            pot.price = 20;
        }
        pots.push(pot);
    }
    return pot;
}

export const usePottery = () => {
    return pots.map(pot => ({...pot})) 
}

//module.exports = {toSellOrNotToSell, usePottery}