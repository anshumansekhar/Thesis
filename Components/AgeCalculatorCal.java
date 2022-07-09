import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.util.*;
import javax.swing.event.*;
public class AgeCalculatorCal extends JFrame implements ActionListener
{
    JList jdate,jmonth,jyear;
    JPanel jp,jp1,jp2;
    JScrollPane jsp1,jsp2,jsp3;
    JButton jb;
    JMenuBar jmb;
    JMenu file,help;
    JMenuItem exit,aboutUs;   
    public AgeCalculatorCal()
    {
      
    setTitle("Age Calculator");
        setSize(400,450);
        setLayout(null);
    getContentPane().setBackground(Color.PINK);
   
        jmb = new JMenuBar();
        file = new JMenu("File");
        file.setMnemonic(KeyEvent.VK_F);
        help = new JMenu("Help");
        help.setMnemonic(KeyEvent.VK_H);
        exit = new JMenuItem("Exit");
        exit.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_X,ActionEvent.CTRL_MASK));
        exit.addActionListener(this);
        file.add(exit);
        aboutUs = new JMenuItem("About Us");
        aboutUs.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_H,ActionEvent.CTRL_MASK));
        aboutUs.addActionListener(this);
        help.add(aboutUs);
        jmb.add(file);
        jmb.add(help);
        setJMenuBar(jmb);
    addWindowListener(new MyWindowListener(this));
        Vector<Integer>date=new Vector<Integer>();
        {
            for(int i=1;i<=31;i++)
            {
                date.add(i);
            }
        }
        jdate = new JList(date);
        jdate.setVisibleRowCount(5);
        jdate.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        Vector<Integer> mon = new Vector<Integer>();
       
            for(int i=1;i<=12;i++)
            {
            mon.add(i);   
            }
       
        jmonth = new JList(mon);
        jmonth.setVisibleRowCount(4);
        jmonth.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        Vector<Integer>year = new Vector<Integer>();
        for(int i=1950;i<2050;i++)
        {
            year.add(i);
        }
        jyear = new JList(year);
       
        jyear.setVisibleRowCount(10);
        jyear.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        jp = new JPanel();
        jp.setBorder(BorderFactory.createTitledBorder("Select date"));
       
        jp1=new JPanel();
        jp1.setBorder(BorderFactory.createTitledBorder("Select Month"));
       
        jp2 = new JPanel();
        jp2.setBorder(BorderFactory.createTitledBorder("Select Year"));
        jsp1 = new JScrollPane(jdate);
        jsp2 = new JScrollPane(jmonth);
        jsp3 = new JScrollPane(jyear);
       
        jp.add(jsp1);
        jp.setBackground(Color.orange);
        jp1.add(jsp2);
        jp2.add(jsp3);
        jp.setBounds(10,100,100,200);
        jp1.setBounds(130,100,100,150);
        jp2.setBounds(250,100,100,220);
        add(jp);
        add(jp1);
        add(jp2);
        jb = new JButton("Calculate");
        jb.setBounds(100,350,100,40);
        add(jb);
        jb.addActionListener(this);
        setVisible(true);
       
    }
    @Override
    public void actionPerformed(ActionEvent ae)
    {
        if(ae.getSource()==jb)
        {
        try
        {

    int userDate = (Integer)jdate.getSelectedValue();
   
    int userMonth = (Integer)jmonth.getSelectedValue();
   
    int userYear = (Integer)jyear.getSelectedValue();

    Calendar bday = Calendar.getInstance();
    bday.set(userYear,userMonth,userDate);
    Calendar today = Calendar.getInstance();
   
    if((today.after(bday)))
    {
        int curDate = today.get(Calendar.DATE);
        int curMonth = today.get(Calendar.MONTH);
        int curYear = today.get(Calendar.YEAR);
        int day = userDate-curDate;
        if(day>0)
        {
            day=day;
        }
        else
        {
            day=day+(2*(-day));
        }
   
        int month = userMonth-curMonth;
        if(month>0){
        month=month;
        }
        else
        {
            month= month+(2*(-month));
        }
       
        int year = userYear-curYear;
        if(year>0)
        {
            year=year;
        }
        else
        {
            year =year+(2*(-year));
        }
       
        JOptionPane.showMessageDialog(this,"You Are:"+year+" Year"+" "+month+
            "Month"+day+" "+"Days Old..","AgeCal by Arpit",JOptionPane.INFORMATION_MESSAGE);
    }
    else
    {
        JOptionPane.showMessageDialog(this,"Bawali pooch tu to paida nhi hua","AgeCal",JOptionPane.ERROR_MESSAGE);
    }
       
        }
        catch(Exception e)
        {
            if(jdate.getSelectedValue()==null)
    {
        JOptionPane.showMessageDialog(this,"Please select Your Birth Date???","AgeCal v1.0",JOptionPane.ERROR_MESSAGE);
    }
    else if(jmonth.getSelectedValue()==null)
    {
    JOptionPane.showMessageDialog(this,"Please select Your Birth Month???","AgeCal v1.0",JOptionPane.ERROR_MESSAGE);
    }
   
    else    if(jyear.getSelectedValue()==null)
    {
        JOptionPane.showMessageDialog(this,"Please select Your Birth Year????","AgeCal v1.0",JOptionPane.ERROR_MESSAGE);
    }
   
   
        }
       
        }
        if(ae.getSource()==exit)
        {
            System.exit(0);
        }
        if(ae.getSource()==aboutUs)
        {
            JOptionPane.showMessageDialog(this,"Developed By Arpit Vijay"+"\n"+"Contact:-Vijayarpit.vijay@gmail.com","Agecal v1.0",JOptionPane.INFORMATION_MESSAGE);
        }
    }
   
    public static void main(String...s)
    {
        new AgeCalculatorCal();
    }
}


 class MyWindowListener extends WindowAdapter
 {
     AgeCalculatorCal close;
     public MyWindowListener(AgeCalculatorCal ac)
     {
         close =ac;
     }
     @Override
     public void windowClosing(WindowEvent we)
     {
         int x = JOptionPane.showConfirmDialog(close,"Really do you Want to exit???","AgeCal v1.0",JOptionPane.YES_NO_OPTION);
         if(x==JOptionPane.YES_OPTION)
         {
             close.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
         }
         if(x==JOptionPane.NO_OPTION)
         {
             close.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
         }
     }
 }
