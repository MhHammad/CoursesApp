package com.app.service;

import java.util.List;

import com.app.pojo.Course;

public interface ICourseService {

	List<Course> getAllCourses();
	Course getCourseById(int id);
	Course addCourse(Course c);
	Course updateCourse(Course c);
	String deleteById(int id);
}
