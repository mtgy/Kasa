import React, {useState} from "react";
import DataLogements from '@/data/logements.json'
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import Banner from "@partials/Banner";
import BannerImg from "@/assets/banner_home.jpg";
import Cards from "@partials/Cards";



const Home  = () => {
     return (
        <>
           <Header />
           <Banner
              text="Chez vous, partout et ailleurs"
              imageUrl={BannerImg}
          />  
          <Cards data={DataLogements}/>
          <Footer />
        </>
      )
}

export default Home;
