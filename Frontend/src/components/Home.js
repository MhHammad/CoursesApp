import React, { useEffect } from "react";
import axios from 'axios'; 
import baseurl from "../baseUrl/BaseUrl";
import {Jumbotron} from "reactstrap";

const Home=()=>
{

    useEffect(()=>{

        document.title="Home || MyApp"
        axios.get(baseurl+"/course/all-courses")
    .then((response)=>{
        console.log(response.data)
    },
    (error)=>{
    console.log(error)
    }    
    );
    },[])



    return(
        <div className="text-center">
            <Jumbotron className="text-center" style={{ background: "Lightblue" }}>
            <h1>Jamia Millia Islamia</h1>
            </Jumbotron>
            
        </div>
    )

}

export default Home