import axios from "axios";
// import React, { useState } from "react";
import { Button, Card, CardBody} from "reactstrap";
import baseurl from "../baseUrl/BaseUrl";
import { useHistory } from "react-router-dom";

const Course = ({course,update}) =>{

    // const [courseToEdit,setcourseToEdit] = useState("")

    const history = useHistory();
    const delCourse=(id)=>{
        console.log(id)

        axios.delete(`${baseurl}/course/delete-course/${id}`).then(
            (response)=>{
                console.log(response);
                update(id);
            },
            (error)=>{
                console.log(error)
            }
        )
    }

    const updateCourseForm=()=>{
        // setcourseToEdit(course);
        sessionStorage.setItem("course",JSON.stringify(course));
        history.push("/edit-course")

    }

    return(
        <div>
            <Card>
                <CardBody>
                <h3>{course.name}</h3>
                <h4>{course.description}</h4>
                <Button color="warning"
                onClick={()=>{
                    updateCourseForm(course);
                }} >Update</Button>

                <Button color="danger ml-2"
                onClick={()=>{
                    delCourse(course.id);
                }} >Delete</Button>
                </CardBody>
            </Card>
         

                
        </div>
    )
}

export default Course