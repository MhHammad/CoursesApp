import React, { useState } from "react";
import { Button, Input, Form } from "reactstrap";
import CourseService from "./CourseService";
import swal from 'sweetalert';

const Login=()=>{

    const [user,setUser] = useState({})

    const LoginHandler=(e)=>{
        console.log(user)
        e.preventDefault();
        CourseService.login(user).then(
            (response)=>{
                console.log(response)
                sessionStorage.setItem("user",JSON.stringify(response.data))
                swal("Login Successful");
            },
            (err)=>{
                swal("Login Failed");
            }
        )
    }
    return(
        <div>
            <h2>Login Form</h2>
            <Form onSubmit={LoginHandler}>
                <Input type="text" placeholder="Username"
                onChange={(e)=>{
                    setUser({...user,email:e.target.value})
                }}
                >UserName</Input><br/>

                <Input type="password" placeholder="Password"
                onChange={(e)=>{
                    setUser({...user,password:e.target.value})
                }}
                >Password</Input><br/>
                <Button type="submit" color="success">Login</Button>
                <Button type="reset" color="warning ml-2">Clear</Button>
            </Form> 
        </div>
    )
}

export default Login