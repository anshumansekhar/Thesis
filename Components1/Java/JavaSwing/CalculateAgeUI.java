import javax.swing.*;
import java.awt.event.*;

public class CalculateAgeUI {
    public static JPanel ageUI(){

        JPanel panel = new JPanel();
        panel.setLayout(null);
		JLabel dayLabel = new JLabel("Day");
		dayLabel.setBounds(10, 10, 80, 25);
		panel.add(dayLabel);

		JTextField dayText = new JTextField(20);
		dayText.setBounds(100, 10, 160, 25);
		panel.add(dayText);

		JLabel monthLabel = new JLabel("Month");
		monthLabel.setBounds(10, 40, 80, 25);
		panel.add(monthLabel);

		JTextField monthText = new JTextField(20);
		monthText.setBounds(100, 10, 160, 25);
		panel.add(monthText);

        JLabel yearLabel = new JLabel("Year");
		yearLabel.setBounds(10, 70, 80, 25);
		panel.add(yearLabel);

		JTextField yearText = new JTextField(20);
		yearText.setBounds(100, 70, 160, 25);
		panel.add(yearText);

		JButton calculateAge = new JButton("Calculate Age");
		calculateAge.setBounds(10, 80, 80, 25);
		calculateAge.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				
				
			}
		});
		panel.add(calculateAge);
        return panel;

    }
}
