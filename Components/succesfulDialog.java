import javax.swing.*;
import java.awt.event.*;
public class succesfulDialog {

    public static void main(String[] args) {
        JFrame f = new JFrame("Add Book");
        // set the size of frame
        f.setSize(400, 400);
        f.setVisible(true);

        JDialog d = new JDialog(f, "Sucessful");
        // create a label
        JLabel l = new JLabel(args[0]);
        d.add(l);
        // setsize of dialog
        d.setSize(500, 500);
        // set visibility of dialog
        d.setVisible(true);
    }
}
