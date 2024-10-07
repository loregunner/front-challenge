/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Header.css";
import logo from "../../assets/images/chicks-logo-large.svg";
import { optionsMenu, optionsUsd } from "./Header.utils";
import useMediaCustom from "../../hooks/useMediaCustom";
import { FaCartShopping } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";

export const Header = () => {
  const { isDesktop } = useMediaCustom();
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu: any = document.getElementById("mobileMenu");

  openMenu?.addEventListener("click", () => {
    mobileMenu.style.display = "block";
  });

  closeMenu?.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
  return (
    <>
      <header>
        {isDesktop && (
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        )}
        <nav className="navbar">
          {optionsMenu.map((item: string, index: number) => (
            <ul key={index}>
              {item !== "Usd" && (
                <li>
                  <select className="selection_items_navbar">
                    <option value={item}>{item}</option>
                  </select>
                </li>
              )}
            </ul>
          ))}
        </nav>
        <button className="hamburger" id="openMenu">
          &#9776;
        </button>
        {!isDesktop && (
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        )}
        <div className="options">
          {isDesktop && (
            <select className="selection_items_navbar">
              {optionsUsd.map((item: string, index: number) => (
                <option value={item} key={index}>{item}</option>
              ))}
            </select>
          )}
          <div className="cart">
            <button>
              <FaCartShopping />
              {isDesktop && <span>CART</span>}
              <span>(5)</span>
            </button>
          </div>
          <button className="login">
            <span>Sign in</span> <BsPersonFill />
          </button>
        </div>
      </header>
      <div className="mobile-menu" id="mobileMenu">
        <button className="close-btn" id="closeMenu">
          &times;
        </button>
        <div style={{ marginTop: "6rem" }}>
          {optionsMenu.map((item: any, index: number) => (
            <ul key={index}>
              <li>
                <select className="selection_items_navbar">
                  <option value={item}>{item}</option>
                </select>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
