package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	
	@Autowired
	private IUserService userService;
	
	public UserController()
	{
		System.out.println("In ctor "+ getClass());
	}
	
//	User signUp
	@PostMapping("/signup")
	public String userSignup(@RequestBody User u)
	{
		System.out.println("In userSignup "+u.toString());
		return userService.signUp(u);
	}
	
	
//	User login
	@GetMapping("/login/{email}/{pwd}")
	public User userLogin(@PathVariable String email,@PathVariable String pwd)
	{
		System.out.println("In userLogin");
		return userService.authenticateUser(email,pwd);
	}
	
	

}
