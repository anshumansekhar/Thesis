import javax.swing.*;

public class RoomSelector {

	public static void main(String[] args) {
		JFrame frame = new JFrame("Select Room");
		frame.setSize(300, 150);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JPanel panel = new JPanel();
		frame.add(panel);
		placeComponents(panel);

		frame.setVisible(true);
	}

	private static void placeComponents(JPanel panel) {

		panel.setLayout(null);

		JLabel roomTypeLabel = new JLabel("Room Type");
		roomTypeLabel.setBounds(10, 10, 80, 25);
		panel.add(roomTypeLabel);

        String[] roomTypes={
            "AC Deluxe",
            "Non AC Deluxe",
            "Dormitory",
            "Executive Suite",
            "Presidential Suite",
            "Cabana",
            "Villa",
            "Single",
            "Double"
        };
		JComboBox roomTypeComboBox = new JComboBox(roomTypes);
		roomTypeComboBox.setBounds(100, 10, 160, 25);
		panel.add(roomTypeComboBox);

		JLabel numGuestsLabel = new JLabel("Number of Guests");
		numGuestsLabel.setBounds(10, 40, 150, 25);
		panel.add(numGuestsLabel);

		String[] numbers={"1","2","3","4","5","6","7","8","9","10"};
        JComboBox numberOfGuestsComboBox = new JComboBox(numbers);
		numberOfGuestsComboBox.setBounds(160, 40, 100, 25);
		panel.add(numberOfGuestsComboBox);

		JButton submitButton = new JButton("submit");
		submitButton.setBounds(10, 80, 150, 25);
		panel.add(submitButton);
		
	}

}