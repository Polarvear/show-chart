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

fetch('https://api.odcloud.kr/api/15071595/v1/uddi:262b7fb0-1f5e-40cd-8f14-b0614b4dc997?page=1&perPage=10&serviceKey=Fs0FMSahbQEYkW4qd0bKDnX6ualVgtwD6luFAYuMaOG8c4P%2B%2Bhsjn%2BMh2qNQZoG9AFPrTvZFq%2FJ013lo8dUBWA%3D%3D')
    .then(response => response.json())
    .then(data => {
        const profit = []
        const year = data.data // 출력확인
        year.map(m => profit.push(m["2017년 수익금(단위: 십억원)"]))
        console.log(profit)
        for (let i = 0; i < profit.length; i++) {
            console.log(profit[0])

        }
    })

// prarameter 값에 맞지않게 argument를 넘겨버리면 에러가 발생하는 걸 알게 되었다