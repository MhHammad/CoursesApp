package com.app.service;

import com.app.pojo.User;

public interface IUserService {
	
	User authenticateUser(String email,String pwd);
	User getUserById(int id);
	String signUp(User u);

}
