package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojo.Course;
import com.app.repository.CourseRepository;
@Service
@Transactional
public class CourseServiceImpl implements ICourseService {

	@Autowired
	private CourseRepository courseRepo;
	
	@Override
	public List<Course> getAllCourses() {
		
		return courseRepo.findAll();
	}

	@Override
	public Course getCourseById(int id) {		
		return courseRepo.findById(id).orElseThrow(()->new RuntimeException("Course does not exist"));
	}

	@Override
	public Course addCourse(Course c) {
		
		return courseRepo.save(c);
	}

	@Override
	public Course updateCourse(Course c) {
		
		return courseRepo.save(c);
	}

	@Override
	public String deleteById(int id) {
		String mg="Course with id "+id+ " does not exist!!!";
		if(courseRepo.existsById(id))
		{
			courseRepo.deleteById(id);
			mg ="Course with id "+id+ " deleted successfully!!!";
		}
		return mg;
	}
	

}
