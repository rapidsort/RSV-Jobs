const initState={
}
const jobsReducer = (state= initState, action) =>{

    switch(action.type){
        case 'CREATE_JOB':
            console.log(action.job);
            return state;
        case 'CREATE_JOB_ERROR':
            console.log(action.err);
            return state;

        case 'JOB_UPDATED':
            console.log(action.job);
            return state;
        case 'JOB_UPDATED_ERROR':
            console.log(action.err);
            return state;


        case 'JOB_DELETE':
            console.log(action.job);
            return state;
        case 'JOB_DELETE_ERROR':
            console.log(action.err);
            return state;


        default:
            return state;
    }
}

export default jobsReducer;