import React, { useState } from "react";
import avatarProfile from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";

function Header() {
  const [choosing,setChoosing] = useState("");
  function chooseMenu(event){
    const name=event.target.outerText;
    setChoosing(name);
  }
  return (
    <div>
      <div className="navbar bg-base-100 mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-green-200 "
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="text-3xl ml-24 font-bold">sneakers</div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-row px-1 -ml-36 gap-7">
            <li className="hover:cursor-pointer relative">
              <text onClick={chooseMenu} >Collections</text>
              {choosing==='Collections' && <hr className="w-full h-1 border-none bg-normalOrange mt-12 absolute cursor-auto"/>}
            </li>
            <li className="hover:cursor-pointer relative" onClick={chooseMenu} >
            <text onClick={chooseMenu} >Men</text>
              {choosing==='Men' && <hr className="w-full h-1 border-none bg-normalOrange mt-12 absolute cursor-auto"/>}
            </li>
            <li className="hover:cursor-pointer relative" onClick={chooseMenu} >
            <text onClick={chooseMenu} >Women</text>
              {choosing==='Women' && <hr className="w-full h-1 border-none bg-normalOrange mt-12 absolute cursor-auto"/>}
            </li>
            <li className="hover:cursor-pointer relative" onClick={chooseMenu} >
            <text onClick={chooseMenu} >About</text>
              {choosing==='About' && <hr className="w-full h-1 border-none bg-normalOrange mt-12 absolute cursor-auto"/>}
            </li>
            <li className="hover:cursor-pointer relative" onClick={chooseMenu} >
            <text onClick={chooseMenu} >Contact</text>
              {choosing==='Contact' && <hr className="w-full h-1 border-none bg-normalOrange mt-12 absolute cursor-auto"/>}
            </li>
          </ul>
        </div>

        <div className="navbar-end mr-28">
          <div tabIndex={0} role="button" className="mr-7 mt-2">
            <div className="indicator">
              <img
                src={cart}
              />
              
              <span className="badge badge-sm indicator-item bg-normalOrange text-white">0</span>
            </div>
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <a className="w-10 rounded-full">
              <img src={avatarProfile} />
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-7 ml-24 mr-28"/>
    </div>
  );
}

export default Header;
