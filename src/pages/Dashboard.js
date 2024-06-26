import React from 'react';
import Chart from "react-apexcharts";
import { Col, Row, } from '@themesberg/react-bootstrap';
import filterData from "../sheet";
import { useSelector } from 'react-redux';

let timeData = [];
for (const key in filterData) {
  let newFilter = {}
  if (Array.isArray(filterData[key])) {
    newFilter[key] = filterData[key].map(obj => {
      return {
        x: key,
        y: [new Date(obj.timestamp).getTime(), new Date(obj.timestamp).getTime() + eval(500)]
      };
    });

    timeData = timeData.concat(newFilter[key])
  }
}



const ApexChart = () => {
  const linedata = {
    series: [
      {
        data: timeData
      }
    ],
    options: {
      chart: {
        height: 500,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        type: 'datetime'
      }
    },
  }

  return (
    <div>
      <div id="chart">
        <Chart options={linedata.options} series={linedata.series} type="rangeBar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}


export function barChart() {
  const barstate = {
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }

      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    }
  };
  return (
    <div id="chart">
      <Chart options={barstate.options} series={barstate.series} type="bar" height={350} />
    </div>
  );
}

const Dashboard = (props) => {
  const Tabledata = JSON.parse(useSelector((state) => state.counter.value)).Find;
  const groupByHost = (data) => {
    const groupedData = {};
    data.forEach(item => {
      const host = item['_BaseEvent__host'];
      if (!groupedData[host]) {
        groupedData[host] = 1
      } else {
        groupedData[host]++
      }
    });

    return groupedData;
  }
  const PieAry = (data) => {
    let chartValue = [];
    let chartCategory = []
    for (const key in data) {
      chartValue.push(data[key]);
      chartCategory.push(key)
    }
    return {
      chartValue, chartCategory
    }
  }
  const PieData = PieAry(groupByHost(Tabledata));

  const barstate = {
    series: [{
      data: PieData.chartValue
    }],
    options: {
      chart: {
        type: 'bar',
        height: 550
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },

      title: {
        text: 'Finding'
      },
      xaxis: {
        categories: PieData.chartCategory
      }
    },
  };

  const PieTabledata = JSON.parse(useSelector((state) => state.counter.value)).OpenTcp
  function printHostOccurrences(array, type) {
    const hostOccurrences = array.reduce((acc, item) => {
      acc[item[type]] = (acc[item[type]] || 0) + 1;
      return acc;
    }, {})

    let HostValueAry = [];
    let HostCateAry = [];
    let HostAry = [];

    for (const host in hostOccurrences) {
      // console.log(`Host: ${host}, Occurrences: ${hostOccurrences[host]}`);
      if (host !== "None") {
        HostValueAry.push(hostOccurrences[host])
        HostCateAry.push(host)
        HostAry.push({
          x: host,
          y: [0, hostOccurrences[host]]
        })
        // quarter: "Q2'19",
        // iphone: 108,
      }
    }
    return { HostValueAry, HostCateAry, HostAry }
  }
  const hostData = printHostOccurrences(PieTabledata, "_BaseEvent__host")
  console.log(hostData);

  const Cirstate = {
    series: hostData.HostValueAry,
    options: {
      title: {
        text: 'Open_TCP_Port'
      },
      chart: {
        type: 'donut',
      },
      labels: hostData.HostCateAry,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },


  };

  const techState = {
    series: [{
      name: 'Inflation',
      data: hostData.HostValueAry,
    }],
    options: {
      chart: {
        height: 400,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: hostData.HostCateAry,
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }

      },
      title: {
        text: 'Host',
        floating: true,
        offsetY: 350,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  }


  const Cirline = {
    series: [
      {
        data: hostData.HostAry
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'rangeBar',
        zoom: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          isDumbbell: true,
          columnWidth: 3,
          dumbbellColors: [['#008FFB', '#00E396']]
        }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: ['Product A', 'Product B']
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          gradientToColors: ['#00E396'],
          inverseColors: true,
          stops: [0, 100]
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      xaxis: {
        tickPlacement: 'on'
      }
    },
  }






  return (
    <>
      <Row>
        {/* <ApexChart /> */}
      </Row>
      <Row style={{ height: '600px' }}>
        <Col ms={6}>
          <Chart options={barstate.options} series={barstate.series} type="bar" height={800} />
        </Col>
        <Col ms={6}>
          <Row>
            <Chart options={Cirstate.options} series={Cirstate.series} type="donut" height={380} />
          </Row>
          <Row>
            {/* <Chart options={techState.options} series={techState.series} type="bar" height={380} /> */}
            <Chart options={Cirline.options} series={Cirline.series} type="rangeBar" height={380} />
          </Row>
        </Col>
      </Row>

    </>
  )
};

export default Dashboard;