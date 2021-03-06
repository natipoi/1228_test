window.onload = function(){
  var ctx1 = document.getElementById('analytics1').getContext('2d');
  var lineChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['2020/1', '2020/2','2020/3', '2020/4','2020/5', '2020/6','2020/7','2020/8', '2020/9', '2020/10','2020/11'],
      datasets: [{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#d2d2d2',
          borderWidth: 2,
          pointBackgroundColor: '#f8bb45',
          pointBorderColor: '#f8bb45',
          pointRadius: 3,
          lineTension: 0,
          yAxisID: 'y-axis-1',
          data: [510000, 410000, 560000, 390000, 480000, 410000, 560000, 390000, 480000, 560000, 640000],
        },
        {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#eeeeee',
          borderWidth: 2,
          pointBackgroundColor: '#e0d1b5',
          pointBorderColor: '#e0d1b5',
          pointRadius: 3,
          lineTension: 0,
          yAxisID: 'y-axis-1',
          data: [480000, 380000, 500000, 360000, 420000, 360000, 550000, 310000, 470000, 530000, 600000],
        },
        {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#d2d2d2',
          borderWidth: 2,
          pointBackgroundColor: '#a7e3a2',
          pointBorderColor: '#a7e3a2',
          pointRadius: 3,
          lineTension: 0,
          yAxisID: 'y-axis-2',
          data: [6000, 6000, 11000, 14000, 13000, 6000, 11000, 14000, 13000, 11000, 9000],
        },
        {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#eeeeee',
          borderWidth: 2,
          pointBackgroundColor: '#d9e5d8',
          pointBorderColor: '#d9e5d8',
          pointRadius: 3,
          lineTension: 0,
          yAxisID: 'y-axis-2',
          data: [4000, 3000, 1000, 2000, 8000, 2000, 11000, 9000, 13000, 9000, 6000],
        },
      ]
    },
    options: {
      scales: {
        yAxes: [{
          id: "y-axis-1",
          type: "linear",
          position: "left",
          ticks: {
            min: 0,
            callback: function(label, index, labels) {
              return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
          },
        }, 
        {
          id: "y-axis-2",
          type: "linear",
          position: "right",
          ticks: {
            display: false,
            min: 0,
            max: 35000
          },
          gridLines: {
            borderDash: [2, 5]
          },
        }],
        xAxes: [{
          gridLines: {
            display: true,
            lineWidth: 3
          },
          ticks: {
            fontSize: 11
          }
        }],
      },
      legend: {
        display: false
      },
      animation: {
        easing: 'easeInSine',
      },
      hover: {
        animationDuration: 0,
      },
      responsiveAnimationDuration: 0,
      defaultFontSize: 12,
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255, 255, 255)",
        titleFontColor: "#000",
        bodyFontColor: "#000",
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 1,
        callbacks: {
          label: function(tooltipItem, data) {
            return  data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString() + '円'
          }
        }
      }
    }
  });
  var ctx2 = document.getElementById('graf1').getContext('2d');
  var donutsChart1 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      datasets: [{
          data: [700000, 300000],
          backgroundColor: ['#f8bb45', '#a7e3a2'],
          borderColor: ['#f8bb45', '#a7e3a2'],
        },
        {
          data: [100],
          backgroundColor: ['#ffffff'],
          borderColor: ['#ffffff'],
          hoverBackgroundColor: ['#ffffff']
        },
        {
          data: [600000, 400000],
          backgroundColor: ['#e0d1b5', '#d9e5d8'],
          borderColor: ['#e0d1b5', '#d9e5d8'],
        },
      ]
    },
    options: {
      rotation: 11,
      title: {
        display: false
      },
      legend: {
        display: false
      },
      hover: {
        animationDuration: 0
      },
      responsiveAnimationDuration: 0,
      defaultFontSize: 12,
      
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255, 255, 255)",
        titleFontColor: "#000",
        bodyFontColor: "#000",
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 1,
        callbacks: {
          label: function(tooltipItem, data) {
            var num = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
            return num + '円'
          }
        }
      }
    }
  });
  var ctx3 = document.getElementById('analytics2').getContext('2d');
  var lineChart2 = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['2020/1', '2020/2','2020/3', '2020/4','2020/5', '2020/6','2020/7','2020/8', '2020/9', '2020/10','2020/11'],
      datasets: [{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#d2d2d2',
        borderWidth: 2,
        pointBackgroundColor: '#f8bb45',
        pointBorderColor: '#f8bb45',
        pointRadius: 3,
        lineTension: 0,
        yAxisID: 'y-axis-1',
        data: [300000, 390000, 350000, 390000, 310000, 310000, 350000, 390000, 290000, 350000, 320000],
      },
      {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#eeeeee',
        borderWidth: 2,
        pointBackgroundColor: '#e0d1b5',
        pointBorderColor: '#e0d1b5',
        pointRadius: 3,
        lineTension: 0,
        yAxisID: 'y-axis-1',
        data: [260000, 350000, 320000, 360000, 280000, 280000, 320000, 360000, 260000, 320000, 290000],
      },
      {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#d2d2d2',
        borderWidth: 2,
        pointBackgroundColor: '#a7e3a2',
        pointBorderColor: '#a7e3a2',
        pointRadius: 3,
        lineTension: 0,
        yAxisID: 'y-axis-2',
        data: [100000, 120000, 110000, 90000, 110000, 120000, 130000, 80000, 60000, 120000, 90000],
      },
      {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#eeeeee',
        borderWidth: 2,
        pointBackgroundColor: '#d9e5d8',
        pointBorderColor: '#d9e5d8',
        pointRadius: 3,
        lineTension: 0,
        yAxisID: 'y-axis-2',
        data: [80000, 100000, 90000, 70000, 90000, 100000, 110000, 60000, 40000, 100000, 70000],
      },
      {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#d2d2d2',
        borderWidth: 2,
        pointBackgroundColor: '#1B3491',
        pointBorderColor: '#1B3491',
        pointRadius: 3,
        lineTension: 0,
        yAxisID: 'y-axis-3',
        data: [500000, 450000, 490000, 410000, 500000, 410000, 390000, 410000, 450000, 480000, 400000],
      },
      {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#eeeeee',
        borderWidth: 2,
        pointBackgroundColor: '#C7DFEF',
        pointBorderColor: '#C7DFEF',
        pointRadius: 3,
        lineTension: 0,
        yAxisID: 'y-axis-3',
        data: [470000, 420000, 460000, 380000, 470000, 380000, 360000, 380000, 420000, 450000, 370000],
      },
    ]
    },
    options: {
      scales: {
        yAxes: [{
          id: "y-axis-1",
          type: "linear",
          position: "left",
          ticks: {
            min: 0,
            max: 500000,
            stepSize: 100000,
            callback: function(label, index, labels) {
              return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
          },
        }, 
        {
          id: "y-axis-2",
          type: "linear",
          position: "right",
          ticks: {
            display: false,
            min: 0,
            max: 500000,
            stepSize: 100000,
          },
          gridLines: {
            display: false,
            drawOnChartArea: false,
          },
        },
        {
          id: "y-axis-3",
          type: "linear",
          position: "right",
          ticks: {
            min: 0,
            max: 500000,
            stepSize: 100000,
            display: false
          },
          gridLines: {
            display: false,
            drawOnChartArea: false,
          },
        }
      ],
        xAxes: [{
          gridLines: {
            display: true,
            lineWidth: 3
          },
          ticks: {
            fontSize: 11
          }
        }],
      },
      legend: {
        display: false
      },
      animation: {
        easing: 'easeInSine',
      },
      hover: {
        animationDuration: 0,
      },
      responsiveAnimationDuration: 0,
      defaultFontSize: 12,
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255, 255, 255)",
        titleFontColor: "#000",
        bodyFontColor: "#000",
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 1,
        callbacks: {
          label: function(tooltipItem, data) {
            return  data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString()
          }
        }
      }
    }
  });
  var ctx4 = document.getElementById('graf2').getContext('2d');
  var donutsChart2 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
      datasets: [{
          data: [20000, 5000],
          backgroundColor: ['#f8bb45', '#a7e3a2'],
          borderColor: ['#f8bb45', '#a7e3a2'],
        },
        {
          data: [100],
          backgroundColor: ['#ffffff'],
          borderColor: ['#ffffff'],
          hoverBackgroundColor: ['#ffffff']
        },
        {
          data: [30000, 3000],
          backgroundColor: ['#e0d1b5', '#d9e5d8'],
          borderColor: ['#e0d1b5', '#d9e5d8'],
        },
      ]
    },
    options: {
      rotation: 11,
      title: {
        display: false
      },
      legend: {
        display: false
      },
      hover: {
        animationDuration: 0,
      },
      responsiveAnimationDuration: 0,
      defaultFontSize: 12,
      
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255, 255, 255)",
        titleFontColor: "#000",
        bodyFontColor: "#000",
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 1,
        callbacks: {
          label: function(tooltipItem, data) {
            return  data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString()
          }
        }
      }
    }
  });

  function setData(){
    const oldPopup = document.getElementsByClassName("analytics1-popup");
    if(oldPopup.length !== 0){
      oldPopup[0].remove();
    }
    const lineChart1_dataNum = lineChart1.config.data.labels.length
    showCustomPopup(lineChart1_dataNum, lineChart1, "analytics1");

    const lineChart2_dataNum = lineChart2.config.data.labels.length
    showCustomPopup(lineChart2_dataNum, lineChart2, "analytics2");
  }
  setData();
  
  window.addEventListener( 'resize', function() {
    setTimeout(function(){ setData() }, 1000);
  }, true);
  
  function showCustomPopup(dataNum, chart, analytics){
    var xPosiList = []
    for(var i=0; i < 1; i++) {
      var meta = chart.getDatasetMeta(i)
      var data = meta.data
      var x = 0;
      for(var k=0; k<data.length; k++){
        xPosiList.push(Math.round(data[k]["_model"].x))
      }
      var x = meta;
    }
    var customPopup = false;
    var tooltipEl = document.createElement('div');
    chart.options.onHover = function(evt, ele) {
      var showPopup = false
      const hoverX = evt.layerX;
      const hoverY = evt.layerY;
      const graphH = document.getElementsByClassName(analytics)[0].clientHeight;
      const graphW = document.getElementsByClassName(analytics)[0].clientWidth;
      
      // ポイントの上でない
      if (ele.length === 0 ){
        
        for(var i=0; i<xPosiList.length; i++){
          var evtX = xPosiList[i];
          if(hoverX < evtX + 5 && hoverX > evtX - 5) {
            showPopup = true
            break;
          }
        }

        if(!customPopup && showPopup){
            customPopup = true
            tooltipEl.classList = 'chartjs-tooltip';
            tooltipEl.innerHTML =  createPopupForAnalytics(analytics)
            
            var popupTop;
            if (graphH / 2 < hoverY) {
              popupTop = hoverY - 130
            } else {
              popupTop = hoverY + 5
            }
            tooltipEl.style.top = `${popupTop}px`
            tooltipEl.style.right = `calc(100% - ${evt.layerX - 10 }px)`
            tooltipEl.style.position = "absolute";
            document.getElementsByClassName(analytics)[0].appendChild(tooltipEl);
        }
      }
      if((customPopup && !showPopup)) {
        if( document.getElementsByClassName(analytics)[0].hasChildNodes()) {
          document.getElementsByClassName(analytics)[0].removeChild(tooltipEl)
          customPopup = false
          showPopup = false
        }
        
      }
    };
  }

  hideCenterDataset(donutsChart1);
  hideCenterDataset(donutsChart2);
  function hideCenterDataset(chart){
    chart.options.onHover = function(evt, ele) {
      if(ele.length !== 0){
        chart.options.tooltips.enabled = ele[0]._datasetIndex !== 1
      }
    }
  }
  function createPopupForAnalytics(analytics){
    var unit = "";
    if (analytics === "analytics1") {
      unit = "¥"
      return `<div class="analytics1-popup">
      <div class="popup-inner">
        <div class="popup-heading">
          <p class="popup-title">2020年11月17日（火）</p>
          <p class="popup-subtxt">比較：1ヶ月前2020年10月17日（土）</p>
        </div>
        <div class="popup-result-list">
          <div class="popup-result-item">
            <p class="popup-result-item-label">売上</p>
            <div class="popup-result-item-data">
              <p class="popup-result-item-price">${unit}100,000</p>
              <p class="popup-result-item-price-small">${unit}80,000</p>
              <p class="popup-result-item-price-compare">(<span class="blue">+${unit}40,0000</span>)</p>
            </div>
          </div>
          <div class="popup-result-item">
            <p class="popup-result-item-label">リピーター</p>
            <div class="popup-result-item-data">
              <p class="popup-result-item-price">${unit}70,000</p>
              <p class="popup-result-item-price-small">${unit}60,000</p>
              <p class="popup-result-item-price-compare">(<span class="blue">+${unit}10,0000</span>)</p>
            </div>
          </div>
          <div class="popup-result-item">
            <p class="popup-result-item-label">新規</p>
            <div class="popup-result-item-data">
              <p class="popup-result-item-price">${unit}30,000</p>
              <p class="popup-result-item-price-small">${unit}20,000</p>
              <p class="popup-result-item-price-compare">(<span class="red">-${unit}10,000</span>)</p>
            </div>
          </div>
        </div>
      </div>`;
    } else {
      return `<div class="analytics1-popup">
      <div class="popup-inner">
        <div class="popup-heading">
          <p class="popup-title">2020年11月17日（火）</p>
          <p class="popup-subtxt">比較：1ヶ月前2020年10月17日（土）</p>
        </div>
        <div class="popup-result-list">
          <div class="popup-result-item">
            <p class="popup-result-item-label">来訪者数</p>
            <div class="popup-result-item-data">
              <p class="popup-result-item-price">${unit}1,000,000</p>
              <p class="popup-result-item-price-small">${unit}800,000</p>
              <p class="popup-result-item-price-compare">(<span class="blue">+${unit}400,000</span>)</p>
            </div>
          </div>
          <div class="popup-result-item">
            <p class="popup-result-item-label">リピーター</p>
            <div class="popup-result-item-data">
              <p class="popup-result-item-price">${unit}25,000</p>
              <p class="popup-result-item-price-small">${unit}30,000</p>
              <p class="popup-result-item-price-compare">(<span class="red">-${unit}5,000</span>)</p>
            </div>
          </div>
          <div class="popup-result-item">
            <p class="popup-result-item-label">新規</p>
            <div class="popup-result-item-data">
              <p class="popup-result-item-price">${unit}5,000</p>
              <p class="popup-result-item-price-small">${unit}3,000</p>
              <p class="popup-result-item-price-compare">(<span class="blue">+${unit}2,000</span>)</p>
            </div>
          </div>
        </div>
      </div>`;
    }
  }

  var id = location.hash;
  if (id){
    $("html,body").animate({scrollTop: $(id).position().top - 10});
    id = id.replace("#", "")
    $(`a[data=${id}]`).parent().addClass("nav-active");
  }
  
  $(".slide-btn").on("click", function(){
    var id = $(this).attr("data");
    $("html,body").animate({scrollTop: $('#'+ id).position().top - 10});
    $(".nav-active").removeClass("nav-active");
    $(this).parent().addClass("nav-active");
  })
}

