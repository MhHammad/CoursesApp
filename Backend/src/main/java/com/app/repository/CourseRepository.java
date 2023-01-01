package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Course;

public interface CourseRepository extends JpaRepository<Course, Integer> {
	
	public List<Course> findAll();
	
	public Optional<Course> findById(Integer id);

}
