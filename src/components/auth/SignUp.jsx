// eslint-disable-next-line
/* eslint-disable */
import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { connect } from 'react-redux';
import {signUp} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

import './style.css';

class SignUp extends React.Component {

  state = {}

    componentDidMount(){
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
      }

      handleSubmit = (e)=>{
        e.preventDefault();
        //  console.log(this.state);
        this.props.signUp(this.state);

      }
      handleChange = (e)=>{
       this.setState({
        [e.target.id]: e.target.value
       });
      }
  render() {

    const {auth} = this.props;
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
                    Register
                  </span>

                  <div className="input-field">
                    <input id="firstName" type="text" className="validate" onChange={this.handleChange} />
                    <label htmlFor="firstName">First Name</label>
                  </div>

                  <div className="input-field">
                    <input id="lastName" type="text" className="validate" onChange={this.handleChange} />
                    <label htmlFor="lastName">Last Name</label>
                  </div>

                  <div className="input-field">
                    <input id="phone" type="text" className="validate" onChange={this.handleChange} />
                    <label htmlFor="phone">Phone</label>
                  </div>


                  <div className="input-field">
                    <input id="email" type="email" className="validate" onChange={this.handleChange} />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input id="password" type="password" className="validate" onChange={this.handleChange} />
                    <label htmlFor="password">Password</label>
                  </div>

                <div className="input-field">
                    <select id='userType' onChange={this.handleChange}>
                    <option value="" disabled defaultValue>Choose Account Type</option>
                    <option value="jp">Job Provider</option>
                    <option value="js">Job Seeker</option>
                    </select>
                    {/* <label htmlFor="userType">User Type</label> */}
                </div>


                </div>
                <div className="card-action">
                <button className="btn pink lighten-1 z-depth-0">Register</button>
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps= (dispatch)=>{
  return {
    signUp : (newUser)=> dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
