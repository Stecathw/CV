import React, { useState } from 'react';
import ExperiencesDatas from '../../data/ExperiencesDatas';
import TimelineItem from './TimelineItem';

const Timeline = () => {

    const [Datas] = useState(ExperiencesDatas)


    return (
        <div className="timeline-container">            
            {Datas.sort((a, b) => (a.year > b.year) ? 1 : -1).reverse().map((data) => (
                <TimelineItem data={data} key={data.id}/>
            ))}
        </div>
    );
};

export default Timeline;