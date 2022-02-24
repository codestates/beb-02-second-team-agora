import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';
import MyPage from './pages/MyPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/create' element={<Create />} />
				<Route path='/mypage' element={<MyPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;