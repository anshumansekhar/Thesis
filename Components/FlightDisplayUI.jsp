<html>
    <head>
        <title></title>
    </head>
    <body>
        <table border="1">
            <thead>
                <th>
                    Airline
                </th>
                <th>
                    Code
                </th>
                <th>
                    Departure
                </th>
                <th>
                    Arrival
                </th>
                <th>
                    No. of Stops
                </th>
                <th>
                    Duration
                </th>
                <th>
                    Price
                </th>
            </thead>
            <tbody>
                <tr>
                    <%
                        for(String name : request.getParameterValues("AirlineNames"))
                        {
                            out.print("<td>"+name+"</td>");
                        }
                    %>
                    <%
                        for(String code : request.getParameterValues("AirlineCodes"))
                        {
                            out.print("<td>"+code+"</td>");
                        }
                    %>
                    <%
                        for(String departure : request.getParameterValues("AirlineDepartures"))
                        {
                            out.print("<td>"+departure+"</td>");
                        }
                    %>
                    <%
                        for(String arrival : request.getParameterValues("AirlineArrivals"))
                        {
                            out.print("<td>"+arrival+"</td>");
                        }
                    %>
                    <%
                        for(String numberofstop : request.getParameterValues("AirlineNumberOfStops"))
                        {
                            out.print("<td>"+numberofstop+"</td>");
                        }
                    %>
                    <%
                        for(String duration : request.getParameterValues("AirlineDurations"))
                        {
                            out.print("<td>"+duration+"</td>");
                        }
                    %>
                    <%
                        for(String price : request.getParameterValues("AirlinePrice"))
                        {
                            out.print("<td>"+price+"</td>");
                        }
                    %>

                </tr>
            </tbody>
        </table>
    </body>
</html>
