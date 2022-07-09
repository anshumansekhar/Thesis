import javax.swing.*;
import java.awt.event.*;

import java.io.*;  
 

public class addBook {

	public static void main(String[] args) {
		JFrame frame = new JFrame("Add Book");
		frame.setSize(300, 200);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JPanel panel = new JPanel();
		frame.add(panel);
		placeComponents(panel);

		frame.setVisible(true);
	}

	private static void placeComponents(JPanel panel) {

		panel.setLayout(null);

		JLabel bookLabel = new JLabel("Book Name");
		bookLabel.setBounds(10, 10, 80, 25);
		panel.add(bookLabel);

		JTextField bookNameText = new JTextField(20);
		bookNameText.setBounds(100, 10, 160, 25);
		panel.add(bookNameText);

		JLabel bookYearLabel = new JLabel("Book Year");
		bookYearLabel.setBounds(10, 40, 80, 25);
		panel.add(bookYearLabel);

		JTextField bookYearText = new JTextField(4);
		bookYearText.setBounds(100, 40, 160, 25);
		panel.add(bookYearText);

        JLabel bookPriceLabel = new JLabel("Book Year");
		bookPriceLabel.setBounds(10, 70, 80, 25);
		panel.add(bookPriceLabel);

		JTextField bookPriceText = new JTextField(4);
		bookPriceText.setBounds(100, 70, 160, 25);
		panel.add(bookPriceText);

		JButton submitButton = new JButton("Submit");
		submitButton.setBounds(10, 100, 100, 25);
		submitButton.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				try {
					FileWriter myWriter = new FileWriter("temp.txt",true);
					myWriter.write("bookName="+bookNameText.getText()+"\n");
                    myWriter.write("bookYear="+bookYearText.getText()+"\n");
					myWriter.write("bookPrice="+bookPriceText.getText()+"\n");
					myWriter.close();
				} catch (IOException ex) {
					System.out.println("An error occurred.");
					ex.printStackTrace();
				}
				
			}
		});
		panel.add(submitButton);
		
	}

}