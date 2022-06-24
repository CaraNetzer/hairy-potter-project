export const potteryList = (potsToBeSold) => {
    let html = "";
    for (const pot of potsToBeSold) {
        html += `<section class="pottery" id="pottery--1">
    <h2 class="pottery__shape">${pot.shape}</h2>
    <div class="pottery__properties">
        Item weighs ${pot.weight} and is ${pot.height} in height
    </div>
    <div class="pottery__price">
        Price is $${pot.price}
    </div>
</section>`
    }
    return html;
}

//module.exports = {potteryList}