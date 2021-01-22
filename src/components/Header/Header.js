import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../img/Logo.svg';
import Search from './../Search/Search';
import Button from './../Button/Button';

function Header({ save, fetch, search }) {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="SpaceX Logo" />
      </Link>
      <Search data={search} />
      <div className="btn-container">
        <Button secondary title="Load" onClick={fetch} />
        <Button secondary title="Save" onClick={save} />
      </div>
    </header>
  );
}

export default Header;