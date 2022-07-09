import javax.swing.*;

public class ClassSelector {

	public static void main(String[] args) {
		JFrame frame = new JFrame("Select Class");
		frame.setSize(300, 150);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JPanel panel = new JPanel();
		frame.add(panel);
		placeComponents(panel);

		frame.setVisible(true);
	}

	private static void placeComponents(JPanel panel) {

		panel.setLayout(null);

		JLabel roomTypeLabel = new JLabel("Class");
		roomTypeLabel.setBounds(10, 10, 80, 25);
		panel.add(roomTypeLabel);

        String[]  classes = {
            "General",
            "Tatkal",
            "Ladies",
            "1st AC",
            "2nd AC",
            "3rd AC",
            "Sleeper",
            "CC",
            "Business",
            "Economy"
        };   
		JComboBox classTypeComboBox = new JComboBox(classes);
		classTypeComboBox.setBounds(100, 10, 160, 25);
		panel.add(classTypeComboBox);
		
	}

}