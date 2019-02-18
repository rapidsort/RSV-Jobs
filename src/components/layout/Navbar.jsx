// eslint-disable-next-line
/* eslint-disable */
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import M from "materialize-css/dist/js/materialize.min.js";


import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
class Navbar extends Component {

  componentDidMount(){
    var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
  }
  render() {
    

    const {auth} = this.props;

    return (
      <>
        <nav className="teal lighten-1">
          <div className="container">
            <div className="nav-wrapper">
            <Link to='/' className='brand-logo'>RSV Jobs</Link>

              <a href='' data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons black-text">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
              {auth.uid? <SignedInLinks /> : <SignedOutLinks />}
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          {auth.uid? <SignedInLinks /> : <SignedOutLinks />}
        </ul>
      </>
    );
  }
}
const mapStateToProps = (state)=>{
  console.log(state);
  return {
    auth : state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)