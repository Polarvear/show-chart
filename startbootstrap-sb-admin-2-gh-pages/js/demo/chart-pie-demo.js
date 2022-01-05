// Set new default font family and font color to mimic Bootstrap's default styling
const pie = []
fetch('https://api.odcloud.kr/api/15071595/v1/uddi:262b7fb0-1f5e-40cd-8f14-b0614b4dc997?page=1&perPage=10&serviceKey=Fs0FMSahbQEYkW4qd0bKDnX6ualVgtwD6luFAYuMaOG8c4P%2B%2Bhsjn%2BMh2qNQZoG9AFPrTvZFq%2FJ013lo8dUBWA%3D%3D')
    .then(response => response.json())
    .then(result => {
        const year = result.data // 출력확인
        year.map(m => pie.push(m["2017년 수익금(단위: 십억원)"]))
    })
console.log(pie)
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: pie,
        datasets: [{
            data: [50, 101, 1023, 114,141,4,1424,41414,4141],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
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
        },
        legend: {
            display: false
        },
        cutoutPercentage: 80,
    },
});
