// Set new default font family and font color to mimic Bootstrap's default styling
const profit = []
const sort = []

fetch('https://api.odcloud.kr/api/15071595/v1/uddi:262b7fb0-1f5e-40cd-8f14-b0614b4dc997?page=1&perPage=10&serviceKey=Fs0FMSahbQEYkW4qd0bKDnX6ualVgtwD6luFAYuMaOG8c4P%2B%2Bhsjn%2BMh2qNQZoG9AFPrTvZFq%2FJ013lo8dUBWA%3D%3D')
    .then(response => response.json())
    .then(data => {
      const year = data.data // 출력확인
      console.log(year)
      year.map(m => profit.push(m["2017년 수익금(단위: 십억원)"]))
      year.map(m => sort.push(m["구분"]))
      sort.splice(0,1)
      profit.splice(0,1)
    })

console.log(profit)
console.log(sort)
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: sort,
    datasets: [{
      label: "수익금 단위(십억원)",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: profit,
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 25,
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'price'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 20,
      }],
      yAxes: [{
        ticks: {
          min: -50,
          max: 1500,
          maxTicksLimit: 50,
          padding: 5,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '₩' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
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
          return datasetLabel + ': ₩' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});
