import React, { useState } from "react";
import baseurl from "../baseUrl/BaseUrl";
import { Input,Button,Form } from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const EditCourse=(props)=>{
    //store current course in session storage and then access it here
    const [courseToEdit,setcourseToEdit] = useState(JSON.parse(sessionStorage.getItem("course")));
    const history = useHistory();

    const updateCourse=(e)=>{

            axios.put(`${baseurl}/course/edit-course`,courseToEdit).then(
                (response)=>{
                    console.log(response.data);
                    console.log("Success");
                    // history.push("/view-course");
                },
                (error)=>{
                    console.log(error);
                }
            )
    
            e.preventDefault();        
        }
    return(
        <div>
            <h1>Edit course</h1>
            
                    <Form onSubmit={updateCourse}>
                        <Input type="text" value={courseToEdit.name}
                        onChange={(e)=>{
                            setcourseToEdit({...courseToEdit,name:e.target.value})
                        }}
                        />

                        <Input type="text" value={courseToEdit.description}
                        onChange={ (e)=>{
                            setcourseToEdit({...courseToEdit,description:e.target.value})
                        }}
                        />
                        <Button color="warning" type="submit">Update</Button>

                    </Form>
            
        </div>
    )
}

export default EditCourse;