import React, { useEffect } from "react";

const AboutUs=()=>{

    useEffect(()=>{
        document.title="About us || MyApp"
    })
    return(
        <div>
            <h1>About Us</h1>
        </div>
    )

}

export default AboutUs