<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="../css/userProfileStyle.css" type="text/css">
<link rel="stylesheet" href="../css/footer.css" type="text/css">
<link rel="stylesheet" href="../css/header.css" type="text/css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="../js/userProfileScript.js"></script>
<script src="../js/bootstrap.js"></script>
<title>User Registration</title>
</head>
<body>
	<jsp:include page="header.jsp"/>
	
	<div>
		<img src="../images/user_img.png" alt="User Image" class="userImg">
	</div>
	
	
	
	 <div id="profilecontainer">
	  
	 </div>


<script type="text/javascript">
		$(document).ready(function(){
			initUserReg();
		});
</script>
</body>
</html>