import React from "react";
import Carousel from "../../components/Carousel";
import AudienceBubbles from "./AudienceBubbles";
import OurStory from "./OurStory";
import SeeLatest from "./SeeLatest";
import Bestsellers from "./Bestsellers";

function Body(){
    return (
        <div>
            <Carousel />
            <AudienceBubbles />
            <OurStory />
            <SeeLatest />
            <Bestsellers />
        </div>
    );
}

export default Body;