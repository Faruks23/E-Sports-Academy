import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import NavList from './NavList';

const Header = () => {

  const [Open,setIsOpen]=useState(false)

  const handleOpenMenu = () => {
    setIsOpen(true);

  }
  const handleClosMenu = () => { 

    setIsOpen(false);
  }





  return (
    <>
      <header className="shadow-xl bg-slate-800 p-2">
        <nav>
          <div className="flex md:justify-around items-center justify-end">
            {/* nav-list */}

            <div className=" hidden md:block">
              <NavList></NavList>
            </div>

            {/* sign in and sign up */}
            <div className="flex gap-5 items-center">
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="bt "
              >
                Login
              </button>
              {Open ? (
                <>
                  <p
                    onClick={handleClosMenu}
                    className="md:hidden block cursor-pointer"
                  >
                    <AiOutlineClose className="w-6 h-6"></AiOutlineClose>{" "}
                  </p>
                </>
              ) : (
                <>
                  <p
                    onClick={handleOpenMenu}
                    className="md:hidden block cursor-pointer"
                  >
                    {" "}
                    <FaBars className="w-6 h-6"></FaBars>{" "}
                  </p>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      {Open && (
        <>
          <div className=" absolute bg-slate-800 h-full p-10 w-[50%]  mobile-nav  ">
            <ul className="flex flex-col gap-5 text-green-300 ">
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
          </div>
        </>
      )}

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* modal */}
    </>
  );
};

export default Header;