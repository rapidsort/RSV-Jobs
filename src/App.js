import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux'

import './App.scss';
import Navbar from './components/layout/Navbar';
import Banner from './components/layout/Banner';
import Footer from './components/layout/footer';


//Pages
import HomePage from './components/pages/HomePage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateJob from './components/jobs/CreateJob';
import JobsList from './components/jobs/JobsList';
import JobsDetails from './components/jobs/JobDetails';
import Dashboard from './components/dashboard/Dashboard';
import EditJob from './components/jobs/EditJob';
import JobsPostedByMe from './components/jobs/JobsPostedByMe';

class App extends Component {
  render() {

    const {auth} = this.props;
    
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />

      {!auth.uid? <Banner /> : null }

      <Switch>
      <Route path='/' component={HomePage} exact/>
      <Route path='/dashboard' component={Dashboard} exact/>
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/createjob' component={CreateJob} />
      <Route path='/jobs' component={JobsList} />
      <Route path='/job/:id' component={JobsDetails} />
      <Route path='/editjob/:id' component={EditJob} />
      <Route path='/postedbybe' component={JobsPostedByMe} />
      </Switch>

      <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps= (state)=>{
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps, null)(App);
