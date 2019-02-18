import React from "react";
import { NavLink } from "react-router-dom";
class SignedOutLinks extends React.Component {
  render() {
    return (
      <>
       <li><NavLink to='/signup'>SignUp</NavLink></li>
          <li><NavLink to='/signin'>LogIn</NavLink></li>
      </>
    );
  }
}

export default SignedOutLinks;
