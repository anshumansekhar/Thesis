<html>
    <head>
        <title></title>
    </head>
    <body>
        <%
            out.print("<video width=\"320\" height=\"240\" controls src"+request.getParameter("url")+"/video>");
        %>
    </body>
</html>