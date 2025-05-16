import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import { useNavigate } from "react-router-dom";


const checkbox = ({label,selected=false,onchange=()=>
{}
})=>{
    return(
        <label className="flex-gap-3 items-center cursor-pointer-mt-2 text-sm">
            <input type="checkbox" checked={selected}onchange={(e)=>onchange(e.target.checked,label)}/>
            <span className='font-light select-none'> {label}</span>

        </label>
    )
}
const RadioButton = ({label,selected=false,onchange=()=>
    {}
    })=>{
        return(
            <label className="flex-gap-3 items-center cursor-pointer-mt-2 text-sm">
                <input type="radio" name="sortoption" checked={selected}onchange={()=>onchange(e.target.checked,label)}/>
                <span className='font-light select-none'> {label}</span>
    
            </label>
        )
    }

const AllRooms = () => {
    const navigate = useNavigate();
    const [openFilters,setOpenFilters] = useState(false)
    const roomTypes = [
        "Single Bed",
        "Double Bed",
        "luxury Bed",
        "Family Suite",

    ];
    const PriceRanges = [
        '0 to 500',
        '500 to 1000',
        '1000 to 2000',
        '2000 to 3000',
    ];
    const sortoptions = [
        "peice low to high",
        "price high to low",
        "Newest First",
    ];
    return(
        <div className='flex flex-col reverse lg:flex-row items-start justifying-between pt-28
        md:px-10 lg:px-24 x1:px-32'>
            <div>
                <div className='flex flex-col items-start text-left'>
                    <h1 className='font-playfair text-4xl md:text-[40px]'> Hotel Rooms</h1>
                    <p className='text-sm md:text-base text-gray-500/90 mt-2
                    max-w-174'> Take advantage of our limited-time offers
                        and special packages to enhance your stay and create
                        unforgettable memories
                    </p>
                </div>
                


                  {roomsDummyData.map((room)=>(
                    <div    key={room._id} className=' flex flex-col md:flex-row items-start py-10
                    gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
                        <img onClick={()=>{navigate(`/rooms${room._id}`);scrollTo(0,0)}}
                    src={rooms.images[0]} alt="hotel-img" title="View Room Details"
                    className='max-h-65 md:w-1/2 rounded-x1 shadow-lg object-cover
                    cursor-pointer'/>
                    <div className='md:w-1/2 flex flex-col gap-2'>
                    <p className='text-gray-500'> {room.hotel.city}</p>
                    <p  onClick={()=>{navigate(`/rooms${rooms._id}`);scrollTo(0,0)}}
                        className='text-gray-800 text-3x1
                        font-playfair cursor-pointer'> {room.hotel.name}</p>
                        <div className='flex items-center'>
                        <StarRating />
                        <p className='ml-2'> 200+reviews </p>



                             </div>
                             <div className='items-center gap-1 text-gray-5000
                        mt-2 text-sm'>
                            
                             <img src={assets.locationIcon} alt="location-icon" />
                            <span> {room.hotel.address}</span>
                        
                                 </div>
                                 <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'> 

                                     {/*Room Amenities*/}
                                    
                                     </div>
                                     {room.amenities.map((item,index)=>(
                                        <div key={index} className='flex items-center gap-2 px-3
                                        py-2 rounded-lg bg-[#F5F5HF]/70'>
                                            <img src={facilityIcons[item]} alt={item}
                                className='w-5 h-5'/>
                                <p className='text-sx'> {item}</p>


                                             </div>
  ))}
                  </div>
                  {/*Room Price per night*/}
                  <p className='text-xl font-medium text-gray-700'> pkr{room.pricePerNight} /night </p>


            </div>
               ))}
                </div>
                  {/*Filters*/}
             <div>
             <p className='text-base font-medium text-gray-800'> FILTERS</p>
            <div className='bg-white w-80 border border-gray-300 text-gray-600
           max-lg:mb-8 min-lg:mt-16'>
            </div>
            <div className={`flex items-center justify-between px-5 py-2.5
            min-lg:border-b border-gray-300 ${openFilters && "border-b"}`}>
                </div>
                <div className='text-xs cursor-pointer'></div>
            <span onClick={()=>setOpenFilters(!openFilters)} className='lg:hidden'>{openFilters ?'HIDE': 'SHOW'}  </span>
                <span className='hidden lg:block'> CLEAR </span>
                </div>
                <div className={`${openFilters ? 'h-auto': "h-0 lg:h-auto"} overflow-hidden transition-all
           duration-700 
           }`}>

           </div>
           <div  className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'> popular filters </p>
                {roomTypes.map((room,index)=>
                (
                    <checkbox key = {index} label={room}/>
                ))}
                </div>
                <div  className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'> Price Range </p>
                {PriceRanges.map((Range,index)=>(
                    <checkbox key = {index} label={`$ ${Range}`}/>
                ))}
                </div>
                <div className='px-5 pt-5 pb-7'>
                <p className='font-medium text-gray-800 pb-2'> Sort By </p>
                {sortoptions.map((option, index)=>(
                <RadioButton key={index} label={option} />

               ))}
           </div>




             </div>
             
               
                  
            )
        }


export default AllRooms