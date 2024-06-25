import React from 'react';
import Chart from "react-apexcharts";
import filterData from "../sheet";

let timeData = [];
for(const key in filterData) {    
  let newFilter = {}
  if (Array.isArray(filterData[key])) {
    newFilter[key] = filterData[key].map(obj => {            
      return {
        x: key,
        y : [new Date(obj.timestamp).getTime(), new Date(obj.timestamp).getTime() + eval(500)]
      };
    });
    
    timeData = timeData.concat(newFilter[key])
  }
}



const ApexChart = () => {
    const linedata = {
      series: [
        {
          data:timeData
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
      return (
        <>
          <ApexChart />
        </>
      )
};

export default Dashboard;