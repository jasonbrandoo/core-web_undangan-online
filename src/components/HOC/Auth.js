import React, { Component } from "react";
import { verify } from "../../services/api";
import Router from "next/router";
import BounceLoader from "react-spinners/BounceLoader";

export default (WrappedComponent) => {
  class AuthComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    checkAuth() {
      verify()
        .then((res) => {
          console.log("success");
          this.setState({ isLoading: false });
        })
        .catch((error) => {
          Router.push("/");
        });
    }

    componentDidMount() {
      this.checkAuth();
    }

    render() {
      return (
        <>
          {this.state.isLoading ? (
            <div className="loading-page">
              <BounceLoader size={150} color={"#123abc"} loading={this.state.isLoading} />
            </div>
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </>
      );
    }
  }

  return AuthComponent;
};
