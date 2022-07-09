import java.io.*;  
public class checkBook {
    public static void main(String[] args) {
        if(args[0]=="Test" && args[1]=="2020"){
            try {
                FileWriter myWriter = new FileWriter("temp.txt",true);
                myWriter.write("bookFound="+"false"+"\n");
                myWriter.close();
            } catch (IOException ex) {
                System.out.println("An error occurred.");
                ex.printStackTrace();
            }
        }
    }
}
