import React from "react";
import { assets } from "../assets/assets";

const NewsLetter = () =>
{
    return(
       <div className="flex flex-col items-center max-w-5z1 lg:w-full
       rounded-2x1 px-4 py-12 md:py-16 max-2 lg:mx-auto my--30 bg-gray-900 text-white">
        <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-4x1 md:text-[40px]"> Stay Inspired</h1>
            <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-x1"> Join our
            newsletter and be the first to discover new updates, exclusiveOffers, and inspiration</p>

        </div>
        <div className="flex flex-col md:flex-row
        items-center justify-center gap-4 mt-6">
            <input type="text" className="bg-white/10px-4 py-2.5 border border-white/20 rounded
            outline-none max-w-66 w-full" 
            placeholder="Enter your mail"/>
            <button className="flex items-center justify-center gap-2
            group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95
            transition-all"> Subscribe</button>
            <img src={assets.arrowIcon} alt="arrow-icon"
            className="w-3.5 invert group-hover:translate-x-1 transition-all"/>
            <p className="text-gray-500 mt-6 text-sx text-center"> By subscribing,
                you agree to out privacy policy and consent to receive updates
            </p>
        </div>
       </div>
    )
}
export default NewsLetter