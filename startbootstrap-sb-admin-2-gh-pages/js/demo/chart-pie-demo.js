// Set new default font family and font color to mimic Bootstrap's default styling

Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
const profit = []
let profitPercent = []
const result = []
const sort = []
fetch('https://api.odcloud.kr/api/15071595/v1/uddi:262b7fb0-1f5e-40cd-8f14-b0614b4dc997?page=1&perPage=10&serviceKey=Fs0FMSahbQEYkW4qd0bKDnX6ualVgtwD6luFAYuMaOG8c4P%2B%2Bhsjn%2BMh2qNQZoG9AFPrTvZFq%2FJ013lo8dUBWA%3D%3D')
    .then(response => response.json())
    .then(data => {
        const year = data.data // 출력확인
        console.log(year)
        year.map(m => profit.push(m["2017년 수익금(단위: 십억원)"]))
        year.map(m => profitPercent.push(m["2017년 수익률"]))
        year.map(m => sort.push(m["구분"]))
        profit.splice(0, 1)
        profitPercent.splice(0, 1)
        sort.splice(0,1)
        const toNumbers = arr => arr.map(Number);
        const profitToNum = toNumbers(profit)
        const percentToNum = toNumbers(profitPercent)
        const oneHundered = 100
        function makePrincipal(profitToNum, percentToNum) {
            for (let i = 0; i < profitToNum.length; i++) {
                let preResult = profitToNum[i] * (oneHundered / percentToNum[i])
                result.push(parseInt(preResult))
            }
            console.log(result)
        }
        makePrincipal(profitToNum, percentToNum)

        var ctx = document.getElementById("myPieChart");
        var myPieChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: sort,
                datasets: [{
                    data: result,
                    label: "투자원금(단위: 십억원)",
                    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc','#4e73df', '#1cc88a', '#36b9cc','#4e73df', '#1cc88a', '#36b9cc'],
                    hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf','#2e59d9', '#17a673', '#2c9faf','#2e59d9', '#17a673', '#2c9faf'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                    callbacks: {
                        label: function(tooltipItem, chart) {
                            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                            return  datasetLabel + number_format1(result) + '₩';
                        }
                    }
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 80,
            },
        });
    })
function number_format1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let preResult = arr[i]
        return preResult
    }
}

function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    return n;
}


