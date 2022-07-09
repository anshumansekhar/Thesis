import javax.swing.*;
import java.awt.event.*;

import java.io.*;  
import LoginUI.*;
import AgeDisplayUI.*;

public class Main{

    public static void main(String[] args) {
        JFrame frame = new JFrame("Age Calculator");
		frame.setSize(300, 150);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JPanel panel = new JPanel();
		frame.add(new LoginUI.loginUI());
        frame.add(new AgeDisplayUI.displayUI());
		
		

		frame.setVisible(true);
    }

}