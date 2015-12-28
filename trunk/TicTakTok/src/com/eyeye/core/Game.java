package com.eyeye.core;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.eyeye.draw.Tile;
import com.eyeye.model.Location;
import com.eyeye.model.User;

public class Game {
	private List<Location> player1Locations;
	private List<Location> player2Locations;
	private User player1;
	private User player2;
	private int turnCount = 1;
	private static final int MAX_TURN_COUNT = 9;

	//Check Code
	private static final int SUCCESS_CODE = 0;
	private static final int ERROR_CODE_INVAILD_LOCATION = 100;
	private static final int ERROR_CODE_DUPLE_LOCATION = 101;
	private Scanner scan;
	
	public void start() {
		init();
		int turn = 1;
		System.out.println("���� ������ �����մϴ�.");
		scan = new Scanner(System.in);
		// Winner check �� ��ġ ���� ������ ���� ������ ��Ƶδ� ����
		User user;
		List<Location> locations;
		User winnerPlayer;
		
		while(true) {
			System.out.print (turnCount + "�� \t");
			if(turn == player1.player()) {
				System.out.println("Player1�� �����Դϴ�.");
				user = player1;
				locations = player1Locations;
			}
			else {
				System.out.println("Player2�� �����Դϴ�.");
				user = player2;
				locations = player2Locations;
			}
			System.out.println("��� �νðڽ��ϱ�? (1-1,1-2,1-3,2-1,2-2,2-3,3-1,3-2,3-3)");
			draw();
			String location = scan.next();
			int checkingCode = validLocation(location);
			if(checkingCode == ERROR_CODE_INVAILD_LOCATION) {
				System.out.println("�� ��ġ ������ �߸��Ǿ����ϴ�. �ٽ� �μ���.");
				continue;
			}
			else if(checkingCode == ERROR_CODE_DUPLE_LOCATION) {
				System.out.println("�� ��ġ�� �ߺ��Ǿ����ϴ�. �ٽ� �μ���.");
				continue;
			}
			setLocation(user, locations, location);
			winnerPlayer = checkingWinner(user, locations);
			if(winnerPlayer != null) {
				draw();
				System.out.println("");
				System.out.println("");
				System.out.println(winnerPlayer.player() + "player�� �¸��Ͽ����ϴ�.");
				break;
			}
			
			turn = changeTurn(turn);
			turnCount++;
			
			if(checkingTurnOver()){
				draw();
				System.out.println("������ �������ϴ�.");
				System.out.println("�����ϴ�. �κ� �� ���Ͻó׿�. �����ϼ̽��ϴ�.");
				break;
			}
		}
	}
	
	public void setLocation(User user, List<Location> locations, String locationStr) {
		String[] splitedLocation = locationStr.split("-");
		int x = Integer.parseInt(splitedLocation[0]);
		int y = Integer.parseInt(splitedLocation[1]);
		Location location = new Location(x, y);
		locations.add(location);
	}
	
	public void draw() {
		Tile tile = new Tile();
		tile.setLocation(player1Locations, player1);
		tile.setLocation(player2Locations, player2);
		tile.draw();
	}
	
	private void init() {
		player1Locations = new ArrayList<Location>();
		player2Locations = new ArrayList<Location>();
		makePlayer();
	}
	
	private void makePlayer() {
		player1 = new User(1, "O");
		player2 = new User(2, "X");
	}
	
	private int changeTurn(int turn) {
		if(turn == 1) {
			return 2;
		}
		else {
			return 1;
		}
	}
	
	private int validLocation(String location) {
		String[] locations = location.split("-");
		//�Է� ���°� �߸��Ǿ���
		if(locations.length < 2) {
			return ERROR_CODE_INVAILD_LOCATION;
		}
		try {
			int x = Integer.parseInt(locations[0]); 
			int y = Integer.parseInt(locations[1]);
			if(x < 1 || x > 3 || y < 1 || y > 3) {
				return ERROR_CODE_INVAILD_LOCATION;
			}
			
			if(!chekingDuple(x * 10 + y)) {
				return ERROR_CODE_DUPLE_LOCATION;
			}
			return SUCCESS_CODE;
		}
		catch(RuntimeException re) {
			return ERROR_CODE_INVAILD_LOCATION;
		}
	}
	
	//�� �ߺ� üũ
	private boolean chekingDuple(int xy) {
		for(Location location : player1Locations) {
			if(xy == location.xy()) {
				return false;
			}
		}
		
		for(Location location : player2Locations) {
			if(xy == location.xy()) {
				return false;
			}
		}
		return true;
	}
	private boolean checkingTurnOver() {
		if(turnCount > MAX_TURN_COUNT) {
			return true;
		}
		return false;
	}
	
	private User checkingWinner(User user, List<Location> locations) {
		// TODO �̷��� ���� üũ�ߴ� ���� �ٽ� üũ�ϴ°Ŷ�.. ���߿� ���� ������ �ʿ���.. ���� �ð� �����  9 * 9 = 81�� ���鼭 üũ��
		for(Location targetLocation : locations) {
			int rowWinConut = 0;
			int columWinConut = 0;
			int crossWinConut = 0;
			int targetXy = targetLocation.xy();
			for(Location checkingLocation : locations) {
				if(targetXy + 1 == checkingLocation.xy() || targetXy + 2 == checkingLocation.xy()) {
					++rowWinConut;
					if(rowWinConut == 2) {
						return user;
					} 
				}
				else if(targetXy + 10 == checkingLocation.xy() || targetXy + 20 == checkingLocation.xy()) {
					++columWinConut;
					if(columWinConut == 2) {
						return user;
					}
				}
				else if(targetXy + 11 == checkingLocation.xy() || targetXy + 22 == checkingLocation.xy()) {
					++crossWinConut;
					if(crossWinConut == 2) {
						return user;
					}
				}
			}
		}
		return null;
	}
}
