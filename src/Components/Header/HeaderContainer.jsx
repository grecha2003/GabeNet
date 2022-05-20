import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserData, getAuthTC } from '../../Redux/authReducer';

class HeaderContainer extends Component {
	componentDidMount() {
		this.props.getAuthTC()
	}

	render() {
		return (
			<Header {...this.props} />
		);
	};
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

export default connect(mapStateToProps, { setUserData, getAuthTC })(HeaderContainer);
