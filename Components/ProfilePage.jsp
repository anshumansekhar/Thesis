<%@ page language="java" contentType="text/html"%>
<%@ page import="java.text.*,java.util.*" %>
<html>
    <head>
        <title></title>
    </head>
    <body>
        <table border="2">
            <tr>
                <td>Name:</td>
                <td>
                    <%  
                        String name=request.getParameter("name");  
                        out.print(name);  
                    %>
                </td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>
                    <%  
                        String email=request.getParameter("email");  
                        out.print(email);  
                    %>
                </td>
            </tr>
            <tr>
                <td>Address:</td>
                <td>
                    <%  
                        String address=request.getParameter("address");  
                        out.print(address);  
                    %>
                </td>
            </tr>
            <tr>
                <td>Phone Number:</td>
                <td>
                    <%  
                        String phone=request.getParameter("phone");  
                        out.print(phone);  
                    %>
                </td>
            </tr>
        </table>
    </body>
</html>