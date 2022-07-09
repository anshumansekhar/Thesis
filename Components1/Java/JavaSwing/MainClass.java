import javax.swing.*;

public class MainClass implements CommonInterface {

    
    public static MainClass mainFrame;

    String day=null;
    String month=null;
    String year=null;
    Integer age=null;


    public static void main(String[] args) {
        mainFrame=new MainClass();
		JFrame dateUIFrame=new EnterDateUI(mainFrame).frame;
        dateUIFrame.setVisible(true);
    }

    public void reFrame()
    {
        System.out.println("Called Reframe");
        if(day!=null && month!=null && year!=null)
        {
            JFrame calculateAgeFrame=new CalculateAge(mainFrame,day,month,year).frame;
            day=null;
            month=null;
            year=null;
            calculateAgeFrame.setVisible(true);
        }
        if(age!=null)
        {
            JFrame ageDisplayFrame=new AgeDisplayUI(mainFrame,age).frame;
            age=null;
            ageDisplayFrame.setVisible(true);
        }
        return;
    }


    @Override
    public void update(EnterDateUI dateUI, String day, String month, String year) {
        System.out.println("Called");
        this.day=day;
        this.month=month;
        this.year=year;
        reFrame();
    }


    @Override
    public void update(CalculateAge calculateAge, int age) {
        this.age=age;   
        System.out.println("Age update"); 
        reFrame();    
    }

    
    
}
