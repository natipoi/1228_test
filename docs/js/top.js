window.onload = function(){
var ctx1 = document.getElementById('analytics1').getContext('2d');
var chart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['11/1', '11/2','11/3', '11/4','11/5', '11/6','11/7','11/8', '11/9', '11/10','11/11','11/12', '11/13','11/14', '11/15', '11/6','11/17', '11/18','11/19', '11/20','11/21', '11/22','11/23', '11/24','11/25','11/26', '11/27','11/28', '11/29','11/30', '11/31'],
    datasets: [{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#d2d2d2',
        borderWidth: 2,
        pointBackgroundColor: '#f8bb45',
        pointBorderColor: '#f8bb45',
        pointRadius: 3,
        lineTension: 0,
        yAxisID: 'y-axis-1',
        data: [510000, 410000, 560000, 390000, 480000, 410000, 560000, 390000, 480000, 560000, 640000, 590000, 480000, 540000, 690000, 460000, 510000, 410000, 560000, 390000, 480000, 410000, 560000, 390000, 480000, 560000, 640000, 590000, 480000, 540000, 690000, 460000],
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
        data: [480000, 380000, 500000, 360000, 420000, 360000, 550000, 310000, 470000, 530000, 600000, 550000, 460000, 530000, 660000, 430000, 480000, 380000, 500000, 360000, 420000, 360000, 550000, 310000, 470000, 530000, 600000, 550000, 460000, 530000, 660000, 430000],
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
        data: [6000, 6000, 11000, 14000, 13000, 6000, 11000, 14000, 13000, 11000, 9000, 14000, 13000, 9000, 14000, 11000, 6000, 6000, 11000, 14000, 13000, 6000, 11000, 14000, 13000, 11000, 9000, 14000, 13000, 9000, 14000, 11000],
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
        data: [4000, 3000, 1000, 2000, 8000, 2000, 11000, 9000, 13000, 9000, 6000, 11000, 12000, 9000, 12000, 9000, 4000, 3000, 1000, 2000, 8000, 2000, 11000, 9000, 13000, 9000, 6000, 11000, 12000, 9000, 12000, 9000],
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
        },
      }, {
        id: "y-axis-2",
        type: "linear",
        position: "right",
        ticks: {
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
var chart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    datasets: [{
        data: [70, 30],
        backgroundColor: ['#feea96', '#a7e3a2'],
        borderColor: ['#feea96', '#a7e3a2'],
      },
      {
        data: [100],
        backgroundColor: ['#ffffff'],
        borderColor: ['#ffffff'],
        hoverBackgroundColor: ['#ffffff']
      },
      {
        data: [65, 35],
        backgroundColor: ['#e0d1b5', '#d9e5d8'],
        borderColor: ['#e0d1b5', '#d9e5d8'],
      },
    ]
  },
  options: {
    rotation: 1.5,
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
          return num + '％'
        }
      }
    }
  }
});
var ctx3 = document.getElementById('analytics2').getContext('2d');
var chart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['11/1', '11/2','11/3', '11/4','11/5', '11/6','11/7','11/8', '11/9', '11/10','11/11','11/12', '11/13','11/14', '11/15', '11/16','11/17', '11/18','11/19', '11/20','11/21', '11/22','11/23', '11/24','11/25','11/26', '11/27','11/28', '11/29','11/30', '11/31'],
    datasets: [{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#d2d2d2',
        borderWidth: 2,
        pointBackgroundColor: '#f8bb45',
        pointBorderColor: '#f8bb45',
        pointRadius: 3,
        lineTension: 0,
        yAxisID: 'y-axis-1',
        data: [510000, 410000, 560000, 390000, 480000, 410000, 560000, 390000, 480000, 560000, 640000, 590000, 480000, 540000, 690000, 460000, 510000, 410000, 560000, 390000, 480000, 410000, 560000, 390000, 480000, 560000, 640000, 590000, 480000, 540000, 690000, 460000],
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
        data: [480000, 380000, 500000, 360000, 420000, 360000, 550000, 310000, 470000, 530000, 600000, 550000, 460000, 530000, 660000, 430000, 480000, 380000, 500000, 360000, 420000, 360000, 550000, 310000, 470000, 530000, 600000, 550000, 460000, 530000, 660000, 430000],
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
        data: [6000, 6000, 11000, 14000, 13000, 6000, 11000, 14000, 13000, 11000, 9000, 14000, 13000, 9000, 14000, 11000, 6000, 6000, 11000, 14000, 13000, 6000, 11000, 14000, 13000, 11000, 9000, 14000, 13000, 9000, 14000, 11000],
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
        data: [4000, 3000, 1000, 2000, 8000, 2000, 11000, 9000, 13000, 9000, 6000, 11000, 12000, 9000, 12000, 9000, 4000, 3000, 1000, 2000, 8000, 2000, 11000, 9000, 13000, 9000, 6000, 11000, 12000, 9000, 12000, 9000],
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
        },
      }, {
        id: "y-axis-2",
        type: "linear",
        position: "right",
        ticks: {
          min: 0,
          max: 35000,
        },
        gridLines: {
          drawOnChartArea: false,
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
var ctx4 = document.getElementById('graf2').getContext('2d');
var chart4 = new Chart(ctx4, {
  type: 'doughnut',
  data: {
    datasets: [{
        data: [70, 30],
        backgroundColor: ['#feea96', '#a7e3a2'],
        borderColor: ['#feea96', '#a7e3a2'],
      },
      {
        data: [100],
        backgroundColor: ['#ffffff'],
        borderColor: ['#ffffff'],
      },
      {
        data: [65, 35],
        backgroundColor: ['#e0d1b5', '#d9e5d8'],
        borderColor: ['#e0d1b5', '#d9e5d8'],
      },
    ]
  },
  options: {
    rotation: 1.5,
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
          return  data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString() + '％'
        }
      }
    }
  }
});

