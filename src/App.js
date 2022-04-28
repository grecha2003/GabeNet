import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Navbar />
				<div className='App__Content'>
					<Routes>
						<Route
							path='/messages'
							element={<Messages />}
						/>
						<Route path='/profile' element={<Profile />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
