package com.test.dashboardback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.dashboardback.model.User;
import com.test.dashboardback.repository.UserMongoRepository;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired
	UserMongoRepository sampleRepo;

	@GetMapping("/bar")
	Iterable<User> all() {
		sampleRepo.save(new User("William", 23));

		return sampleRepo.findAll();
	}
	
	
}
