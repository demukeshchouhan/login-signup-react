import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Login.css";
import userActions from "../../actions/user";
const { login, logout } = userActions;

class Login extends Component {
  state = {};
  handleFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    console.log(this.state);
    this.props.login(this.state);
  }
  render() {
    console.log(this.props);
    return (
      <div className="form">
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          name="username"
          required
          onChange={e => this.handleFieldChange(e)}
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          name="password"
          required
          onChange={e => this.handleFieldChange(e)}
        />

        <button type="submit" onClick={e => this.handleSubmit(e)}>
          Login
        </button>
        <label htmlFor="remember">
          <input type="checkbox" id="remember" defaultChecked name="remember" />{" "}
          Remember me
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
