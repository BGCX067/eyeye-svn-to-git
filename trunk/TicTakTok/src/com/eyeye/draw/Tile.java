package com.eyeye.draw;

import java.util.List;

import com.eyeye.model.Location;
import com.eyeye.model.User;

public class Tile {
	private String tileColum1 = "|   |   |   |";
	private String tileColum2 = "|   |   |   |";
	private String tileColum3 = "|   |   |   |";
	private String underLine  = "-------------";
	
	public void setLocation(List<Location> playerLocations, User user) {
		for(Location location : playerLocations) {
			findTileByLocationAndDraw(location, user);
		}
	}
	
	public void draw() {
		System.out.println(underLine);
		System.out.println(tileColum1);
		System.out.println(underLine);
		System.out.println(tileColum2);
		System.out.println(underLine);
		System.out.println(tileColum3);
		System.out.println(underLine);
	}
	
	private void findTileByLocationAndDraw(Location location, User user) {
		if(location.x() == 1) {
			tileColum1 = drawOnTile(tileColum1, location.y(), user);
		}
		else if(location.x() == 2) {
			tileColum2 = drawOnTile(tileColum2, location.y(), user);
		}
		else if(location.x() == 3) {
			tileColum3 = drawOnTile(tileColum3, location.y(), user);
		}
	}
	
	private String drawOnTile(String tile, int y, User user) {
		StringBuilder sb = new StringBuilder(tile);
		if(y == 1) {
			sb.replace(2, 3, user.hero());
		}
		else if(y == 2) {
			sb.replace(6, 7, user.hero());
		}
		else if(y == 3) {
			sb.replace(10, 11, user.hero());
		}
		return sb.toString();
	}
}
