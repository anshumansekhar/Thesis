import java.io.*;
public class loginCheck
{
    public static boolean check(String username,String password)
    {
        return true;
    }
    public static void main(String[] args) {
        try {
            FileWriter myWriter = new FileWriter("temp.txt",true);
            myWriter.write("loginCheck="+check(args[0],args[1])+"\n");
            myWriter.close();
        } catch (IOException ex) {
            System.out.println("An error occurred.");
            ex.printStackTrace();
        }
    }
}