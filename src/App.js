import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Navbar />
				<div className='App__Content'>
					<Routes>
						<Route
							path='/messages'
							element={<Messages state={props.state.MessagesPage} />}
						/>
						<Route
							path='/'
							element={
								<Profile
									profilePage={props.state.profilePage}
									addPost={props.addPost}
									updateNewPostText={props.updateNewPostText}
								/>
							}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
