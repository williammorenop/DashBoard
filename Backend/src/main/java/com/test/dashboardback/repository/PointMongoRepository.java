package com.test.dashboardback.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.test.dashboardback.model.Point;

public interface PointMongoRepository extends MongoRepository<Point, Integer>{

}
