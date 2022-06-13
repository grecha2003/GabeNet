import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MessagesContainer from './Components/Messages/MessagesContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './Redux/appReducer';
import Spinner from './Components/common/Spinner/Spinner';
import store from './Redux/reduxStore';
import './bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Spinner />;
		}

		return (
			<>
				<BrowserRouter>
					<div className="App">
						<HeaderContainer path="/login" />
						<Navbar />
						<div className="App__Content">
							<Routes>
								<Route path="/messages" element={<MessagesContainer />} />
								<Route path="/profile" element={<ProfileContainer />} />
								<Route path="/profile/:userId" element={<ProfileContainer />} />
								<Route path="/users" element={<UsersContainer />} />
								<Route path="/login" element={<Login />} />
							</Routes>
						</div>
					</div>
				</BrowserRouter>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

let AppRenderContainer = () => {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
};

export default AppRenderContainer;
