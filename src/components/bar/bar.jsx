import React from "react";
import './bar.css';

function Bar(props) {
    return (<header id="app-header">
        <h1 id="app-header-heading"> {props.heading} </h1>
    </header>)
}

export default Bar;