import React from 'react'
const CalculateAgeScreen = (props) => {
  var date="";
  var age="";
  function onDateInput(e){
    date=e.target.value;
    
  }
  function calculateAge() {
    var parts =date.split('-');
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
    var month_diff = Date.now() - mydate.getTime();  
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();   
    var ageC = Math.abs(year - 1970);  
    props.post(ageC);
  }
    return (
      <div>
        <label>Date of Birth:</label>
        <input type="date" onInput={onDateInput} name="date"/>
        <button onClick={calculateAge}>Calculate Age</button>
      </div >
     )
   }
  
  export default CalculateAgeScreen