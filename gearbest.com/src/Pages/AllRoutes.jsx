import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppOnly from './AppOnly';
import Cart from './Cart';
import Home from './Home';
import Login from './Login';
import NewArrivals from './NewArrivals';
import Signup from './Signup';
import SuperDeals from './SuperDeals';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/newarrivals' element={<NewArrivals/>}></Route>
            <Route path='/superdeals' element={<SuperDeals/>}></Route>
            <Route path='/apponly' element={<AppOnly/>}></Route>
            {/* <Route path='/cart' element={<Cart/>}></Route> */}
        </Routes>
    );
}

export default AllRoutes;
