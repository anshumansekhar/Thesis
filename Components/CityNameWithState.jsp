<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<select id="city" name="city" onchange="#">
    <option value="empty">Select a City</option>
     <%
        String[] cityNames={
            "Agra",
            "Ahmedabad",
            "Ajmer",
            "Aligarh",
            "Allahabad",
            "Alwar",
            "Amritsar",
            "Aurangabad",
            "Azamgarh",
            "Bahraich",
            "Bangalore",
            "Bareilly",
            "Bathinda",
            "Bhopal",
            "Bijnor",
            "Bikaner",
            "Bilaspur",
            "Chamoli",
            "Chandigarh",
            "Chennai",
            "Chitrakoot",
            "Coimbatore",
            "Cuttack",
            "Darjeeling",
            "Dehradun"
            "Etawah",
            "Faizabad",
            "Faridabad",
            "Faridkot",
            "Fatehgarh Sahib",
            "Fatehpur",
            "Ghaziabad",
            "Gorakhpur",
            "Gulbarga",
            "Gurgaon",
            "Gwalior",
            "Hardoi",
            "Haridwar",
            "Hissar",
            "Hyderabad",
            "Indore",
            "Jabalpur",
            "Jaipur",
            "Jalandhar",
            "Kanpur",
            "Kolkata",
            "Lucknow",
            "Ludhiana",
            "Meerut",
            "Mumbai",
            "Muzaffarnagar",
            "Muzaffarpur",
            "Mysore",
            "Nagaur",
            "Nainital",
            "New Delhi",
            "Patiala",
            "Patna",
            "Pauri Garhwal",
            "Pratapgarh",
            "Pune",
            "Saharanpur",
            "Shimla",
            "Solan",
            "Srinagar",
            "Thane",
            "Ujjain",
            "Varanasi",
            "Vellore",
            "Yamuna Nagar"
        };
        String[] states={
            "Uttar Pradesh",
            "Gujrat",
            "Rajasthan",
            "Uttar Pradesh",
            "Uttar Pradesh",
            "Rajasthan",
            "Punjab",
            "Punjab",
            "Maharastra",
            "Uttar Pradesh",
            "Uttar Pradesh",
            "Karnataka",
            "Uttar Pradesh",
            "Punjab",
            "Madhya Pradesh",
            "Uttar Pradesh",
            "Rajasthan",
            "Chattishgarh",
            "Uttarakhand",
            "Chandigarh",
            "Tamil Nadu",
            "Uttar Pradesh",
            "Tamil Nadu",
            "Odisha",
            "West Bengal",
            "Uttarakhand",
            "Uttar Pradesh",
            "Uttar Pradesh",
            "Haryana",
            "Punjab",
            "Punjab",
            "Uttar Pradesh",
            "Uttar Pradesh",
            "Uttar Pradesh",
            "Karnataka",
            "Haryana",
            "Madhya Pradesh",
            "Uttar Pradesh",
            "Uttarakhand",
            "Haryana",
            "Telengana",
            "Madhya Pradesh",
            "Madhya Pradesh",
            "Rajastan",
            "Punjab",
            "Uttar Pradesh",
            "West Bengal",
            "Uttar Pradesh",
            "Punjab",
            "Uttar Pradesh",
            "Maharastra",
            "Uttar Pradesh",
            "Bihar",
            "Karnataka",
            "Rajasthan",
            "Uttarakhand",
            "Delhi",
            "Punjab",
            "Bihar",
            "Uttarakhand",
            "Pratapgarh",
            "Maharastra",
            "Uttar Pradesh",
            "Himachal Pradesh",
            "Himalachal Pradesh",
            "Jammu and Kashmir",
            "Maharastra",
            "Madhya Pradesh",
            "Uttar Pradesh",
            "Tamil Nadu",
            "Uttar Pradesh"
        };
        for(int i=0;i<cityNames.size();i++)
        {
            out.write("<option value=\""+cityNames[i]+"\">"+cityNames[i]+"-"+states[i]+"</option>");
        }
     %>

  </select>
</body>
</html>