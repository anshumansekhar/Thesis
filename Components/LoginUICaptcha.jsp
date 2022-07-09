<!DOCTYPE html>
<html>
<head>
    <%@ page import="net.tanesha.recaptcha.ReCaptcha" %>
        <%@ page import="net.tanesha.recaptcha.ReCaptchaFactory" %>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form id="regicomp">
<table border="1">
<thead>
                    <tr>
                        <th colspan="2">Login</th>
                    </tr>
      </thead>
      <tbody>
      <tr>
      <td><label for="namefield">Name</label></td>
<td><input type="text" name="namefield" placeholder="Enter your name" required/></td></tr>
<tr>
<td><label for="pwdfield">Password</label></td>
<td><input type="password" name="pwdfield" placeholder="Enter password" required/></td></tr>
<tr>
<td><button type="submit" name="submit">Submit</button></td>
<td><a href="#">Forgot Password</a></td></tr>
<tr>
    <td>
        <%
            ReCaptcha c = ReCaptchaFactory.newReCaptcha("your_public_key", "your_private_key", false);
            out.print(c.createRecaptchaHtml(null, null));
        %>
    </td>
</tr>
</tbody>
</table>
</form>

</body>
</html>