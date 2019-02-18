// eslint-disable-next-line
/* eslint-disable */
export const createJob = (job) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState(). firebase.auth.uid;
        firestore.collection('jobs').add({
            ...job,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_JOB', job: job});
        }).catch((err)=>{
            dispatch({type: 'CREATE_JOB_ERROR', err: err});
        })
    }
}


export const editJob = (job) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState(). firebase.auth.uid;

        firestore.collection('jobs').doc(job.id).set(job).then(()=>{
                dispatch({type: 'JOB_UPDATED', job: job});
            }).catch((err)=>{
                dispatch({type: 'JOB_UPDATED_ERROR', err: err});
            })
    }
}



export const deleteJob = (job) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState(). firebase.auth.uid;


        // console.log(job);
        firestore.collection('jobs').doc(job).delete().then(()=>{
                dispatch({type: 'JOB_DELETE', job: job});
            }).catch((err)=>{
                dispatch({type: 'JOB_DELETE_ERROR', err: err});
            })
    }
}