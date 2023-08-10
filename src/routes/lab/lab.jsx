import React, { useState, useEffect } from "react";
import Bar from '../../components/bar/bar';
import './lab.css';
import Select from '../../components/select/select';
import CountrySelect from '../../components/country_select/country_select';
import CalculateButton from '../../components/calculate_button/calculate_button';
import { genderOptions, yesNoOptions } from '../../constants';
import { calculate_lab_based } from '../../calculations';
import ResultCard from '../../components/result_card/result_card';


function Lab() {

    let [age, setAge] = useState();
    let [cholestrol,setCholestrol] =  useState();
    let [systolicBP,setSystolicBP] = useState();
    let [showResult, setShowResult] = useState(false);
    let [prediction, setPrediction] = useState(0)

    function Calculate() {

        const smoking = document.getElementById('smoking').value;
        const gender = document.getElementById('gender').value;
        const region = document.getElementById('region').value;
        const diabetes = document.getElementById('diabetes').value;

        const result = calculate_lab_based(region,age ,cholestrol, systolicBP, diabetes, smoking, gender);

        result.then(res=>{
            setPrediction(res)
        })

    }



    return (
        <div id="lab-page">
            <Bar heading="Lab Based CVD Risk" />
           { showResult && <ResultCard prediction ={prediction} /> }
            <form className="page">
                <CountrySelect/>
                <div><input placeholder='Age (40 - 70 years only)' className="default-look" value={age && null}
                    onChange={(event) => { setAge(event.target.value) }}
                ></input></div>
                <Select id="gender" options={genderOptions} defaultText='Gender' />
                <Select id="smoking" options={yesNoOptions} defaultText='Smoking' />
                <Select id="diabetes" options={yesNoOptions} defaultText='Diabetes' />
                <div><input placeholder='Systolic BP' className="default-look" 
                onChange={(event)=>{setSystolicBP(event.target.value)}}
                value={systolicBP && null}></input></div>
                <div><input placeholder='Total cholestrol (in mmol)' className="default-look" value={cholestrol && null}
                    onChange={(event) => { setCholestrol(event.target.value) }}
                ></input></div>
                <CalculateButton
                    onClick={()=>{
                        Calculate();
                        setShowResult(true);
                    }}
                />
            </form>
        </div>
    )

};

export default Lab;