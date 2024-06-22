import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const GeneralTimeline = (props) => {
    let totalData1 = Object.values(props.data).flat()
    let totalData = totalData1.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    return (
        <div className="timeline-wrapper-d">
            <style>
                {`
                    span.vertical-timeline-element-icon.bounce-in {
                        width: 10px;
                        height: 10px;
                        left: calc(50% + 25px);
                        top: 25px
                    }
                    .timeline-wrapper-d {
                        height: 90vh;
                        overflow-y: scroll;
                        overflow-x: hidden;
                        margin: 4vh 20px;
                        padding: 10px;
                        border: 1px solid lightgray;
                        border-radius: 5px;
                    }
                    .vertical-timeline-element {
                        margin: 1em 0;
                    }
                    .vertical-timeline--animate .vertical-timeline-element-content.bounce-in {
                        padding: 5px;
                    }
                    ::-webkit-scrollbar {
                        width: 12px; 
                    }
                    ::-webkit-scrollbar-track {
                        background: #f1f1f1; 
                    }
                    ::-webkit-scrollbar-thumb {
                        background:  #888; 
                    }
                `}
            </style>
            <VerticalTimeline>
                {
                    totalData.map((item, index) => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#fff', color: '#555' }}
                                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                                date={item.timestamp}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                key={index}
                            >
                                <p>
                                    {`new ${item._type}`}
                                </p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default GeneralTimeline;