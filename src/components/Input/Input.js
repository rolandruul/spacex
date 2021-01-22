import React from 'react';
import classNames from 'classnames';

function Input({
  id,
  type,
  value,
  onChange,
  placeholder,
  search,
  mobWide
}) {

  const styles = classNames({
    input: true,
    'input-search': search,
    'input-wide': mobWide
  });

  return (
    <input
      className={styles}
      id={id}
      type={type ? type : 'text'} 
      value={value} 
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;