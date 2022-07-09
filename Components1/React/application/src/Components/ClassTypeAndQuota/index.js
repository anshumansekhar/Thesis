import React from "react";
const ClassTypeAndQuota = (props) => {
    function onClassTypeChange(e)
    {
        props.classTypePost=e.target.value;
    }
    function onQuotaChange(e)
    {
        props.quotaPost=e.target.value;
    }
    return (
        <div>
            <select onchange={onClassTypeChange}>
                <option value="General">General</option>
                <option value="Tatkal">Tatkal</option>
                <option value="Ladies">Ladies</option>
                <option value="Senior Citizen">Senior Citizen</option>
                <option value="Disabled">Disabled</option>
                <option value="Journalist">Journalist</option>
                <option value="VIP">VIP</option>
            </select>
            <select onchange={onQuotaChange}>
                <option value= "1st AC">1st AC</option>
                <option value="2nd AC">2nd AC</option>
                <option value="3rd AC">3rd AC</option>
                <option value="Sleeper">Sleeper</option>
                <option value="2S">2S</option>
                <option value="CC">CC</option>
            </select>
        </div>
    );
}
export default ClassTypeAndQuota;