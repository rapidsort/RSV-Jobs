// eslint-disable-next-line
/* eslint-disable */
import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {createJob} from '../../store/actions/jobsActions';

import SideBar from '../dashboard/SideBar';

class CreateJob extends React.Component{

    state = {}

    componentDidMount(){
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }

    handleSubmit = (e) =>{
      e.preventDefault();
      // console.log(this.state);
      this.props.createJob(this.state);
      this.props.history.push('/');
    }
    handleChange = (e)=>{
      this.setState({
        [e.target.id]: e.target.value
      });
    }

    render(){
      const {auth} = this.props;
        if(!auth.uid){
        return <Redirect to='/signin' />
        }
        return(
    <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s12 m8">
              <div className="card">
                <div className="card-content white-text">
                  <span className="card-title teal-text center">
                    Post New Job
                  </span>
                  <div className="input-field">
                    <input id="jobTitle" type="text" className="validate" onChange={this.handleChange} />
                    <label htmlFor="jobTitle">Job Title</label>
                  </div>


                  <div className="input-field">
                  <textarea id="jobDescription" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    <label htmlFor="jobDescription">Job Description</label>
                  </div>

                    <div className="input-field">
                    <input id="numberOfJobs" type="number" className="validate" onChange={this.handleChange} />
                    <label htmlFor="numberOfJobs">Number Of Jobs</label>
                  </div>

                  <div className="input-field">
                    <input id="skils" type="text" className="validate" onChange={this.handleChange} />
                    <label htmlFor="skils">Skils</label>
                  </div>
                  <div className="input-field">
                    <input id="experience" type="text" className="validate" onChange={this.handleChange} />
                    <label htmlFor="experience">Experience</label>
                  </div>

                  <div className="input-field">
                    <input id="role" type="text" className="validate" onChange={this.handleChange} />
                    <label htmlFor="role">Role</label>
                  </div>


                  <div className="input-field">
                    <input id="workLocation" type="text" className="validate" onChange={this.handleChange} />
                    <label htmlFor="workLocation">Work Location</label>
                  </div>


                  <div className="input-field">
                  <textarea id="additionalCriteria" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    <label htmlFor="additionalCriteria">Additional Criteria</label>
                  </div>

                  <div className="input-field">
                    <input id="salary" type="text" className="validate" onChange={this.handleChange} />
                    <label htmlFor="salary">Salary</label>
                  </div>


                  <div className="input-field">
                    <select id='employmentType' onChange={this.handleChange}>
                    <option value="" disabled defaultValue>Employment Type</option>
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
    }
}
const mapStateToProps= (state)=>{
  return{
      auth: state.firebase.auth,
      authError: state.firebase.authError
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
    createJob: (job)=>dispatch(createJob(job))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);