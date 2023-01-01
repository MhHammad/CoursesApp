package com.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	public HomeController()
	{
		System.out.println("in class : "+ getClass());
	}
	
	@RequestMapping("/")
	public String homePage()
	{
		System.out.println("In home page");
		return "Home Page";
	}
}
