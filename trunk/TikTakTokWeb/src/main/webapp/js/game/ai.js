function decideLocation(setLocationArray, player1Location, aiLocation) {
	// First turn : location : 5(best position)
	if(setLocationArray.length == 0) {
		play(5, $("#tile_img5"));
		return;
	}
	
	//AI attack 
	var decideLocation = getBestLocation(aiLocation);
	console.info("decideLocation1 : ", decideLocation);
	if(decideLocation == 0) {
		//Defense Player Attack
		decideLocation = getBestLocation(player1Location);
	}
	console.info("decideLocation2 : ", decideLocation);
	//AI Second Attack
	if (decideLocation == 0){
		decideLocation = getGoodLocation(player1Location);
	}
	console.info("decideLocation3 : ", decideLocation);
	if(decideLocation != 0 && $.turn == 1) {
		var originalLocation = changePointToOriginal(decideLocation); 
		play(originalLocation, $("#tile_img" + originalLocation));
	}
	console.info("decideLocation4 : ", decideLocation);
}

function getBestLocation(locations) {
	var decideLocation = 0;
	var doesDecided = false;
	//checking location for winning at AI 
	$.each(locations, function(index, location) {
		var locationX = parseInt(location % 10);
		var locationY = parseInt(location / 10);
		
		if(doesDecided == true){
			return;
		} 
		$.each(locations, function(index, checkingLocation) {
			//row check
			if(locationY == 1)
			{
				if(location + 10 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location + 20)) == false) {
						decideLocation = location + 20;
						doesDecided = true;
						return;
					}
				}
				if(location + 20 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location + 10)) == false) {
						decideLocation = location + 10;
						doesDecided = true;
						return;
					}
				}
			}
			if(locationY == 20) {
				if(location + 10 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location - 10)) == false) {
						decideLocation = location - 10;
						doesDecided = true;
						return;
					}
				}
			}
			
			//column check
			if(locationX == 1)
			{
				if(location + 1 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location + 2)) == false) {
						decideLocation = location + 2;
						doesDecided = true;
						return;
					}
				}
				if(location + 2 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location + 1)) == false) {
						decideLocation = location + 1;
						doesDecided = true;
						return;
					}
				}
			}
			if(locationX == 2) {
				if(location + 1 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location - 1)) == false) {
						decideLocation = location - 1;
						doesDecided = true;
						return;
					}
				}
			}
			
			//cross check
			if(location == 11)
			{
				if(location + 11 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location + 22)) == false) {
						decideLocation = location + 22;
						doesDecided = true;
						return;
					}
				}
				if(location + 22 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location + 11)) == false) {
						decideLocation = location + 11;
						doesDecided = true;
						return;
					}
				}
			}
			if(location == 22) {
				if(location + 11 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location - 11)) == false) {
						decideLocation = location - 11;
						doesDecided = true;
						return;
					}
				}
				if(location + 9 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location - 9)) == false) {
						decideLocation = location - 9;
						doesDecided = true;
						return;
					}
				}
			}
			
			if(location == 13)
			{
				if(location + 9 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location + 18)) == false) {
						decideLocation = location + 18;
						doesDecided = true;
						return;
					}
				}
				if(location + 18 == checkingLocation) {
					if(checkingExist(changePointToOriginal(location + 8)) == false) {
						decideLocation = location + 8;
						doesDecided = true;
						return;
					}
				}
			}
		});
	});
	return decideLocation;
}

function getGoodLocation(locations) {
	var decideLocation = 0;
	$.each(locations, function(index, location) {
		var locationX = parseInt(location % 10);
		var locationY = parseInt(location / 10);
		//cross check
		//11, 22, 33
		if(location == 11) {
			if(changePointToOriginal(location + 11) == false && changePointToOriginal(location + 22) == false) {
				decideLocation = location + 11;
				return;
			}
		}
		if(location == 22) {
			if(checkingExist(changePointToOriginal(location + 11)) == false && checkingExist(changePointToOriginal(location - 11 )) == false) {
				decideLocation = location + 11;
				return;
			}
			if(checkingExist(changePointToOriginal(location + 9)) == false && checkingExist(changePointToOriginal(location - 9 )) == false) {
				decideLocation = location + 9;
				return;
			}
		}
		if(location == 33) {
			if(checkingExist(changePointToOriginal(location - 11)) == false && checkingExist(changePointToOriginal(location - 22 )) == false) {
				decideLocation = location - 11;
				return;
			}
		}
		//13, 22, 31
		if(location == 13) {
			if(checkingExist(changePointToOriginal(location + 9)) == false && checkingExist(changePointToOriginal(location + 18)) == false) {
				decideLocation = location + 9;
				return;
			}
		}
		if(location == 31) {
			if(checkingExist(changePointToOriginal(location - 9)) == false && checkingExist(changePointToOriginal(location - 18)) == false) {
				decideLocation = location - 9;
				return;
			}
		}
		
		//row check
		// 11, 21, 31
		if(locationX == 1) {
			if(checkingExist(changePointToOriginal(location + 1)) == false && checkingExist(changePointToOriginal(location + 2)) == false) {
				decideLocation = location + 2;
				return;
			}
		}
		// 12, 22, 32
		if(locationX == 2) {
			if(checkingExist(changePointToOriginal(location + 1)) == false && checkingExist(changePointToOriginal(location -1)) == false) {
				decideLocation = location - 1;
				return;
			}
		}
		// 13, 23, 33
		if(locationX == 3) {
			if(checkingExist(changePointToOriginal(location - 1)) == false && checkingExist(changePointToOriginal(location - 2)) == false) {
				decideLocation = location - 2;
				return;
			}
		}
		
		//column check
		// 11, 21, 31
		if(locationY == 1) {
			if(checkingExist(changePointToOriginal(location + 10)) == false && checkingExist(changePointToOriginal(location + 20)) == false) {
				decideLocation = location + 20;
				return;
			}
		}
		// 12, 22, 32
		if(locationY == 2) {
			if(checkingExist(changePointToOriginal(location + 10)) == false && checkingExist(changePointToOriginal(location -10)) == false) {
				decideLocation = location - 10;
				return;
			}
		}
		
		// 12, 22, 32
		if(locationY == 3) {
			if(checkingExist(changePointToOriginal(location - 10)) == false && checkingExist(changePointToOriginal(location - 20)) == false) {
				decideLocation = location - 20;
				return;
			}
		}
	});
	if(decideLocation == 0) {
		for(var i=1; i<10; i++) {
			if(checkingExist(i) == false) {
				decideLocation = changePointFromOriginal(i);
				console.info("decideLocation5 : ", decideLocation);
				return decideLocation;
			}
		}
	}
	return decideLocation;
}