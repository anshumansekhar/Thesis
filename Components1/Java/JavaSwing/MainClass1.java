import javax.swing.*;

public class MainClass1 implements CommonInterface{

	public boolean isLoggedIn=false;
	public int age=0;
	public static MainClass1 mainFrame;

    public static void main(String[] args) {
		
    	mainFrame=new MainClass1();
		JFrame loginFrame=new LoginUI(mainFrame).frame;
		loginFrame.setVisible(true);
		
    }
	public void placeComponents()
	{
		if(isLoggedIn)
		{
			JFrame dateFrame=new EnterDateUI(mainFrame).frame;
			dateFrame.setVisible(true);
		}
		if(age!=0)
		{
			System.out.println("agd");
			JFrame ageDisplay=new AgeDisplayUI(mainFrame,age).frame;
			ageDisplay.setVisible(true);
		}
	}

	@Override
	public void update(String componentName, boolean isLoggedIn) {
		if(componentName=="LoginUI")
		{
			System.out.println("sgd");
			this.isLoggedIn=isLoggedIn;
		}
		placeComponents();
	}
	@Override
	public void update(String componentName, int age) {
		System.out.println(age);
		this.age=age;
		placeComponents();
		
	}



}