package com.eyeye.model;

public class User {
	//�÷��̾� ����
	private int player;
	//�÷��̾� �� ���
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
