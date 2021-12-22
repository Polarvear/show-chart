function calculater(ratioPercent, profit) {
    const toHundred = 100/ratioPercent
    return profit*toHundred;
}

calculater(7.26, 41194)