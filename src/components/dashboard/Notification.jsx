import React from 'react'
import moment from 'moment';

function Notifications(props) {
  const {notifications} = props;
  return (
    
      <div className="card">
      <div className="card-content">
      <div className="card-title">
        Notifications
      </div>
      <ul className="notifications">
      {notifications && notifications.map( notification => {
        return (
          <li key={notification.id} className='mb-5'>
           <span className='pink-text'>{notification.user} </span><br />
           <span> {notification.content} </span><br />
           <span className='grey-text note-date'>
           {moment(notification.time.toDate()).fromNow()}
           </span>
          </li>
        )
      })}
      </ul>
      </div>
      </div>
  )
}

export default Notifications
