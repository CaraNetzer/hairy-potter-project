import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";

export const PotteryList = () => {
    const potsToBeSold = usePottery();
    let html = "";
    for (const pot of potsToBeSold) {
        html += `<section class="pottery" id="pottery--${pot.id}">
    <h2 class="pottery__shape">${pot.shape}</h2>
    <div class="pottery__properties">
        Item weighs ${pot.weight} grams and is ${pot.height} cm in height
    </div>
    <div class="pottery__price">
        Price is $${pot.price}
    </div>
</section>`
    }
    return html;
}

//module.exports = {potteryList}