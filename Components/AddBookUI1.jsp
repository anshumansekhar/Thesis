<html>
    <head>
        <title></title>
    </head>
    <body>
        <%
            out.print("<p>"+request.getParameter("BookName")+"</p>");

            out.print("<p>"+request.getParameter("AuthorName")+"</p>");

            out.print("<p>"+request.getParameter("year")+"</p>");
        %>
        <form>
            <table>
                <tr>
                    <td>
                        <label>Book Name:</label>
                        </td>
                        <td>
                    <input type="text" name="BookName">
                </td>
                </tr>
                <tr>
                    <td>
                        <label>Author Name:</label>
                    </td>
                    <td>
                <input type="text" name="AuthorName">
            </td>
            </tr>
            <tr>
                <td>
                    <label>Year:</label>
                </td>
                <td>
                <input type="text" name="year">
            </td>
            </tr>
            </table>
        </form>
    </body>
</html>