import React, { useEffect, useState } from "react";
import Bar from "../../components/bar/bar";
import CountrySelect from "../../components/country_select/country_select";
import { genderOptions, yesNoOptions } from "../../constants";
import Select from "../../components/select/select";
import CalculateButton from "../../components/calculate_button/calculate_button";
import './nonlab.css';
import { calculate_nonlab_based } from "../../calculations";
import ResultCard from "../../components/result_card/result_card";

function Nonlab() {

    let [bmi, setBMI] = useState();
    let [age, setAge] = useState();
    let [systolicBP, setSystolicBP] = useState();
    let [showResult, setShowResult] = useState(false);
    let [prediction, setPrediction] = useState(0)

    function calculate() {

        const smoking = document.getElementById('smoking').value;
        const gender = document.getElementById('gender').value;
        const region = document.getElementById('region').value;

        const result = calculate_nonlab_based(region, age, systolicBP, smoking, bmi, gender);

        result.then(res => {
            setPrediction(res)
        })

    }

    function calculateBMI() {
        window.open('/bmi', 'popUpWindow', 'height=400,width=700,left=50,top=50,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=yes')
    }

    window.addEventListener('message', (event) => {
        if (event.data.bmi != undefined){
            document.getElementById('bmi').value = event.data.bmi
        }
    });

    return (
        <div id="nonlab-page">
            <Bar heading='Nonlab Based CVD Risk' />
            { showResult && <ResultCard prediction ={prediction} /> }

            <form className="page">
                <CountrySelect />
                <div><input placeholder='Age (40 - 70 years only)' className="default-look" value={age && null}
                    onChange={(event) => { setAge(event.target.value) }}
                ></input></div>
                <Select id='gender' options={genderOptions} defaultText='Gender' />
                <Select id='smoking' options={yesNoOptions} defaultText='Smoking' />
                <div><input placeholder='Systolic BP' className="default-look"
                    onChange={(event) => { setSystolicBP(event.target.value) }}
                    value={systolicBP && null}></input></div>
                <div id="bmi-container">
                    <input
                        placeholder='BMI'
                        className="default-look"
                        id="bmi"
                        value={ bmi && null}
                        onChange={(event) => {
                            setBMI(event.target.value);
                        }}></input>
                    <button id="bmi-link" onClick={(event)=>{
                        event.preventDefault();
                        calculateBMI();
                    }}>
                        calculate BMI
                    </button>
                </div>
                <CalculateButton 
                    onClick = {()=>{
                        calculate();
                        setShowResult(true);
                    }}
                />
            </form>
        </div>
    )

};

export default Nonlab;