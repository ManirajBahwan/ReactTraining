package com.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.training.domains.Player;

import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class PlayerController {

	@Autowired
	private ModelAndView modelAndView;


	private List<Player> playerList = new ArrayList<Player>();


	@RequestMapping("/")
	 public ModelAndView  execute(){
		 
		 
		modelAndView.setViewName("index");
		 
		modelAndView.addObject("msg", "Welcome to Spring MVC");
		 
		 return modelAndView;
	 }
	
	PlayerController() {
		this.playerList = createPlayers();
	}

	@RequestMapping(method = RequestMethod.GET ,value="/players")
	public List<Player> getPlayers() {
		return this.playerList;
	}

	@RequestMapping(value = "players/{id}", method = RequestMethod.GET)
	public Player getPlayer(@PathVariable("id") Long id) {
		return this.playerList.stream().filter(Player -> Player.getPlayerId() == id).
				 findFirst().orElse(null);
	}

	@RequestMapping(method = RequestMethod.POST,value="/players")
	public Player savePlayer(@RequestBody Player player) {
		Long nextId = 0L;
		if (this.playerList.size() != 0) {
			Player lastPlayer = this.playerList.stream().
					 skip(this.playerList.size() - 1).findFirst().orElse(null);
			nextId = lastPlayer.getPlayerId() + 1;
		}

		player.setPlayerId(nextId);
		this.playerList.add(player);
		return player;

	}

	@RequestMapping(method = RequestMethod.PUT,value="/players")
	public Player updatePlayer(@RequestBody Player player) {
		Player modifiedPlayer = this.playerList.stream().
				filter(u -> u.getPlayerId() == player.getPlayerId()).findFirst().orElse(null);
		
		if(modifiedPlayer !=null)
		{
			modifiedPlayer.setFirstName(player.getFirstName());
			modifiedPlayer.setLastName(player.getLastName());
			modifiedPlayer.setImage(player.getImage());
			modifiedPlayer.setRanking(player.getRanking());
		}
		return modifiedPlayer;
	}

	@RequestMapping(value = "players/{id}", method = RequestMethod.DELETE)
	public boolean deletePlayer(@PathVariable Long id) {
		Player deletePlayer = this.playerList.stream().filter(player -> player.getPlayerId() == id).findFirst().orElse(null);
		if (deletePlayer != null) {
			this.playerList.remove(deletePlayer);
			return true;
		} else  {
			return false;
		}


	}

	List<Player> createPlayers() {
		List<Player> playerList = new ArrayList<Player>();

		Player player1 = createPlayer(1L, "Virat", "Kohli", "virat",42);
		Player player2 = createPlayer(2L, "Shikar", "Dhawan", "shikar",12);
		Player player3 = createPlayer(3L, "Shane", "warne", "dhoni",23);
		Player player4 = createPlayer(4L, "Muthaiah", "Muralidharan", "murali",121);
		Player player5 = createPlayer(5L, "Ashishs", "Nehra", "nehra",56);

		playerList.add(player1);
		playerList.add(player2);
		playerList.add(player3);
		playerList.add(player4);
		playerList.add(player5);

		return playerList;

	}

	Player createPlayer(Long id, String fname, String lname, String image,double ranking) {
		Player player = new Player();
		
		player.setPlayerId(id);
		player.setFirstName(fname);
		player.setLastName(lname);
		player.setImage(image);
		player.setRanking(ranking);
		return player;
	}
	
}