package org.training.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.training.entity.User;
import org.training.repository.UserRepository;
import org.training.service.UserService;

@RestController
public class MainController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/login")
	public ModelAndView loginPage() {
		
		return new ModelAndView("login");
	}

	/*@Autowired
	private HttpSession session;
	@Autowired
	private HttpServletResponse response;*/
	
	//logging in customer
	@GetMapping("/logout")
	public ModelAndView logoutPage( ) {
		
		return new ModelAndView("redirect:/login");
	}

}	
