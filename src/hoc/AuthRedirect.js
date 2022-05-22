import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const AuthRedirect = (Comp) => {
  class NavigateComponent extends Component {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to={"/login"} />;
      }
      return <Comp {...this.props} />;
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    NavigateComponent
  );
  return ConnectedAuthRedirectComponent;
};
