import React from "react";
import './style.css';

import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';

import { Redirect } from 'react-router-dom';

class SignIn extends React.Component {

  state = {}

  handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state);
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {

    const {authError, auth} = this.props;
    if(auth.uid){
      return <Redirect to='/dashboard' />
    }

    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content white-text">
                  <span className="card-title teal-text center">
                    Sign In
                  </span>
                  <div className="input-field">
                    <input id="email" type="email" className="validate" onChange={this.handleChange} />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input id="password" type="password" className="validate" onChange={this.handleChange} />
                    <label htmlFor="password">Password</label>
                  </div>

                {authError? <p className='red-text center'> {authError} </p> : null}

                </div>
                <div className="card-action">
                <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
