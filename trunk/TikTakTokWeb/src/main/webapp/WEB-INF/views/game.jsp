<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>

<link rel="stylesheet" type="text/css" href="static/css/common.css">
<script src="static/js/common/jquery-2.1.1.min.js"></script>
<script src="static/js/game/core.js"></script>
<script src="static/js/game/ai.js"></script>
<script type="text/javascript">
	//member
	$.turn;
	$.player1Location;
	$.player2Location;
	// saved location
	$.setLocationArray;
	// game status
	$.status = {IGNORE : -1, PLAYING : 0, PLAYER1_WIN : 1, PLAYER2_WIN : 2};
	var gameType = "${gameType}";
	
	$(document).ready(function() {
		init();
		for(var i = 1; i < 10; i++) {
			$("#tile_img" + i).click(tileClickEvent);	
		}
		// 컴퓨터가 선턴
		if(gameType == 1) {
			aiPlay();
		}
	});
	
	function tileClickEvent() {
		/* console.info("doo this : ", $(this).attr(scr="aa")); */
		var locationInt = $(this).attr("class");
		locationInt = locationInt.substring(4,5);
		play(locationInt, $(this));
		if(gameType == 1) {
			aiPlay();
		}
	}
	
	function aiPlay() {
		decideLocation($.setLocationArray, $.player1Location, $.player2Location);
	}
</script>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Tik Tak Tok</title>
</head>
<body>
	<c:set var="tileImagePath" value="static/images/tile.jpg"></c:set>
	<div>
		<div class="div_tile">
			<c:forEach begin="1" end="9" var="i" >
				<%-- <img src="${tileImagePath}" id="tile_img${i}" class="tile${i} onclick(tileClickEvent())"/> --%>
				<img src="${tileImagePath}" id="tile_img${i}" class="tile${i}"/>
			</c:forEach>
		</div>
	</div>
</body>
</html>