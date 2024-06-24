import React from 'react';
import Chart from "react-apexcharts";


const ApexChart = () => {
    const linedata = {
      series: [
        {
          data: [
            {
              x: 'Code',
              y: [
                new Date('2024-03-02 00:00:00').getTime(),
                new Date('2024-03-02 00:00:00').getTime()+ eval(1000000),
  
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2024-03-04').getTime(),
                new Date('2024-03-08').getTime()
              ]
            },
            {
              x: 'Validation',
              y: [
                new Date('2024-03-08').getTime(),
                new Date('2024-03-12').getTime()
              ]
            },
            {
              x: 'Deployment',
              y: [
                new Date('2024-03-12').getTime(),
                new Date('2024-03-18').getTime()
              ]
            }
          ]
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
  
const Dashboard = (props) => {
    const state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      };
           
      return (
        <>
          <h1>Timeline</h1>
          <ApexChart />
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="500"
          />
        </>
      )


    return (
        <>
            <h1>Dashboard</h1>
            
        </>
    )
};

export default Dashboard;