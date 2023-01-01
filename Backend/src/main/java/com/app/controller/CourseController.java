package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.Course;
import com.app.service.ICourseService;

@RestController
@RequestMapping("/course")
@CrossOrigin
public class CourseController {

	@Autowired
	private ICourseService courseService;
	
	public CourseController()
	{
		System.out.println("In class"+ getClass());
	}
	
//	View all courses
	@GetMapping("/all-courses")
	public List<Course> getAllCourses()
	{
		System.out.println("In getAllCourses ");
		return courseService.getAllCourses();
	}
	
//	View course by ID
	@GetMapping("/view-course/{id}")
	public Course getCourseById(@PathVariable int id)
	{
		System.out.println("In getCourseById");
		return courseService.getCourseById(id);
	}
	
//	Add a course
	@PostMapping("/add-course")
	public Course addCourse(@RequestBody Course c)
	{
		System.out.println("In addCourse");
		return courseService.addCourse(c);
	}

//	Update a course
	@PutMapping("/edit-course")
	public Course editCourse(@RequestBody Course c)
	{
		System.out.println("In editCourse");
		return courseService.updateCourse(c);
		
	}
	
//	delete a course
	@DeleteMapping("/delete-course/{id}")
	public String delCourseById(@PathVariable int id)
	{
		System.out.println("In delete");
		return courseService.deleteById(id);
	}
	
}
