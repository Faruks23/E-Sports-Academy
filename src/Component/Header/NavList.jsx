import React from 'react';
import { NavLink } from 'react-router-dom';

const NavList = () => {
  return (
    <>
      <ul className="md:flex  gap-10 text-green-300 ">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/Shop"}>Shop</NavLink>
        </li>
        <li>
          <NavLink to={"/Tournament"}>Tournament</NavLink>
        </li>
        <li>
          <NavLink to={"/LiveStreaming"}>Live Streaming</NavLink>
        </li>
        <li>
          <NavLink to={"/Community"}>Community</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavList;