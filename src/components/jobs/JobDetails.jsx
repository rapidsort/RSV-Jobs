import React from "react";
import SideBar from "../dashboard/SideBar";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class JobsDetails extends React.Component {
  render() {
    const { job, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }

    if (job) {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                  {/* <img className="activator" src="images/office.jpg" /> */}
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    <Link to="/job/jobdetails" className="teal-text">
                      {job.jobTitle}
                    </Link>
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <div className="jobDetails">
                  <p><strong className="teal-text">Job Description:</strong></p>
                    {job.jobDescription}
                    <p>
                      <strong className="teal-text">Experience: </strong>
                      {job.experience} |
                      <strong className="teal-text">Number Of Jobs: </strong>
                      {job.numberOfJobs} |
                      <strong className="teal-text">Skils:</strong> {job.skils}
                    </p>
                  </div>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Additional Criteria
                    <i className="material-icons right">close</i>
                  </span>
                  <p>{job.additionalCriteria}</p>
                </div>

                <div className="card-action">
                  <Link className="btn pink lighten-1 z-depth-0" to="/">
                    Apply
                  </Link>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <SideBar />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12 m8">Loading...</div>
            <div className="col s12 m4">
              <SideBar />
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const jobs = state.firestore.data.jobs;
  const job = jobs ? jobs[id] : null;
  return {
    auth: state.firebase.auth,
    authError: state.firebase.authError,
    job: job
  };
};
export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect([{ collection: "jobs" }])
)(JobsDetails);
