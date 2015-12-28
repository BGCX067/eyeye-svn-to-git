
//initialized...
function init() {
	$.setLocationArray = [];
	$.player1Location = [];
	$.player2Location = [];
	$.turn = 1;
}

//locationInt = 1,2,3....9,  srcObject = tile div
function play(locationInt, srcObject) {
	if(checkingExist(locationInt) == true) {
		return;
	}
	//casting string to number
	locationInt *= 1;
	$.setLocationArray.push(locationInt);
	var location = changePointFromOriginal(locationInt);
	setLocation(location);
	draw(srcObject);
	if($.turn == 1) {
		if(checkingWinner($.player1Location) == true) {
			alert("1Player Win!!");
			return;
		}
	}
	else{
		if(checkingWinner($.player2Location) == true) {
			alert("2Player Win!!");
			return;
		}	
	}
	if($.setLocationArray.length == 9) {
		alert("Draw!!");
	} 
	
	changeTurn();
}

//set in player's locations 
function setLocation(location) {
	if($.turn == 1) {  
		$.player1Location.push(location);
	}
	else { 
		$.player2Location.push(location);
	}
}

//change to point([x,y]) from int(number) for game location
function changePointFromOriginal(locationInt) {
	var x = parseInt(parseInt((locationInt / 3 + 1)) * 10);
	var y = parseInt(locationInt % 3);
	if(y == 0) {
		x -= 10; 
		y = 3;
	}
	return x + y;
}

//change TO int(number) From point([x,y])
function changePointToOriginal(location) {
	var x = (parseInt(location / 10) -1) * 3;
	var y = parseInt(location % 10);
	return x + y;
}

//check duplicate location
function checkingExist(locationInt) {
	var duplication = false;
	$.each($.setLocationArray, function(index, savedNumber) {
		if(locationInt == savedNumber) {
			duplication = true;
			//this return is $.each... ^^ (javascript's return is different java's return); //ah o............
			return;
		}
	});
	return duplication;
}

function checkingWinner(locations) {
//	console.info("locations : ", locations);
	var isWin = false;
	$.each(locations, function(index , location) {
		var rowWinConut = 0;
		var columWinConut = 0;
		var crossWinConut = 0;
		$.each(locations, function(index , checkingLocation) {
	//		console.info("location : ", location);
		//	console.info("checkingLocation : ", checkingLocation);
			if(location + 1 == checkingLocation || location + 2 == checkingLocation) {
				++rowWinConut;
				if(rowWinConut == 2) {
					isWin = true;
					return;
				} 
			}
			else if(location + 10 == checkingLocation || location + 20 == checkingLocation) {
				++columWinConut;
				if(columWinConut == 2) {
					isWin = true;
					return;
				}
			}
			else if(location + 11 == checkingLocation || location + 22 == checkingLocation) {
				++crossWinConut;
				if(crossWinConut == 2) {
					isWin = true;
					return;
				}
			}
			
		});
		
		if(isWin == true) {
			return;
		}
	});
	return isWin;
}

function draw(imgObject) {
	imgObject.attr("src", getPlayerHeroImageSrcByTurn());
}


function changeTurn() {
	if($.turn == 1) {
		$.turn = 2;
	}
	else {
		$.turn = 1;
	}
}

// get hero image src on server
function getPlayerHeroImageSrcByTurn() {
	if($.turn == 1) {
		return "static/images/tileo.jpg";
	}
	else {
		return "static/images/tilex.jpg";
	}
}

