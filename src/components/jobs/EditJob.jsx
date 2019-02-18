// eslint-disable-next-line
/* eslint-disable */
import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

import {editJob} from '../../store/actions/jobsActions';
import SideBar from '../dashboard/SideBar';

class EditJob extends React.Component{

    // state = {}

    constructor(props){
        super(props);
        if(props.job){
            this.state= {
                ...props.job
            }

        }
    }
    componentDidMount=()=>{
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
        M.updateTextFields();
        this.setState({id: this.props.match.params.id});

    }

    componentDidUpdate=()=>{
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
        M.updateTextFields();
        // console.log(this.props.job);
    }


    componentWillReceiveProps = (nextProps)=>{
        // console.log(nextProps.job);
        this.setState({...nextProps.job},()=>{
            // console.log(this.state);
        });
    }
    

    
    handleSubmit = (e) =>{
      e.preventDefault();
      
    //   console.log(this.state);
      this.props.editJob(this.state);
      this.props.history.push('/');
    }
    handleChange = (e)=>{
      this.setState({
        [e.target.id]: e.target.value
      });
    }

    render(){
      const {authError, auth, job} = this.props;
        if(!auth.uid){
        return <Redirect to='/signin' />
        }

        
        

        if(job){
            
            return(
                <div className="container">
                    <form className="form" onSubmit={this.handleSubmit}>
            
                      <div className="row">
                        <div className="col s12 m8">
                          <div className="card">
                            <div className="card-content white-text">
                              <span className="card-title teal-text center">
                                Edit Job
                              </span>
                              <div className="input-field">
                                <input id="jobTitle" type="text" className="validate" onChange={this.handleChange} defaultValue={job.jobTitle} />
                                <label htmlFor="jobTitle">Job Title</label>
                              </div>
            
            
                              <div className="input-field">
                              <textarea id="jobDescription" className="materialize-textarea" onChange={this.handleChange} defaultValue={job.jobDescription}></textarea>
                                <label htmlFor="jobDescription">Job Description</label>
                              </div>
            
                                <div className="input-field">
                                <input id="numberOfJobs" type="number" className="validate" onChange={this.handleChange} defaultValue={job.numberOfJobs} />
                                <label htmlFor="numberOfJobs">Number Of Jobs</label>
                              </div>
            
                              <div className="input-field">
                                <input id="skils" type="text" className="validate" onChange={this.handleChange}  defaultValue={job.skils} />
                                <label htmlFor="skils">Skils</label>
                              </div>
                              <div className="input-field">
                                <input id="experience" type="text" className="validate" onChange={this.handleChange} defaultValue={job.experience} />
                                <label htmlFor="experience">Experience</label>
                              </div>
            
                              <div className="input-field">
                                <input id="role" type="text" className="validate" onChange={this.handleChange} defaultValue={job.role} />
                                <label htmlFor="role">Role</label>
                              </div>
            
            
                              <div className="input-field">
                                <input id="workLocation" type="text" className="validate" onChange={this.handleChange} defaultValue={job.workLocation} />
                                <label htmlFor="workLocation">Work Location</label>
                              </div>
            
            
                              <div className="input-field">
                              <textarea id="additionalCriteria" className="materialize-textarea" onChange={this.handleChange} defaultValue={job.additionalCriteria}></textarea>
                                <label htmlFor="additionalCriteria">Additional Criteria</label>
                              </div>
            
                              <div className="input-field">
                                <input id="salary" type="text" className="validate" onChange={this.handleChange} defaultValue={job.salary} />
                                <label htmlFor="salary">Salary</label>
                              </div>
            
            
                              <div className="input-field">
                                <select id='employmentType' onChange={this.handleChange} defaultValue={job.employmentType}>
                                <option value="">Employment Type</option>
                                <option value="Permanent">Permanent</option>
                                <option value="Contract">Contract</option>
                                </select>
                                {/* <label htmlFor="userType">User Type</label> */}
                            </div>
            
            
            
                            </div>
                            <div className="card-action">
                            <button className="btn pink lighten-1 z-depth-0">Post</button>
                            </div>
                          </div>
                        </div>
                     
                        
                        <div className="col s12 m4">
                        <SideBar />
                        </div>
                      </div>
                    </form>
                  </div>
                    );


        }else{
            

            return(
                <div className="container">
                    <form className="form" onSubmit={this.handleSubmit}>
            
                      <div className="row">
                        <div className="col s12 m8">
                          <div className="card">
                            <div className="card-content white-text">
                              <span className="card-title teal-text center">
                                Loading
                              </span>
                              </div>
                          </div>
                        </div>
                     
                        
                        <div className="col s12 m4">
                        <SideBar />
                        </div>
                      </div>
                    </form>
                  </div>
                    );


        }

        
    }
}
const mapStateToProps= (state, ownProps)=>{
    const id = ownProps.match.params.id;
  const jobs = state.firestore.data.jobs;
  const job = jobs ? jobs[id] : null;

  return{
      job: job,
      auth: state.firebase.auth,
      authError: state.firebase.authError
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
    editJob: (job)=>dispatch(editJob(job))
  }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'jobs'}
    ])
)(EditJob);