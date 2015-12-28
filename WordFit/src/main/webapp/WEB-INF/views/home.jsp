<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>

<form action="login" method="post">
	<h1> Welcome to Word Fit</h1>
	<label for="password">PASSWORD : </label>
	<input type="text" name="password">
	<input type="submit" value="Submit"> 
</form>

</body>
</html>
