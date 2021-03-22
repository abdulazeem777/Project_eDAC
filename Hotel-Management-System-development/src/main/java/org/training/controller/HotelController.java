package org.training.controller;

import java.util.List;

import org.modal.CResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.training.entity.Hotel;
import org.training.entity.User;
import org.training.service.HotelService;
import org.training.service.UserService;

@RestController
public class HotelController {

	@Autowired
	private HotelService hotelService;
	

	@PutMapping("/addNewHotel")
	public CResult addNewHotel(@RequestBody Hotel hotel) {
		return hotelService.saveHotel(hotel);
	}
	@PostMapping("/updateHotel")
	public CResult updateHotel(@RequestBody Hotel hotel)
	{
		return hotelService.updateHotel(hotel);
	}
	@GetMapping("/getAllHoteldetails")
	public CResult getAllHoteldetails()
	{
		return hotelService.getAllHoteldetails();
	}
	@GetMapping("/getDetailsByHotelname/{hotelName}")
	public CResult getDetailsByHotelname(@PathVariable String hotelName) {
		return hotelService.getDetailsByHotelname(hotelName);
	}
	
}
