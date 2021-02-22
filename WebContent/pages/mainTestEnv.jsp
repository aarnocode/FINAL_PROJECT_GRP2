<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="css/bootstrap.css" type="text/css">
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="js/bootstrap.js"></script>
<title>Online Store</title>
</head>
<body>
	<jsp:include page="header.jsp"/>
	<div id="mainContainer">
	<jsp:include page="adminLogin.jsp"/>
	</div>
</body>
</html>