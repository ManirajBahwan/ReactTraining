package com.training.domains;

import org.springframework.stereotype.Component;

@Component
public class Player {
	
	
	   private Long playerId;
	   private String firstName;
	   private String lastName;
	   private String image;
       private double ranking;
       
	public Player() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Player(Long playerId, String firstName, String lastName, String image, double ranking) {
		super();
		this.playerId = playerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.image = image;
		this.ranking = ranking;
	}
	public Long getPlayerId() {
		return playerId;
	}
	public void setPlayerId(Long playerId) {
		this.playerId = playerId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public double getRanking() {
		return ranking;
	}
	public void setRanking(double ranking) {
		this.ranking = ranking;
	}
	@Override
	public String toString() {
		return "Player [playerId=" + playerId + ", firstName=" + firstName + ", lastName=" + lastName + ", image="
				+ image + ", ranking=" + ranking + "]";
	}
       
	   
	}


