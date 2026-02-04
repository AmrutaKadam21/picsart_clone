import './Header.css'
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Create from './Create.jsx'
import Solutions from './Solutions.jsx'
import Developers from './developers.jsx'
import Resource from './Resource.jsx'
import Button from './Button.jsx'
import StartMenu from "./StartBtn.jsx";


function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const [showCreate, setShowCreate] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showDeveloper, setShowDeveloper] = useState(false);
  const [showResource, setShowResource] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const closeAllMenus = () => {
    setShowCreate(false);
    setShowSolutions(false);
    setShowDeveloper(false);
    setShowResource(false);
    setShowButton(false);
  };

  useEffect(() => {
    document.body.style.overflow =
      showCreate || showSolutions || showDeveloper || showResource || showButton
        ? "hidden"
        : "auto";
  }, [showCreate, showSolutions, showDeveloper, showResource, showButton]);

  const menuRef = useRef(null);
  const menuRef1 = useRef(null);
  const menuRef2 = useRef(null);
  const menuRef3 = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowSolutions(false);
      }
    }
    if (showSolutions) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSolutions]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef1.current && !menuRef1.current.contains(e.target)) {
        setShowDeveloper(false);
      }
    }
    if (showDeveloper) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDeveloper]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef2.current && !menuRef2.current.contains(e.target)) {
        setShowResource(false);
      }
    }
    if (showResource) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showResource]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef3.current && !menuRef3.current.contains(e.target)) {
        setShowButton(false);
      }
    }
    if (showButton) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showButton]);

  useEffect(() => {
    function handleOutside(e) {
      if (!e.target.closest(".search-wrapper")) {
        setShowSearch(false);
      }
    }
    if (showSearch) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [showSearch]);


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-list">

        <li className="logo">
          <img
            src="https://pastatic.picsart.com/cms-pastatic/8218299e-3dc4-4d50-8a54-0b78d3f5a683.svg"
            alt="Logo"
          />
        </li>

        {showSearch && (
        <li
  className="hamburger"
  onClick={() => setIsMobileMenuOpen(prev => !prev)}
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
</li>


        )}

      <div className={`nav ${isMobileMenuOpen ? "active" : ""}`}>


            <li className="create-btn" onClick={() => {
              closeAllMenus();
              setShowCreate(prev => !prev);
            }}>

              <span>Create</span>
            </li>

            <li className="solutions-btn" onClick={() => {
              closeAllMenus();
              setShowSolutions(prev => !prev);
            }}>
              <span>Solutions</span>
            </li>

            <li className="developer-btn" onClick={() => {
              closeAllMenus();
              setShowDeveloper(prev => !prev);
            }}>
              <span>Developers</span>
            </li>

            <li className="resource-btn" onClick={() => {
              closeAllMenus();
              setShowResource(prev => !prev);
            }}>
              <span>Resources</span>
            </li>

            <li className="price-btn">
              <Link to="/pricing" className="price-link">
                <span className='pricing-nav'>
                  Pricing
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </span>
              </Link>
            </li>

          </div>
        

        <li className="search-container">
          <div className="search-wrapper">
            <svg
              onClick={() => setShowSearch(!showSearch)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="search-icon-click"
            >
              <path d="M10 2a8 8 0 015.29 13.71l4 4a1 1 0 01-1.42 1.42l-4-4A8 8 0 1110 2m0 2a6 6 0 100 12 6 6 0 000-12z" fill="currentColor" />
            </svg>

            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="expand-search"
                autoFocus
              />
            )}
          </div>
        </li>

        <li>
          <button className="start" onClick={() => {
            closeAllMenus();
            setShowButton(prev => !prev);
          }}>
            Start creating
          </button>
        </li>

        <li>
          <button className="login" onClick={() => {
            closeAllMenus();
            setShowButton(prev => !prev);
          }}>Log in</button>
        </li>

      </ul>

      {showCreate && <Create />}

      {showSolutions && (
        <div ref={menuRef}>
          <Solutions />
        </div>
      )}

      {showDeveloper && (
        <div ref={menuRef1}>
          <Developers />
        </div>
      )}

      {showResource && (
        <div ref={menuRef2}>
          <Resource />
        </div>
      )}

      {showButton && (
        <div ref={menuRef3}>
          <StartMenu />
        </div>
      )}

    </nav>
  );
}

export default Header;
