import React from 'react';
import { assets } from './assets/assets';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import AllRooms from './components/pages/AllRooms';
import RoomDetail from './components/pages/RoomDetails';
import MyBookings from './components/pages/MyBooking';
import HotelReg from './components/HotelReg';
import layout from './components/pages/HotelOwner/Layout';
import DashBoard from './components/pages/HotelOwner/DashBoard';
import AddRoom from './components/pages/HotelOwner/AddRoom';
import ListRoom from './components/pages/HotelOwner/ListRoom';

const App = () => {
  const isOwnerpath = useLocation.pathname.includes("owner");
  return(
    <div>
{ !isOwnerpath && <Navbar />}
{ false && <HotelReg />}
<div className='min-h-[70vh]'>
  <Routes>
    <Route path = '/' element ={<Home />} />
    <Route path = '/rooms' element ={<AllRooms />} />
    <Route path = '/rooms/:id' element ={<RoomDetails />} />
    <Route path = '/my-bookings' element ={<MyBookings />} />
    <Route path='/Owner' element={<layout/>}>
    <Route index element ={<DashBoard/>}/>
    <Route path='add-room' element ={<AddRoom/>}/>
    <Route path='list-room' element ={<ListRoom/>}/>

    </Route>
  </Routes>

</div>
<Footer />

    </div>
  )
}
export default App
