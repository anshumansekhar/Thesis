<html>
    <head>
        <title></title>
    </head>
    <body>
        <select name="genreDropdown">
            <option value=''>Select a genre</option>
            <%
                for(String genre : request.getParameterValues("genre"))
                {
                    out.print("<option value=\"+genre+\">"+genre+"</option>");
                }
            %>
        </select>
        <select name="authorDropdown">
            <option value=''>Select a Author</option>
            <%
                for(String author : request.getParameterValues("author"))
                {
                    out.print("<option value=\"+author+\">"+author+"</option>");
                }
            %>
        </select>
    </body>
</html>