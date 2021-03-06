// eslint-disable-next-line
/* eslint-disable */
import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

class SignedInLinks extends React.Component {
  render() {

    
    // console.log(this.props.profile);
    return (
      <>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
        {this.props.profile.userType =='jp' ?  
        <li>
          <NavLink to="/postedbybe">Posted by Me</NavLink>
        </li>
        : null }
        <li>
          <NavLink to="/createjob">New Job</NavLink>
        </li>
        <li>
          <a onClick={this.props.signOut}>Logout</a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink ">
            {this.props.profile.initials}
          </NavLink>
        </li>
      </>
    );
  }
}

const mapStateToProps= (state)=>{
  return{
    profile: state.firebase.profile
  }
}

const mapDispatchToState = (dispatch)=>{
  return{
    signOut: ()=>dispatch(signOut())
  }
}
export default connect(mapStateToProps, mapDispatchToState)(SignedInLinks);
