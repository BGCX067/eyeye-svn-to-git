package com.eyeye.model;

public class Location {
	private int x;
	private int y;
	private int xy;
	
	public Location(int x, int y) {
		this.x = x;
		this.y = y;
		this.xy = x * 10 + y;
	}
	
	public int x(){
		return x;
	}

	public int y() {
		return y;
	}
	
	public int xy() {
		return xy;
	}
}
