import React from "react";
import './calculate_button.css';

function CalculateButton(props) {

    return <div>
        <button
            id='calculate-button'
            onClick={(event) => {
                event.preventDefault();
                props.onClick();
            }}>Calculate</button>
    </div>
}

export default CalculateButton;