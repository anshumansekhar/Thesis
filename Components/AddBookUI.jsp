<html>
    <head>
        <title></title>
    </head>
    <body>
        <%
            out.print("<p>"+request.getParameter("BookName")+"</p>");

            out.print("<p>"+request.getParameter("AuthorName")+"</p>");

            out.print("<p>"+request.getParameter("TopicName")+"</p>");
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
                    <label>Topic Name:</label>
                </td>
                <td>
                <input type="text" name="TopicName">
            </td>
            </tr>
            </table>
        </form>
    </body>
</html>