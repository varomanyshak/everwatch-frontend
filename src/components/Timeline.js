import React, {useEffect, useState} from "react";
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import { AgChartsReact } from "ag-charts-react";
import "ag-charts-enterprise"
import filterData from "../sheet";
let counter=0, timeData = [];
for(const key in filterData) {    
  counter++;
  if (Array.isArray(filterData[key])) {
    filterData[key] = filterData[key].map(obj => {            
      // Adding a number (e.g., 10) to each object's property
      obj.number = counter;
      obj.timestamp = new Date(obj.timestamp)
      return obj;
    });
    timeData.push({
      data: filterData[key],
      xKey: "timestamp",
      yKey: "number",
      yName: key,
      marker: {
        shape: "pin",
        size: 10
      }
    })
  }
}
console.log(filterData, timeData);


const GeneralTimeline = (props) => {
    // let totalData1 = Object.values(props.data).flat()
    // let totalData = totalData1.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    const specifiedStringArray = ["a", "d"]
    const [options, setOptions] = useState({
        title: {
          text: "Timeline",
        },
        autoSize: true,
        series: timeData,
        zoom: {
          enabled: true,
          axes: 'xy'
        },
        axes: [
          {
            type: "time",
            position: "bottom",
          },
          {
            type: "number",
            position: "left"
          },
        ]
      });
    // console.log("Total Data", totalData)
    return <AgChartsReact options={options} />
}

export default GeneralTimeline;