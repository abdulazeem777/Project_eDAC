package org.training.controller;

import org.modal.CustomResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import org.training.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PutMapping("/addNewUser")
	public CustomResponseEntity addUser(@RequestBody User user)
	{
		return userService.saveUser(user);
		
	}
	@PostMapping("/updateuser")
	public CustomResponseEntity updateUser(@RequestBody User user)
	{
		return userService.updateUser(user);
	}
	@GetMapping("/getAlluserdetails")
	public CustomResponseEntity getAllUserdetails()
	{
		return userService.getAllUserdetails();
	}
	@GetMapping("/getDetailsByEmail/{email}")
	public CustomResponseEntity getDetailsByEmail(@PathVariable String email) {
		return userService.getDetailsByEmail(email);
	}
	@GetMapping("/validate/{email}/{password}")
	public CustomResponseEntity validateLogin(@PathVariable String email,@PathVariable String password)
	{
		return userService.validate(email, password);
	}

}
