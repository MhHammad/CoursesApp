import React, { useEffect } from "react";
import {ListGroup} from 'reactstrap';
import {Link} from 'react-router-dom';

const Menus = () =>{

useEffect(()=>{
    document.title="Menu || MyApp"
})

    return(
        <div className="text-center">
            <ListGroup>
               
                <Link className="list-group-item list-group-item-action" to="/">Home</Link>
                <Link className="list-group-item list-group-item-action" to="/signup">SignUp</Link>
                <Link className="list-group-item list-group-item-action" to="/login">Login</Link>
                <Link className="list-group-item list-group-item-action" to="/add-course">Add Course</Link>                        
                <Link className="list-group-item list-group-item-action" to="/view-course">View Courses</Link>            
                <Link className="list-group-item list-group-item-action" to="/aboutus">About Us</Link>            
                <Link className="list-group-item list-group-item-action" to="/contactus">Contact Us</Link>            
            </ListGroup>   
        </div>
    )
}

export default Menus