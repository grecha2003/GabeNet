import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MessagesContainer from './Components/Messages/MessagesContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Navbar />
				<div className='App__Content'>
					<Routes>
						<Route path='/messages' element={<MessagesContainer />} />
						<Route path='/profile' element={<ProfileContainer />} />
						<Route path='/profile/:userId' element={<ProfileContainer />} />
						<Route path='/users' element={<UsersContainer />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
