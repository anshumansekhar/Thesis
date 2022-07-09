import javax.swing.*;
import java.awt.event.*;

import java.io.*;  
 

public class AuthorNameAndGenre {

	public static void main(String[] args) {
		JFrame frame = new JFrame("Author Name and Genre");
		frame.setSize(300, 200);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JPanel panel = new JPanel();
		frame.add(panel);
		placeComponents(panel);

		frame.setVisible(true);
	}

	private static void placeComponents(JPanel panel) {

		panel.setLayout(null);

		JLabel authorLabel = new JLabel("Author Name");
		authorLabel.setBounds(10, 10, 80, 25);
		panel.add(authorLabel);

        String[] authorNames={"J K Rowling"};
		JComboBox authorNameText = new JComboBox(authorNames);
		authorNameText.setBounds(100, 10, 160, 25);
		panel.add(authorNameText);

        
		JLabel genreLabel = new JLabel("Genre");
		genreLabel.setBounds(10, 40, 80, 25);
		panel.add(genreLabel);

        String[] genres={"Fiction"};
		JComboBox genreText = new JComboBox(genres);
		genreText.setBounds(100, 40, 160, 25);
		panel.add(genreText);


		JButton submitButton = new JButton("Submit");
		submitButton.setBounds(10, 100, 100, 25);
		submitButton.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				try {
					FileWriter myWriter = new FileWriter("temp.txt",true);
					myWriter.write("authorName="+authorNameText.getSelectedItem()+"\n");
                    myWriter.write("genre="+genreText.getSelectedItem()+"\n");
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