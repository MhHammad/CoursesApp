import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Input} from "reactstrap";
import baseurl from "../baseUrl/BaseUrl";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const AddCourse=()=>{

    useEffect(()=>{
        document.title="Add Course || MyApp"

    })

    const [course, setCourse] = useState({});
    const history = useHistory();

    //Form Handler
    const FormHandler=(e)=>{
        console.log(course);
        axios.post(`${baseurl}/course/add-course`,course).then(
            (response)=>{
                console.log(response);
                setCourse({id:" ",name:" ",description:" "});
                console.log("Success");
                swal("Course added successfully",`Course Id: ${response.data.id}`);
                history.push("/view-course")
                
            },
            (error)=>{
                console.log(error);
            }
        )
        e.preventDefault();
    }



    return(
        <div>
            <h1>Fill Course Details</h1>
            <Form onSubmit={FormHandler}>
                    <Input type="text" 
                    onChange={(e)=>{
                        setCourse({...course,name:e.target.value})
                    }}/>Name<br/>

                    <Input type="text"
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value})
                    }}/>Description<br/>
                    <Container>
                        <Button type="submit" color="success">Add Course</Button>
                        <Button type="reset" color="warning ml-2">Clear</Button><br/>
                    </Container>
            </Form>
        </div>
    )

}

export default AddCourse