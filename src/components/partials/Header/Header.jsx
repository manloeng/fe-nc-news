import React from 'react';
import './Header.css';

const Header = ({ route }) => {
  const reg = /\w+/g;
  if (!route) route = '/articles';
  const matchedStr = route.match(reg)[0];
  const formattedStr = matchedStr[0].toUpperCase() + matchedStr.slice(1);
  return (
    <header id="mainHeader">
      <h1>{formattedStr}</h1>
    </header>
  );
};

export default Header;
