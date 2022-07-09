import javax.swing.*;

public class AgeDisplayUI {
    public JFrame frame=new JFrame("Age"); 
    public AgeDisplayUI(MainClass mainFrame,int age){
        frame.setSize(300, 150);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        panel.setLayout(null);
		JLabel ageLabel = new JLabel("The age is: "+age);
		ageLabel.setBounds(10, 10, 200, 25);
		panel.add(ageLabel);
        frame.add(panel);
    }
}
