
async function getCalcData(region, url, gender) {
    const res = await fetch(url);
    const data = await res.json();

    let selecedRegionData = {};

    data.forEach(element => {
        if (element.region === region) {
            if (element.gender === gender) {
                selecedRegionData = element
            }
        }
    });

    return selecedRegionData;
}

function calculate_lab_based(region, age, cholestrol, systolicBP, diabetes, smoking, gender) {

    let url = "https://ncd-pen.duredemos.com/json/lab-based?_format=json";

    let data = getCalcData(region, url, gender);
    let final_10_cvd_risk_predict;

    final_10_cvd_risk_predict = data.then(element => {

        let centeredAge = age - 60;
        let centeredCholestrol = cholestrol - 6;
        let centeredSystolicBP = systolicBP - 120;
        let centeredDiabetes = diabetes ? 1 : 0;
        let centeredSmoking = smoking ? 1 : 0;



        let linearPredictorCHD = (
            (centeredAge * element['age_chd']) +
            (centeredCholestrol * element['chol_chd_1'] - element['chol_chd_2'] * centeredAge * centeredCholestrol) +
            (centeredSystolicBP * element['sys_chd_1'] - element['sys_chd_2'] * centeredAge * centeredSystolicBP) +
            (centeredDiabetes * element['diab_chd_1'] - element['diab_chd_2'] * centeredAge * centeredDiabetes) +
            (centeredSmoking * element['smok_chd_1'] - element['smok_chd_2'] * centeredAge * centeredSmoking)

        );

        let linearPredictorStroke = (
            (centeredAge * element['age_stroke']) +
            (centeredCholestrol * element['chol_stroke_1'] - element['chol_stroke_2'] * centeredAge * centeredCholestrol) +
            (centeredSystolicBP * element['sys_stroke_1'] - element['sys_stroke_2'] * centeredAge * centeredSystolicBP) +
            (centeredDiabetes * element['diab_stroke_1'] - element['diab_stroke_2'] * centeredAge * centeredDiabetes) +
            (centeredSmoking * element['smok_stroke_1'] - element['smok_stroke_2'] * centeredAge * centeredSmoking)

        );

        let uncalibrated_10_prob_chd = 1 - element['uncalibrated_chd'] ** Math.exp(linearPredictorCHD);
        let calibrated_10_prob_chd = 1 - Math.exp(-Math.exp(Number(element['calibrated_chd1']) + Number(element['calibrated_chd2']) * Math.log(-Math.log(1 - uncalibrated_10_prob_chd))))

        let uncalibrated_10_prob_stroke = 1 - element['uncalibrated_stroke'] ** Math.exp(linearPredictorStroke);
        let calibrated_10_prob_stroke = 1 - Math.exp(-Math.exp(Number(element['calibrated_stroke1']) + Number(element['calibrated_stroke2']) * Math.log(-Math.log(1 - uncalibrated_10_prob_stroke))));

        let calibrated_10_prob_cvd = 1 - (1 - calibrated_10_prob_chd) * (1 - calibrated_10_prob_stroke);

        let predictiction = Math.round(calibrated_10_prob_cvd * 100);

        return predictiction;

    })

    return final_10_cvd_risk_predict
}

function calculate_nonlab_based(region, age, systolicBP, smoking, bmi, gender) {

    let url = "https://ncd-pen.duredemos.com/json/nonlab-based?_format=json"

    let data = getCalcData(region, url, gender);
    let final_10_cvd_risk_predict;

    final_10_cvd_risk_predict = data.then(element => {

        let centeredAge = age - 60;
        let centeredSystolicBP = systolicBP - 120;
        let centeredSmoking = smoking ? 1 : 0;
        let centeredBmi = bmi - 6;



        let linearPredictorCHD = (
            (centeredAge * element['age_chd']) +
            (centeredSystolicBP * element['sys_chd_1'] - element['sys_chd_2'] * centeredAge * centeredSystolicBP) +
            (centeredBmi * element['bmi_chd_1'] - element['bmi_chd_2'] * centeredAge * centeredBmi) +
            (centeredSmoking * element['smok_chd_1'] - element['smok_chd_2'] * centeredAge * centeredSmoking)
        );

        let linearPredictorStroke = (
            (centeredAge * element['age_stroke']) +
            (centeredSystolicBP * element['sys_stroke_1'] - element['sys_stroke_2'] * centeredAge * centeredSystolicBP) +
            (centeredBmi * element['bmi_stroke_1'] - element['bmi_stroke_2'] * centeredAge * centeredBmi) +
            (centeredSmoking * element['smok_stroke_1'] - element['smok_stroke_2'] * centeredAge * centeredSmoking)

        );

        let uncalibrated_10_prob_chd = 1 - element['uncalibrated_chd'] ** Math.exp(linearPredictorCHD);
        let calibrated_10_prob_chd = 1 - Math.exp(-Math.exp(Number(element['calibrated_chd1']) + Number(element['calibrated_chd2']) * Math.log(-Math.log(1 - uncalibrated_10_prob_chd))))

        let uncalibrated_10_prob_stroke = 1 - element['uncalibrated_stroke'] ** Math.exp(linearPredictorStroke);
        let calibrated_10_prob_stroke = 1 - Math.exp(-Math.exp(Number(element['calibrated_stroke1']) + Number(element['calibrated_stroke2']) * Math.log(-Math.log(1 - uncalibrated_10_prob_stroke))));

        let calibrated_10_prob_cvd = 1 - (1 - calibrated_10_prob_chd) * (1 - calibrated_10_prob_stroke);

        let predict = Math.round(calibrated_10_prob_cvd * 100);
        return predict

    })

    return final_10_cvd_risk_predict;

}
export { calculate_lab_based, calculate_nonlab_based }