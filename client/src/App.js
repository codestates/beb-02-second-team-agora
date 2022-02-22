import React, {  } from 'react';
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Create from './pages/Create';
import MyPage from './pages/MyPage';


import './App.css';

function App() {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route path='/create' element={<Create />} />
			<Route path='/mypage' element={<MyPage />} />
		</Routes>
	);
}

export default App;