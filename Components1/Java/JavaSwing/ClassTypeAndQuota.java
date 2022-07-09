import javax.swing.*;
import java.awt.event.*;
public class ClassTypeAndQuota {
    public JFrame frame=new JFrame("Select City"); 
    public ClassTypeAndQuota(MainClass mainFrame){
        frame.setSize(1000, 1000);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        panel.setLayout(null);
        String[] quotas={
            "General",
            "Tatkal",
            "Ladies",
            "Senior Citizen",
            "Disabled",
            "Journalist",
            "VIP"
        };
		String[]  classTypes= {
            "1st AC",
            "2nd AC",
            "3rd AC",
            "Sleeper",
            "2S",
            "CC"
        };   
        JLabel fromCityLabel=new JLabel("Class:");
        fromCityLabel.setBounds(50,10,50,10);
        panel.add(fromCityLabel);

        JLabel toCityLabel=new JLabel("Quota:");
        toCityLabel.setBounds(50,50,50,10);
        panel.add(toCityLabel);

		JComboBox<String> classComboBox = new JComboBox<String>(classTypes);
		classComboBox.setBounds(100, 10, 160, 25);
		panel.add(classComboBox);

        JComboBox<String> quotaComboBox = new JComboBox<String>(quotas);
		quotaComboBox.setBounds(100, 50, 160, 25);
		panel.add(quotaComboBox);


        JButton submitButton = new JButton("Submit");
		submitButton.setBounds(10, 80, 80, 25);
		submitButton.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
                mainFrame.update("LoginUI",true);
			}
		});
		panel.add(submitButton);

        frame.add(panel);

    }

}
