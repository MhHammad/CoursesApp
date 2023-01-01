package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojo.User;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public User authenticateUser(String username, String pwd) {
		
		return userRepo.findByEmailAndPassword(username, pwd).orElseThrow(()->new RuntimeException("User does not exist"));
	}

	@Override
	public User getUserById(int id) {
		
		return userRepo.findById(id).orElseThrow(()->new RuntimeException("User does not exist"));
	}

	@Override
	public String signUp(User u) {
		String mg = "User aready exists";
		String newmail = u.getEmail();

		if(userRepo.findByEmail(newmail)!=null)
		return mg;
		
		userRepo.save(u);
		mg="User successfully registered";
		
			return mg;
	}

}
