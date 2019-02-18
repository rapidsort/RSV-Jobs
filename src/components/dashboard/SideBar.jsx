import React from 'react';
import Notifications from './Notification';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
class SideBar extends React.Component{
    render(){
      const {notifications} = this.props;

        return(
           <Notifications notifications={notifications} />
        );
    }
}


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notifications', limit: 5, orderBy:['time', "desc"] }
  ])
)(SideBar);