public class GSTCalculator
{

    public GSTCalculator(MainClass mainFrame,int amount,int percentage){
        mainFrame.update("gst", (percentage/100)*amount);
    }
}
