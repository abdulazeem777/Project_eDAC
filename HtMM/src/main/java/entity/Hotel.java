package entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "hotels")
public class Hotel {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String hotel_name;
	private int rooms;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getHotel_name() {
		return hotel_name;
	}
	public void setHotel_name(String hotel_name) {
		this.hotel_name = hotel_name;
	}
	public int getRooms() {
		return rooms;
	}
	public void setRooms(int rooms) {
		this.rooms = rooms;
	}
	public Hotel(int id, String hotel_name, int rooms) {
		super();
		this.id = id;
		this.hotel_name = hotel_name;
		this.rooms = rooms;
	}
	public Hotel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
