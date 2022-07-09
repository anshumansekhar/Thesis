<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="./resources/assets/css/bootstrap.min.css" rel="stylesheet">
<link href="./resources/assets/css/main.css" rel="stylesheet">
<link href="./resources/assets/css/animate.css" rel="stylesheet">
<link href="./resources/assets/css/responsive.css" rel="stylesheet">
<link href="./resources/assets/css/home.css" rel="stylesheet">
</head>
<body>
	<div class="panel panel-default">
		<div class="panel-heading">Book Ticket</div>
		<div class="panel-body">
			<form:form class="col-md-4" action="/selctedService" modelAttribute="email" method="POST">
				<div class="form-group">
					<label for="email">Email address:</label> 
					<form:input type="email" class="form-control" id="email" path="email"/>
				</div>
				<button type="submit" class="btn btn-info" >Submit</button>
                <div id="myDIV" class=".bg-success"></div>
			</form:form>
		</div>
	</div>
	<script src="./resources/assets/js/jquery.js"></script>
	<script src="./resources/assets/js/bootstrap.min.js"></script>
	<script src="./resources/assets/js/jquery.scrollUp.min.js"></script>
	<script src="./resources/assets/js/price-range.js"></script>
	<script src="./resources/assets/js/jquery.prettyPhoto.js"></script>
	<script src="./resources/assets/js/main.js"></script>

</body>
</html>