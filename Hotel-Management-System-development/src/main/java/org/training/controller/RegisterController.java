package org.training.controller;

import org.modal.CResult;
import org.springframework.beans.factory.annotation.Autowired;
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

@RestController
public class RegisterController {
	
	@Autowired
	private UserService userService;
	
	@PutMapping("/addNewUser")
	public CResult addUser(@RequestBody User user)
	{
		return userService.saveUser(user);
		
	}
	@PostMapping("/updateuser")
	public CResult updateUser(@RequestBody User user)
	{
		return userService.updateUser(user);
	}
	@GetMapping("/getAlluserdetails")
	public CResult getAllUserdetails()
	{
		return userService.getAllUserdetails();
	}
	@GetMapping("/getDetailsByEmail/{email}")
	public CResult getDetailsByEmail(@PathVariable String email) {
		return userService.getDetailsByEmail(email);
	}
	@GetMapping("/validate")
	public CResult validateLogin(@RequestParam String email,@RequestParam String password)
	{
		return userService.validate(email, password);
	}

}
