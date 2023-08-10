import React, { useState, useEffect } from "react";
import Select from "../select/select";

function CountrySelect() {

    let [options, setOptions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://ncd-pen.duredemos.com/json/countries?_format=json");
                const countries = await res.json();
                setOptions(countries);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const countryOptions = options.map((option) => {
        return { text: option.country, value: option.region }
    })

    return (
        <Select id='region' options={countryOptions} defaultText="Country of residence" />
    )
}

export default CountrySelect;
