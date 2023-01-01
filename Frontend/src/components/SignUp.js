import React, { useState } from "react";
import { Input,Form, Container, Button } from "reactstrap";
import CourseService from './CourseService';
import swal from 'sweetalert';


const SignUp=()=>{

    const [user,setUser] = useState({})

    const LoginHandler=(e)=>{
        e.preventDefault();
        console.log(user);

        CourseService.signup(user).then((resp)=>{
            console.log(resp);
            swal(`${resp.data}`)

        },
        (err)=>{
            swal("Error occured")
        })
    }

    return(
        <div>
            <h2>User Registartion</h2>
            <Form onSubmit={LoginHandler}>
                <Input type="text" 
                onChange={(e)=>{
                    setUser({...user,email:e.target.value})
                }}
                />Email<br/>

                <Input type="password"
                onChange={(e)=>{
                    setUser({...user,password:e.target.value})
                }}
                />Password<br/>

                <Input type="text"
                onChange={(e)=>{
                    setUser({...user, name:e.target.value})
                }}
                />Name<br/>
                
                <Input type="phoneNo"
                onChange={(e)=>{
                    setUser({...user, phoneNo:e.target.value})
                }}
                />Phone No<br/>
                
                <Input type="text"
                onChange={(e)=>{
                    setUser({...user, city:e.target.value})
                }}
                />City<br/>

                <Container>
                    <Button type="submit" color="success">Submit</Button>
                    <Button type="reset" color="warning ml-3">Clear</Button>
                </Container>
            </Form>

        </div> 
    )
}

export default SignUp