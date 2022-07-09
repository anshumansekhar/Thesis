<html>
    <head>
        <title></title>
    </head>
    <body>
        <%
            out.print(String.format("
            <form method=%s>
                <input type=%s placeholder=Search name=%s>
                <button type=%s>Search</button>
            </form>"
            ,"POST","text","Search...","Submit"));
        %>
    </body>
</html>