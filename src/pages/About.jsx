import React from 'react';
import Banner from "@partials/Banner";
import BannerImg from "@/assets/banner_about.jpg"

const About = () => {
    return (
        <div>
            <Banner  imageUrl={BannerImg}/>  
           <h1>a propos</h1> 
        </div>
    );
};

export default About;