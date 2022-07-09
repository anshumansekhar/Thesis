
import javax.swing.*;
import java.awt.event.*;

public class EnterDateUI {
	public JFrame frame=new JFrame("Enter Age"); 
    public EnterDateUI(MainClass mainFrame){
		frame.setSize(300, 150);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		JPanel panel= new JPanel();
        panel.setLayout(null);
		JLabel enterDateLabel = new JLabel("Enter Date of Birth");
		enterDateLabel.setBounds(10, 10, 80, 25);
		panel.add(enterDateLabel);

		JTextField dateText = new JFormattedTextField();
		dateText.setBounds(100, 10, 160, 25);
		panel.add(dateText);

	
		JButton calculateButton = new JButton("Submit");
		calculateButton.setBounds(10, 80, 150, 25);
		calculateButton.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				System.out.println("Clciekd");
				String[] date=dateText.getText().split("/");
				mainFrame.update(EnterDateUI.this,date[0],date[1],date[2]);
				frame.setVisible(false);
			}
		}
		);
		panel.add(calculateButton);
		frame.add(panel);
        

    }
}
