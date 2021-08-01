import React, { useState } from 'react';

const StatusBar = (props) => {
    const {item} = props
    const [maxXP] = useState(12)
    const [percXP] = useState(item.xp / maxXP * 100 + '%')

    return (
        <div className="languageStatus">            
            <h4><span>{item.icon}</span>{item.name}</h4> 
            <div className="progression" style={{width: percXP}}></div>
        </div>
    );
};

export default StatusBar;