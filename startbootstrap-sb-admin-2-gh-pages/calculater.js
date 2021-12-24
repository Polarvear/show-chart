// function calculater(ratioPercent, profit) {
//     const toHundred = 100/ratioPercent
//     return profit*toHundred;
// }
//
// console.log(calculater(7.28, 41190))

function monenytoPercent(data1, data2, data3, data4) {
    const money = parseFloat(data1) + parseFloat(data2) + parseFloat(data3) + parseFloat(data4);
    const preresult1 = money/parseFloat(data1)
    // const preresult2 = money/data2
    // const preresult3 = money/data3
    // const preresult4 = money/data4
    const percent = 100
    const result = percent/parseFloat(preresult1)
    console.log(result)


}
monenytoPercent(20,20, 20, 20)

// prarameter 값에 맞지않게 argument를 넘겨버리면 에러가 발생하는 걸 알게 되었다