import java.awt.event.*;
import javax.swing.*;

public class PaymentUI {

  public JFrame frame = new JFrame("Select City");

  public PaymentUI(MainClass mainFrame) {
    frame.setSize(1000, 1000);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    JPanel panel = new JPanel();
    panel.setLayout(null);

    JLabel paymentModeLabel = new JLabel("Payment Mode:");
    paymentModeLabel.setBounds(50, 10, 500, 20);
    panel.add(paymentModeLabel);

    JRadioButton CreditCardRadio = new JRadioButton("Credit Card");
    JRadioButton debitCardRadio = new JRadioButton("Debit Card");
    CreditCardRadio.setBounds(50, 50, 500, 20);
    debitCardRadio.setBounds(50, 90, 500, 20);
    JRadioButton upiRadio = new JRadioButton("Upi");
    upiRadio.setBounds(50, 130, 500, 20);
    ButtonGroup bg = new ButtonGroup();
    bg.add(CreditCardRadio);
    bg.add(debitCardRadio);
    bg.add(upiRadio);

    panel.add(CreditCardRadio);
    panel.add(debitCardRadio);
    panel.add(upiRadio);

    
    JButton submitButton = new JButton("Pay");
    submitButton.setBounds(10, 150, 80, 25);
    submitButton.addActionListener(
      new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
          mainFrame.update("LoginUI", true);
        }
      }
    );
    panel.add(submitButton);

    frame.add(panel);
  }
}
