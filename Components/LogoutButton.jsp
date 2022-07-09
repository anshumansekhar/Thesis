
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
    <% 
        if(request.getParameter("logoutButton") != null) {
            out.print("Logout Clicked");
        }
    %>
</head>
<body>
    <FORM NAME="form1" METHOD="POST">
        <table border="1">
            <tr>
                <td>
                    <INPUT TYPE="HIDDEN" NAME="logoutButton">
                    <INPUT TYPE="BUTTON" VALUE="Log Out">
                </td>
            </tr>
        
        </table>
    </FORM>
</body>
</html>