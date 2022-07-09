import javax.swing.*;
import java.awt.event.*;
public class FromCityToCity {
    public JFrame frame=new JFrame("Select City"); 
    public FromCityToCity(MainClass mainFrame){
        frame.setSize(1000, 1000);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        panel.setLayout(null);
		String[]  cities = {
            "Select City",
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
            "Dehradun",
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
        JLabel fromCityLabel=new JLabel("From:");
        fromCityLabel.setBounds(50,10,50,10);
        panel.add(fromCityLabel);

        JLabel toCityLabel=new JLabel("To:");
        toCityLabel.setBounds(50,50,50,10);
        panel.add(toCityLabel);

		JComboBox<String> fromCityComboBox = new JComboBox<String>(cities);
		fromCityComboBox.setBounds(100, 10, 160, 25);
		panel.add(fromCityComboBox);

        JComboBox<String> toCityComboBox = new JComboBox<String>(cities);
		toCityComboBox.setBounds(100, 50, 160, 25);
		panel.add(toCityComboBox);


        JButton calculateAge = new JButton("Submit");
		calculateAge.setBounds(10, 80, 80, 25);
		calculateAge.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
                mainFrame.update("LoginUI",true);
			}
		});
		panel.add(calculateAge);

        frame.add(panel);

    }

}
