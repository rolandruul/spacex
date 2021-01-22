import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function SidebarItem({ data }) {

  const styles = classNames({
    'sidebar-link': true
  });

  return (
    <Link
      to={`/shipment/${data.id}/${data.friendlyURL}`}
      className={styles}
    >
      {data.name}
    </Link>
  );
}

export default SidebarItem;