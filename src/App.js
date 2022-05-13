import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MessagesContainer from './Components/Messages/MessagesContainer';
import UsersContainer from './Components/Users/UsersContainer';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Navbar />
				<div className='App__Content'>
					<Routes>
						<Route path='/messages' element={<MessagesContainer />} />
						<Route path='/' element={<Profile />} />
						<Route path='/users' element={<UsersContainer />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
