package com.test.dashboardback.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.test.dashboardback.model.User;

public interface UserMongoRepository extends MongoRepository<User, String> {
    User findByName(String name);
}
