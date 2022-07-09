<html>
<body>
    <form>
        <input type="date" name="date"></input>
        <input type="submit">
        <br>
        <%
            String dobString=request.getParameter("date");
            LocalDate today = LocalDate.now(); 
            LocalDate birthday = LocalDate.parse(dobString);
            Period p = Period.between(birthday, today);

            out.print(p.getYears());
        %>
    </form>
</body>
</html>