const chart1_dataNum = chart1.config.data.labels.length
showCustomPopup(chart1_dataNum, chart1, "analytics1");

const chart3_dataNum = chart3.config.data.labels.length
showCustomPopup(chart3_dataNum, chart3, "analytics2");

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
    // ポイントの上でない
    if (ele.length === 0 ){
      for(var i=0; i<xPosiList.length; i++){
        var evtX = xPosiList[i];
        var hoverX = evt.layerX;
        if(hoverX < evtX + 5 && hoverX > evtX - 5) {
          showPopup = true
          break;
        }
      }
      if(!customPopup && showPopup){
          customPopup = true
          tooltipEl.classList = 'chartjs-tooltip';
          tooltipEl.innerHTML =   `<div class="analytics1-popup">
                                    <div class="popup-inner">
                                      <div class="popup-heading">
                                        <p class="popup-title">2020年11月17日（火）</p>
                                        <p class="popup-subtxt">比較：1ヶ月前2020年10月17日（土）</p>
                                      </div>
                                      <div class="popup-result-list">
                                        <div class="popup-result-item">
                                          <p class="popup-result-item-label">売上</p>
                                          <div class="popup-result-item-data">
                                            <p class="popup-result-item-price">¥100,000</p>
                                            <p class="popup-result-item-price-small">¥80,000</p>
                                            <p class="popup-result-item-price-compare">(<span class="blue">+¥40,0000</span>)</p>
                                          </div>
                                        </div>
                                        <div class="popup-result-item">
                                          <p class="popup-result-item-label">リピーター</p>
                                          <div class="popup-result-item-data">
                                            <p class="popup-result-item-price">¥70,000</p>
                                            <p class="popup-result-item-price-small">¥60,000</p>
                                            <p class="popup-result-item-price-compare">(<span class="blue">+¥10,0000</span>)</p>
                                          </div>
                                        </div>
                                        <div class="popup-result-item">
                                          <p class="popup-result-item-label">新規</p>
                                          <div class="popup-result-item-data">
                                            <p class="popup-result-item-price">¥30,000</p>
                                            <p class="popup-result-item-price-small">¥20,000</p>
                                            <p class="popup-result-item-price-compare">(<span class="red">-¥10,000</span>)</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>`;
          tooltipEl.style.top = `${evt.layerY+ 5}px`
          tooltipEl.style.right = `calc(100% - ${evt.layerX + 10}px)`
          tooltipEl.style.position = "absolute";
          document.getElementsByClassName(analytics)[0].appendChild(tooltipEl);
      }
    }
    if(customPopup && !showPopup) {
      document.getElementsByClassName(analytics)[0].removeChild(tooltipEl)
      customPopup = false
      showPopup = false
    }
  };
}


hideCenterDataset(chart2);
hideCenterDataset(chart4);
function hideCenterDataset(chart){
  chart.options.onHover = function(evt, ele) {
    if(ele.length !== 0){
      chart.options.tooltips.enabled = ele[0]._datasetIndex !== 1
    }
  }
}
}