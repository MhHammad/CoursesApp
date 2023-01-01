import axios from "axios";
import React, { useEffect, useState } from "react";
import Course from "./Course"
import baseurl from "../baseUrl/BaseUrl"

const AllCourses=()=>{



    const [courses,setCourses]= useState([])

    // to update course list after deleting a course in course component 
    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=> c.id !== id));
    }

    useEffect(()=>{
        document.title="All Courses || MyApp"
        axios.get(baseurl+"/course/all-courses")
        .then((response)=>{
            console.log(response.data);
            setCourses(response.data);

        },
        (error)=>{
            console.log(error);
        })

    },[])

    return(
        <div>
            <h1>All Courses</h1>
            {
                courses.length>0 ? courses.map((item)=>(
                    <Course key={item.id} course={item} update={updateCourse}/>
                )) : "No Courses"
            }
        </div>

    )

}

export default AllCourses