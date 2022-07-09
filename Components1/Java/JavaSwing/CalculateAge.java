import java.awt.event.*;
import java.util.*;
import javax.swing.*;

public class CalculateAge {

  public JFrame frame = new JFrame("Calculating Age");

  public CalculateAge(
    MainClass mainFrame,
    String dayS,
    String monthS,
    String yearS
  ) {
    frame.setSize(300, 150);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    JPanel panel = new JPanel();
    panel.setLayout(null);

    Calendar bday = Calendar.getInstance();
    bday.set(
      Integer.valueOf(dayS),
      Integer.valueOf(monthS),
      Integer.valueOf(yearS)
    );
    int age;
    Calendar today = Calendar.getInstance();
    if ((today.after(bday))) {
      int curDate = today.get(Calendar.DATE);
      int curMonth = today.get(Calendar.MONTH);
      int curYear = today.get(Calendar.YEAR);
      int day = Integer.valueOf(dayS) - curDate;
      if (day <= 0) {
        day = day + (2 * (-day));
      }
      int month = Integer.valueOf(monthS) - curMonth;
      if (month <= 0) {
        month = month + (2 * (-month));
      }
      int year = Integer.valueOf(yearS) - curYear;
      if (year <= 0) {
        year = year + (2 * (-year));
      }
      age = year;
      JButton calculateButton = new JButton("Calculate Age");
      calculateButton.setBounds(10, 80, 150, 25);
      calculateButton.addActionListener(
        new ActionListener() {
          @Override
          public void actionPerformed(ActionEvent e) {
            System.out.println("Clciekd");
            mainFrame.update(CalculateAge.this, age);
            frame.setVisible(false);
          }
        }
      );
      panel.add(calculateButton);
      frame.add(panel);
    }
  }
}
