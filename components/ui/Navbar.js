"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import styles from "./Navbar.module.css";

const NavItem = ({ title, link, isActive, onClick }) => {
  return (
    <li>
      <a
        href={link}
        onClick={onClick}
        style={{
          color: isActive ? "grey" : "white",
          textDecoration: isActive ? "underline" : "none",
          padding: "10px",
        }}
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState();

  const navBarItems = [
    {
      title: "ABOUT US",
      link: "/about_us",
    },
    {
      title: "DESTINATION",
      link: "/destination",
    },
    {
      title: "NASA COLLABORATION",
      link: "/nasa_collaboration",
    },
  ];

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {/* TASK - React 1 week 2 */}
          {/* Create a <NavItem> component, which accepts the following:  */}
          {/* title, link, isActive  */}
          {NavBarItems.map((navItems, index) => (
            <NavItem
              key={index}
              title={NavItems.title}
              link={NavItems.link}
              isActive={activeLink === NavItems.link}
              onClick={() => handleNavClick(NavItems.link)}
            />
          ))}
          {/* TASK - React 1 week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
        </ul>
      </nav>
    </header>
  );
};
