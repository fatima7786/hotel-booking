import React from "react";
import Hero from '../components/hero'
import FeaturedDestination from "..components/FeaturedDestination";
import exclusiveOffers from "..components/Exclusiveoffers";
import Testimonial from "..components/Testimonial";
import NewsLetter from "..components/NewsLetter";
const Home = () =>{
    return(
        <>
            

            <Hero/>
            <FeaturedDestination />
            <exclusiveOffers />
            <Testimonial />
            <NewsLetter />

        </>
    )
}

export default Home