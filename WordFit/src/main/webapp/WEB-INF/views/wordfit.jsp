<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Word Fit</title>
<link rel="stylesheet" type="text/css" href="static/css/wordfit/style.css" media="screen" />
<script type="text/javascript" src="static/js/common/jquery-2.1.1.min.js"></script>
<script type="text/javascript">

$(document).ready(function(){
	//Adding blank 
	$(".box").html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text/html", ev.target.id);
}

function drop(ev) {
	console.info("doo");
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    console.info(data);
    //ev.target.appendChild(document.getElementById(data));
    $(".box").html($("#" + data).html());
    
}

</script>
</head>
<body>
	<p align="center" class="title_p">Study</p>
	<h3>Question</h3>
	<div class="top_box">How long does it <span class="box" ondrop="drop(event)" ondragover="allowDrop(event)"></span> to get to my home?</div>
	<br><br><br><br>
	<h3>Examples(Drag)</h3>
	<div class="example_box">
		<div id="example1" class="example" draggable="true" ondragstart="drag(event)">takes </div>
		<div id="example2" class="example" draggable="true" ondragstart="drag(event)">taking </div>
		<div id="example3" class="example" draggable="true" ondragstart="drag(event)">taken </div>
		<div id="example4" class="example" draggable="true" ondragstart="drag(event)">take </div>
	</div>
	</body>
</html>