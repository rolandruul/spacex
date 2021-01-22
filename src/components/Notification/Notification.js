import React from 'react';
import classNames from 'classnames';
import FetchNotification from './FetchNotification/FetchNotification';

function Notification({ doYes, doNo, fetch }) {

  const styles = classNames({
    notification: true,
    'notification-fetch': fetch
  });

  return (
    <div className={styles}>
      {fetch && <FetchNotification doYes={doYes} />}
    </div>
  );
}

export default Notification;