import javax.swing.*;
import java.awt.event.*;

import java.io.*;  
 

public class homePageLib {

	public static void main(String[] args) {
		JFrame frame = new JFrame("Library Home");
		frame.setSize(400, 150);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JPanel panel = new JPanel();
		frame.add(panel);
		placeComponents(panel);

		frame.setVisible(true);
	}

	private static void placeComponents(JPanel panel) {

		panel.setLayout(null);

		JButton searchButton = new JButton("Search Book");
		searchButton.setBounds(10, 80, 150, 25);
		searchButton.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				try {
					FileWriter myWriter = new FileWriter("temp.txt",true);
					myWriter.write("bookSearch=true"+"\n");
					myWriter.close();
				} catch (IOException ex) {
					System.out.println("An error occurred.");
					ex.printStackTrace();
				}
				
			}
		});
		panel.add(searchButton);
        JButton addBookButton = new JButton("Add Book");
		addBookButton.setBounds(200, 80, 150, 25);
		addBookButton.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				try {
					FileWriter myWriter = new FileWriter("temp.txt",true);
					myWriter.write("addBook=true"+"\n");
					myWriter.close();
				} catch (IOException ex) {
					System.out.println("An error occurred.");
					ex.printStackTrace();
				}
				
			}
		});
		panel.add(addBookButton);
		
	}

}