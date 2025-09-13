
"use client"
import React, { useState } from "react";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import { FaChartLine, FaProjectDiagram } from "react-icons/fa";
import { GiSkills, GiHamburgerMenu } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import styles from "./Navigation.module.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClick = ()=> setMenuOpen(false)

  return (
    <div className={styles.topNavigation}>
      {/* Left Navigation */}
      <div className={styles.leftNavigation}>
        <div className={styles.customLogo}>
          Salman <span>Azad</span>
        </div>
        <div className={styles.contact}>
          <TiMessages />
          contact@salmanazad.com
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>

      {/* Right Navigation Links */}
      <div
        className={`${styles.rightNavigation} ${menuOpen ? styles.active : ""}`}
      >
        <Link href={"/"} className={styles.links} onClick={handleClick}>
          <MdHome /> Home
        </Link>
        <Link href={"/experience"} className={styles.links} onClick={handleClick}>
          <FaChartLine /> Experience
        </Link>
        <Link href={"/project"} className={styles.links} onClick={handleClick}>
          <FaProjectDiagram /> Projects
        </Link>
        <Link href={"/knowledge"} className={styles.links} onClick={handleClick}>
          <GiSkills /> Knowledge
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
