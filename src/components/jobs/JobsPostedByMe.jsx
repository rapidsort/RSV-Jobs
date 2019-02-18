import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux'

import JobsSummary from './JobSummary';
import SideBar from '../dashboard/SideBar';

class JobsPostedByMe extends React.Component{
    render(){
        
        const {jobs, auth} = this.props;

        if(!auth.uid){
        return <Redirect to='/signin' />
        }
        return(

            <div className="container mt15">
            <div className="row">
              <div className="col s12 m8">
                {
                    jobs && jobs.map((job) => {
                        if(job.authorId===auth.uid){
                            return <JobsSummary job={job} key={job.id} />;
                        }
                    }) 
                }
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
    // console.log("jobs",state);
    return{
        jobs: state.firestore.ordered.jobs,
        auth: state.firebase.auth,
        authError: state.firebase.authError
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect(props =>[
        { 
            collection: 'jobs',
            // where: [['authorId', '==', '5kGWOTrZmcVV2oFlnUQdIhrlITF2']],
            orderBy:['createdAt', "desc"]
        }
    ])
    )(JobsPostedByMe);