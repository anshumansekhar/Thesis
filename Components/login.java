import javax.swing.*;
import java.awt.event.*;

import java.io.*;  
 

public class login {

	public static void main(String[] args) {
		JFrame frame = new JFrame("Login");
		frame.setSize(300, 150);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JPanel panel = new JPanel();
		frame.add(panel);
		
		placeComponents(panel);

		frame.setVisible(true);
	}

	private static void placeComponents(JPanel panel) {

		panel.setLayout(null);

		JLabel userLabel = new JLabel("User");
		userLabel.setBounds(10, 10, 80, 25);
		panel.add(userLabel);

		JTextField userText = new JTextField(20);
		userText.setBounds(100, 10, 160, 25);
		panel.add(userText);

		JLabel passwordLabel = new JLabel("Password");
		passwordLabel.setBounds(10, 40, 80, 25);
		panel.add(passwordLabel);

		JPasswordField passwordText = new JPasswordField(20);
		passwordText.setBounds(100, 40, 160, 25);
		panel.add(passwordText);

		JButton loginButton = new JButton("login");
		loginButton.setBounds(10, 80, 80, 25);
		loginButton.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				try {
					FileWriter myWriter = new FileWriter("temp.txt",true);
					myWriter.write("username="+userText.getText()+"\n");
					myWriter.write("password="+passwordText.getText()+"\n");
					myWriter.close();
				} catch (IOException ex) {
					System.out.println("An error occurred.");
					ex.printStackTrace();
				}
				
			}
		});
		panel.add(loginButton);
		
	}

}