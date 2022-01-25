// Set new default font family and font color to mimic Bootstrap's default styling
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
const preEndPrice = []
const endPrice = []
let month = []
const calendar = []
fetch("API/Kospi/2017Kospi.json")
    .then(response => response.json())
    .then(data => {
      //console.log(data) // 이거 배열이 이상하게 생김
      data.map(m => preEndPrice.push(m["종가"]))
      //console.log(preEndPrice)
      //console.log(preEndPrice.length)
      //preEndPrice.splice(preEndPrice.length, preEndPrice.length, ",") // 이렇게 하면 y 축 틀이 1000,2000, 3000으로 뜸
      let array = {}
      for (let i = 0; i < preEndPrice.length; i++) {
        array = {}
        array = Number(preEndPrice[i].replace(",", ""))
        endPrice.push(array)
      }
      calendar.push(...endPrice)
      calendar.splice(0, 1, "1월")
      calendar.splice(21,1,"2월")
      calendar.splice(42,1,"3월")
      calendar.splice(63,1,"4월")
      calendar.splice(63,1,"4월")
      calendar.splice(84,1,"5월")
      calendar.splice(105,1,"6월")
      calendar.splice(126,1,"7월")
      calendar.splice(147,1,"8월")
      calendar.splice(168,1,"9월")
      calendar.splice(189,1,"10월")
      calendar.splice(210,1,"11월")
      calendar.splice(231,1,"12월")

      console.log(calendar.indexOf(2071.87))
      console.log("cal info", calendar)



      endPrice.reverse() // 참조를 바꿔버림 굿굿
      console.log(endPrice)
      var ctx = document.getElementById("myAreaChart");
      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: calendar,
          datasets: [{
            label: "코스피 종가",
            lineTension: 0.3,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: endPrice,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 12
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return '' + number_format(value);
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
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
              }
            }
          }
        }
      });
    })
// Area Chart Example

