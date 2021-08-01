import React from 'react';
import { FaPython, FaHtml5} from "react-icons/fa";
import { SiJavascript, SiCss3} from "react-icons/si";

const LanguagesIcons = (props) => {

    const {lang} = props

    if (lang.toUpperCase() === "PYTHON") {
        return (
            <FaPython/>
        )
    }
    if (lang.toUpperCase() === "JAVASCRIPT") {
        return (
            <SiJavascript/>
        )
    }
    if (lang.toUpperCase() === "HTML") {
        return (
            <FaHtml5/>
        )
    }
    if (lang.toUpperCase() === "CSS") {
        return (
            <SiCss3/>
        )
    }  
    return (
        <>{lang}</>
    )  
}
export default LanguagesIcons;