import javax.swing.*;

public class searchBox {

	public static void main(String[] args) {
		JFrame frame = new JFrame("Search");
		frame.setSize(400, 200);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JPanel panel = new JPanel();
		frame.add(panel);
		placeComponents(panel);

		frame.setVisible(true);
	}

	private static void placeComponents(JPanel panel) {

		panel.setLayout(null);

		JTextField userText = new JTextField(20);
		userText.setBounds(10, 10, 200, 25);
		panel.add(userText);

		JButton searchButton = new JButton("Search");
		searchButton.setBounds(220, 10, 100, 25);
		panel.add(searchButton);
		
	}

}