import React, { Suspense } from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './Redux/appReducer';
import Spinner from './Components/common/Spinner/Spinner';
import store from './Redux/reduxStore';
import './bootstrap/dist/css/bootstrap.css';

const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const MessagesContainer = React.lazy(() => import('./Components/Messages/MessagesContainer'));

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
								<Route
									path="/messages"
									element={
										<Suspense fallback={<Spinner />}>
											<MessagesContainer />
										</Suspense>
									}
								/>
								<Route
									path="/profile"
									element={
										<Suspense fallback={<Spinner />}>
											<ProfileContainer />
										</Suspense>
									}
								/>
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
