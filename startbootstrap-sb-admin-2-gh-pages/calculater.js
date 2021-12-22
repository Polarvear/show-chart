function calculater(ratioPercent, profit) {
    const toHundred = 100/ratioPercent
    return profit*toHundred;
}

console.log(calculater(7.28, 41190))