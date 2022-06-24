let key = 0;

const makePottery = (shape, weight, height) => {
    key++;
    return {
        id: key,
        shape: shape,
        weight: weight,
        height: height
    }
}

module.exports = {makePottery} 
