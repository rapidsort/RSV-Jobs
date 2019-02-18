// eslint-disable-next-line
/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {deleteJob} from '../../store/actions/jobsActions';

class JobsSummary extends React.Component {
  render() {
    const {job, authError, auth} = this.props;
    // console.log(job);
    
        if(!auth.uid){
        return <Redirect to='/signin' />
        }
    return (




      <div className="card sticky-action">
    <div className="card-image waves-effect waves-block waves-light">
      {/* <img className="activator" src="images/office.jpg" /> */}
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4"><Link to="/job/jobdetails" className='teal-text'>{job.jobTitle}</Link><i className="material-icons right">more_vert</i></span>
      <div className='jobDetails'>
      {job.jobDescription}
      <p><strong className='teal-text'>Experience:</strong> {job.experience} | <strong className='teal-text'>Number Of Jobs:</strong> {job.numberOfJobs} | <strong className='teal-text'>Skils:</strong> {job.skils}</p>
      </div>
      
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Additional Criteria<i className="material-icons right">close</i></span>
      <p>{job.additionalCriteria}</p>
    </div>

    <div className="card-action">
    <Link className="btn pink lighten-1 z-depth-0"  to={'/job/' + job.id}>More Details</Link>


    <Link className="btn pink lighten-1 z-depth-0"  to={'/editjob/' + job.id}>Edit Job</Link>
    <a className="btn pink lighten-1 z-depth-0"  onClick={ ()=>this.props.deleteJob(job.id) }>Delete Job</a>



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

const mapDispatchToProps= (dispatch)=>{
  return{
    deleteJob: (job)=>dispatch(deleteJob(job))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobsSummary);
