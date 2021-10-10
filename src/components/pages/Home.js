import React from "react";
import pic from "../images/pic-HRH.png";

const Home = () => {
    return (
        <div className="bg-color">
            <img src={pic} className="hrh-pic"/>
            <h1 className="margin-name">Heriberto Rodriguez Hernandez</h1>
            <p>Coming from the Canary Islands, I was looking for a new place and opportunities and found myself 
            therefore in vibrant and dynamic Berlin. As I was ready for a change, I had to reinvent myself and 
            headed to the world of web development. With the fundamental knowledge I've gained in full stack 
            development in Berlin, I am not only capable to make digital projects work but also to improve 
            them with my hands-on mentality, diverse experience in different fields and eager for learning new things.</p>

        </div>
    )
}

export default Home;