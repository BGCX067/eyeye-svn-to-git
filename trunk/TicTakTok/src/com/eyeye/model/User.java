package com.eyeye.model;

public class User {
	//플레이어 순서
	private int player;
	//플레이어 돌 모양
	private String hero;
	
	public User(int player, String hero) {
		this.player = player;
		this.hero = hero;
	}
	
	public int player() {
		return player; 
	}
	
	public String hero() {
		return hero;
	}
}
