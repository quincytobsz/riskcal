import React from "react";
import './result_card.css'

function ResultCard(props){

    return (
        <div id="card">
            <p> Your final 10-year CVD risk prediction is {props.prediction}</p>
        </div>
    )

}

export default ResultCard;