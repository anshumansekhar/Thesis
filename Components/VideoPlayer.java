import javax.swing.*;
import java.awt.*;
import java.io.*;


public class VideoPlayer {

	public static void main(String[] args) {
		JFrame frame = new JFrame("Video Player");
		frame.setSize(400, 200);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JPanel panel = new JPanel();
		frame.add(panel);
		placeComponents(panel);

		frame.setVisible(true);
	}

	private static void placeComponents(JPanel panel) {

		panel.setLayout(null);

        JEditorPane jep = new JEditorPane();
		jep.setBounds(10, 10, 200, 250);
		jep.setEditable(false);   

		try {
			// jep.setContentType("text/html");
			// jep.setText("<html>Could not load</html>");
			jep.setPage("https://www.youtube.com/embed/"+"r06tM6kJAVs");
		}catch (IOException e) {
			jep.setContentType("text/html");
			jep.setText("<html>Could not load</html>");
		} 
		panel.add(jep);
		
	}

}