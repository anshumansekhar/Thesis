import React from "react";
const CityNameWithState = (props) => {
  var cityName;
  function citySelect(e)
  {
    cityName=e.target.value;
    props.cityNameSelectedPost(cityName);
  }
  return (
    <select id="city" name="city" onChange={citySelect}>
      <option value="empty">Select a City</option>
      <option value="Agra"><b>Agra</b>-Uttar Pradesh</option>
      <option value="Ahmedabad"><b>Ahmedabad</b>-Gujrat</option>
      <option value="Ajmer"><b> Ajmer</b>-Rajasthan</option>
      <option value="Aligarh"><b> Aligarh</b>-Uttar Pradesh</option>
      <option value="Allahabad"><b> Allahabad</b>-Uttar Pradesh</option>
      <option value="Alwar"><b> Alwar</b>-Rajasthan</option>
      <option value="Ambala"><b> Ambala</b>-Punjab</option>
      <option value="Amritsar"><b> Amritsar</b>-Punjab</option>
      <option value="Aurangabad"><b> Aurangabad</b>-Maharastra</option>
      <option value="Azamgarh"><b> Azamgarh</b>-Uttar Pradesh</option>
      <option value="Bahraich"><b> Bahraich</b>-Uttar Pradesh</option>
      <option value="Bangalore"><b> Bangalore</b>-Karnataka</option>
      <option value="Bareilly"><b> Bareilly</b>-Uttar Pradesh</option>
      <option value="Bathinda"><b> Bathinda</b>-Punjab</option>
      <option value="Bhopal"><b> Bhopal</b>-Madhya Pradesh</option>
      <option value="Bijnor"><b> Bijnor</b>-Uttar Pradesh</option>
      <option value="Bikaner"><b> Bikaner</b>-Rajasthan</option>
      <option value="Bilaspur"><b> Bilaspur</b>-Chattishgarh</option>
      <option value="Chamoli"><b> Chamoli</b>-Uttarakhand</option>
      <option value="Chandigarh"><b> Chandigarh</b>-Chandigarh</option>
      <option value="Chennai"><b> Chennai</b>-Tamil Nadu</option>
      <option value="Chitrakoot"><b> Chitrakoot</b>-Uttar Pradesh</option>
      <option value="Coimbatore"><b> Coimbatore</b>-Tamil Nadu</option>
      <option value="Cuttack"><b> Cuttack</b>-Odisha</option>
      <option value="Darjeeling"><b> Darjeeling</b>-West Bengal</option>
      <option value="Dehradun"><b> Dehradun</b>-Uttarakhand</option>
      <option value="Etawah"><b> Etawah</b>-Uttar Pradesh</option>
      <option value="Faizabad"><b> Faizabad</b>-Uttar Pradesh</option>
      <option value="Faridabad"><b> Faridabad</b>-Haryana</option>
      <option value="Faridkot"><b> Faridkot</b>-Punjab</option>
      <option value="Fatehgarh Sahib"><b> Fatehgarh Sahib</b>-Punjab</option>
      <option value="Fatehpur"><b> Fatehpur</b>-Uttar Pradesh</option>
      <option value="Ghaziabad"><b> Ghaziabad</b>-Uttar Pradesh</option>
      <option value="Gorakhpur"><b> Gorakhpur</b>-Uttar Pradesh</option>
      <option value="Gulbarga"><b> Gulbarga</b>-Karnataka</option>
      <option value="Gurgaon"><b> Gurgaon</b>-Haryana</option>
      <option value="Gwalior"><b> Gwalior</b>-Madhya Pradesh</option>
      <option value="Hardoi"><b> Hardoi</b>-Uttar Pradesh</option>
      <option value="Haridwar"><b> Haridwar</b>-Uttarakhand</option>
      <option value="Hissar"><b> Hissar</b>-Haryana</option>
      <option value="Hyderabad"><b> Hyderabad</b>-Telengana</option>
      <option value="Indore"><b> Indore</b>-Madhya Pradesh</option>
      <option value="Jabalpur"><b> Jabalpur</b>-Madhya Pradesh</option>
      <option value="Jaipur"><b> Jaipur</b>-Rajastan</option>
      <option value="Jalandhar"><b> Jalandhar</b>-Punjab</option>
      <option value="Kanpur"><b> Kanpur</b>-Uttar Pradesh</option>
      <option value="Kolkata"><b> Kolkata</b>-West Bengal</option>
      <option value="Lucknow"><b> Lucknow</b>-Uttar Pradesh</option>
      <option value="Ludhiana"><b> Ludhiana</b>-Punjab</option>
      <option value="Meerut"><b> Meerut</b>-Uttar Pradesh</option>
      <option value="Mumbai"><b> Mumbai</b>-Maharastra</option>
      <option value="Muzaffarnagar"><b> Muzaffarnagar</b>-Uttar Pradesh</option>
      <option value="Muzaffarpur"><b> Muzaffarpur</b>-Bihar</option>
      <option value="Mysore"><b> Mysore</b>-Karnataka</option>
      <option value="Nagaur"><b> Nagaur</b>-Rajasthan</option>
      <option value="Nainital"><b> Nainital</b>-Uttarakhand</option>
      <option value="New Delhi"><b> New Delhi</b>-Delhi</option>
      <option value="Patiala"><b> Patiala</b>-Punjab</option>
      <option value="Patna"><b> Patna</b>-Bihar</option>
      <option value="Pauri Garhwal"><b> Pauri Garhwal</b>-Uttarakhand</option>
      <option value="Pratapgarh"><b> Pratapgarh</b>-Uttar Pradesh</option>
      <option value="Pune"><b> Pune</b>-Maharastra</option>
      <option value="Saharanpur"><b> Saharanpur</b>-Uttar Pradesh</option>
      <option value="Shimla"><b> Shimla</b>-Himachal Pradesh</option>
      <option value="Solan"><b> Solan</b>-Himalachal Pradesh</option>
      <option value="Srinagar"><b> Srinagar</b>-Jammu and Kashmir</option>
      <option value="Thane"><b> Thane</b>-Maharastra</option>
      <option value="Ujjain"><b> Ujjain</b>-Madhya Pradesh</option>
      <option value="Varanasi"><b> Varanasi</b>-Uttar Pradesh</option>
      <option value="Vellore"><b> Vellore</b>-Tamil Nadu</option>
      <option value="Yamuna Nagar"><b> Yamuna Nagar</b>-Uttar Pradesh</option>
    </select>
  )
}
export default CityNameWithState;