const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification) =>{
    return admin.firestore().collection('notifications').add(notification).then(doc => {
        console.log('Notification Added', doc);
    });
}

exports.jobCreated = functions.firestore.document('jobs/{jobId}').onCreate(doc=>{
    const job = doc.data();
    const notification = {
        content: 'Added New Project',
        user: `${job.authorFirstName} ${job.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
});


exports.userJoined = functions.auth.user().onCreate( user => {
    return admin.firestore().collection('users').doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
            content: 'New User SignUp',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    });
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
