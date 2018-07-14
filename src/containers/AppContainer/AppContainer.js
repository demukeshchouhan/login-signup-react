import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./AppContainer.css";
import userActions from "../../actions/user";
const { login, logout } = userActions;

export class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    return <div className="app">{this.props.children}</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  login,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
