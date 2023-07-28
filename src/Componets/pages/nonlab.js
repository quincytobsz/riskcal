
import React from "react";
import './info.css'

class nonlabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ countryofresidence: "", age: "",gender:"",smoking:"",systolicBP:"",BMI:"" }]
     };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state.formValues));
  }

  render() {

    return (
        <form  onSubmit={this.handleSubmit}>
          {this.state.formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Country of residence</label>
              <input type="text" name="country of residence" value={element.countryofresidence || ""} onChange={e => this.handleChange(index, e)} />
              <label>Age</label>
              <input type="number" name="age" value={element.age || ""} onChange={e => this.handleChange(index, e)} />
              <label>Gender</label>
              <input type="text" name="gender" value={element.gender || ""} onChange={e => this.handleChange(index, e)} />
              <label>Smoking</label>
              <input type="text" name="smoking" value={element.smoking || ""} onChange={e => this.handleChange(index, e)} />
              <label>Systolic BP</label>
              <input type="text" name="systolic BP" value={element.systolicBP || ""} onChange={e => this.handleChange(index, e)} />
              <label>BMI</label>
              <input type="text" name="BMI" value={element.BMI || "Calculate BMI"} onChange={e => this.handleChange(index, e)} />
             
            </div>
          ))}
          <div className="button-section">
              
              <button className="button submit" type="submit">Calculate</button>
          </div>
      </form>
    );
  }
}
export default nonlabs;