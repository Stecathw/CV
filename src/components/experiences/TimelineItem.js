import React from 'react';

const TimelineItem = (props) => {
    const {data} = props

    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="item-category-tag">{data.cat.tag}</span>
                <h4>{data.title}</h4>
                <h6>{data.place}</h6>               
            </div>
            <div className="circle"><span className="item-category-icon">{data.cat.icon}</span><span className="date">{data.year}</span></div>
        </div>
    );
};

export default TimelineItem;