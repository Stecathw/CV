import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { RiDashboardLine } from "react-icons/ri";


const LibrairiesIcons = (props) => {

    const {lib} = props

    if (lib.toUpperCase() === "REACT") {
        return (
            <FaReact/>
        )
    }
    if (lib.toUpperCase() === "DJANGO") {
        return (
            <SiDjango/>
        )
    } 
    if (lib.toUpperCase() === "DASH") {
        return (
            <RiDashboardLine/>
        )
    } 
    return (
        <>{lib}</>
    )
    
}
export default LibrairiesIcons;