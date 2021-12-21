// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Direct", "Referral", "Social"],
    datasets: [{
      data: [50, 50, 0],
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
<script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossOrigin="anonymous"></script>


  let apiArr = []

  document.querySelector('#btn').addEventListener('click', () => {
  $.getJSON('https://api.odcloud.kr/api/15071595/v1/uddi:262b7fb0-1f5e-40cd-8f14-b0614b4dc997?page=1&perPage=10&serviceKey=Fs0FMSahbQEYkW4qd0bKDnX6ualVgtwD6luFAYuMaOG8c4P%2B%2Bhsjn%2BMh2qNQZoG9AFPrTvZFq%2FJ013lo8dUBWA%3D%3D', function (source){
    apiArr = source.data
    // console.log(apiArr)
    const ulEle = document.querySelector('#showApi')
    let str = ''
    console.log(apiArr)
    // let sortKeys = Object.keys(apiArr).filter(function (sort){return sort.indexOf('구분') >-1 })
    // console.log(sortKeys[0])
    const value = Object.keys(apiArr)

    for (let i = 0; i < apiArr.length; i++) {
      str += `<ul>출력확인 : ${apiArr[i].구분}</ul>
                        <div>수익률 : ${apiArr[i]["2017년 수익률"]}</div>`
    }//end for
    ulEle.innerHTML = str
  })
})
