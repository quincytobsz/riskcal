import React, { useState } from "react";
import Bar from "../../components/bar/bar";
import CalculateButton from "../../components/calculate_button/calculate_button";

function BMI() {

    let [weight, setWeight] = useState(0);
    let [height, setHeight] = useState(0);

    function sendResult() {
        let bmi = weight / (height * height);
        window.opener.postMessage({ bmi: bmi}, 'http://localhost:3000');
        window.close();
    }

    return (
        <div>
            <Bar heading='Calculate Your BMI' />
            <form className="page">
                <div>
                    <input
                        defaultValue='Height'
                        className="default-look"
                        value={height}
                        onChange={(event) => {
                            setHeight(event.target.value);
                        }}></input>
                    <p className="subtext">In Metres</p>
                </div>
                <div>
                    <input
                        defaultValue='Weight'
                        className="default-look"
                        value={weight}
                        onChange={(event) => {
                            setWeight(event.target.value);
                        }}></input>
                    <p className="subtext">In Kilograms</p>
                </div>
                <CalculateButton onClick={() => {
                    sendResult();
                }} />
            </form>
        </div>
    );
}

export default BMI;