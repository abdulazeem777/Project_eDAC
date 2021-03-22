package org.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.training.entity.Hotel;
import org.training.service.HotelService;
import org.training.service.UserService;

@RestController
public class EditHotelController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private HotelService hotelService;
	
	@GetMapping("/editHotel")
	public ModelAndView editHotelPage(ModelAndView modelAndView, Hotel hotel) {
		modelAndView.addObject("hotel", hotel);
		modelAndView.setViewName("editHotel");
		return modelAndView;
	}
	

}
