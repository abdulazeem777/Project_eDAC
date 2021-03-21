package Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Service.HotelService;
import entity.Hotel;
import entity.User;
import repository.HotelRepository;
import repository.UsersRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HotelController {

	@Autowired
	private HotelService hs;
	
	@Autowired
	private HotelRepository hr;
	
	@PutMapping("/adduser")
	public boolean addUser(@RequestBody User u)
	{
		return hs.adduser(u);
	}
	
	@GetMapping("/login/{email}/{password}")
	public ResponseEntity<String> login(@PathVariable String email, @PathVariable String password)
	{
		String uname = hs.login(email,password);
		return ResponseEntity.ok(uname);
	}
	
	@GetMapping("/getuser")
	public User getuser(@RequestParam("x") String email)
	{
		return hs.getusers(email);
	}
	
	@GetMapping("/getallhotels")
	public List<Hotel> gethotels()
	{
		
		return hr.findAll();
	}
	
	@GetMapping("/gethotelbyid/{id}")
	public ResponseEntity<Hotel> getHotel(@PathVariable int id)
	{
		Hotel h = hr.findById(id).orElseThrow(() -> new ResourceNotFoundException("Hotel not exist with id :" + id));
		return ResponseEntity.ok(h);
		
	}
	
	@PostMapping("/hotel")
	public Hotel addHotel(@RequestBody Hotel h)
	{
		return hr.save(h);
	}
	
	@PutMapping("/hotel/{id}")
	public ResponseEntity<Hotel> updateHotel(@PathVariable int id, @RequestBody Hotel hoteldetails)
	{
		Hotel hotel = hr.findById(id).orElseThrow(() -> new ResourceNotFoundException("Hotel not exist with id :" + id));
		hotel.setHotel_name(hoteldetails.getHotel_name());
		hotel.setRooms(hoteldetails.getRooms());
		Hotel updatedHotel = hr.save(hotel);
		return ResponseEntity.ok(updatedHotel);
	}
	
	@DeleteMapping("/hotel/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteHotel(@PathVariable int id){
		Hotel hotel = hr.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Hotel not exist with id :" + id));
		
		hr.delete(hotel);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
