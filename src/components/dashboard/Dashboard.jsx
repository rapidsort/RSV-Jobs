// eslint-disable-next-line
/* eslint-disable */
import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import SideBar from './SideBar';

class Dashboard extends React.Component{

    render(){
        const {authError, auth} = this.props;
        if(!auth.uid){
        return <Redirect to='/signin' />
        }



        return (
            <div className="container">
            <div className="row">
              <div className="col s12 m8">
              <h3>dfas</h3>
              
              </div>

              <div className="col s12 m4">
                  <SideBar />
              </div>
              </div>
              </div>
        );
    }
}

const mapStateToProps= (state)=>{
    return{
        auth: state.firebase.auth,
        authError: state.firebase.authError
    }
}
export default connect(mapStateToProps, null)(Dashboard);