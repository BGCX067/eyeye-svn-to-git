<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>

<link rel="stylesheet" type="text/css" href="static/css/common.css">

<script src="static/js/common/jquery-2.1.1.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		//events();			
	});
	
	function events() {
		/* $("#start_img").click(function() {
			$.ajax({
				url:"demo_test.txt",
				success:function(result){
			    	$("#div1").html(result);
			  	},
				error : function(event,xhr,options,exc) {
					alert("fail");
				}
			});
		}); */
	}
	
	function setPlayType(type) {
		$("input[name='gameType']").val(type);
	}
	
	
</script>
 
<html>
<head>
	<title>Home</title>
</head>
<body>
	<h1 class="home_title"> Welcome to TikTakTok Game! </h1>
	<!-- <div class="home_div"> -->
	<div class="home_div1">
		<form action="game">
			<input type="hidden" name="gameType"/>
			<input type="submit" class="home_single_play_btn" onclick="setPlayType(1)" value=""/>
			<input type="submit" class="home_multi_play_btn" onclick="setPlayType(2)" value=""/>
		</form>
	</div>
</body>
</html>
