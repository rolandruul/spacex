import React from 'react';
import classNames from 'classnames';

function Button({
  id, 
  type, 
  title, 
  primary, 
  secondary, 
  onClick
}) {

  const styles = classNames({
    btn: true,
    'btn-primary': primary,
    'btn-secondary': secondary
  });

  return (
    <button
      className={styles}
      id={id}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;