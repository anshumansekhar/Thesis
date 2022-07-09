function calculateAge(date_of_birth){
     
    //calculate month difference from current date in time  
    var month_diff = Date.now() - date_of_birth.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    return age; 
}
