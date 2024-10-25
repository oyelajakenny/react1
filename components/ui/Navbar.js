"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import styles from "./Navbar.module.css";
import NavLink from "./NavLink";



export const Navbar = () => {

  const NavBarItems = [
    { 
      title: "HOME", 
      link: "/", },
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

   const currentPath = usePathname();


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
          {NavBarItems.map((NavItem, index) => (
            <NavLink
              key={index}
              title={NavItem.title}
              link={NavItem.link}
              isActive={currentPath === NavItem.link}
             
            />
          ))}
          {/* TASK - React 1 week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
        </ul>
      </nav>
    </header>
  );
};
