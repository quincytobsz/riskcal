import React, {useState} from "react";
import './select.css';

function Select(props){

    let [value, setValue] = useState()
    return (
        <div>
            <select defaultValue='0' className="default-look" id={props.id} value={value && null} onChange={(event)=>{setValue(event.target.value)}}>
                    <option value="0" disabled hidden>{props.defaultText}</option>
                    {props.options.map(option=>{
                        return (<option key={option.text} value={option.value ? option.value : 'none'}>{option.text}</option>);
                    })}
            </select>
        </div>
    )
}

export default Select;