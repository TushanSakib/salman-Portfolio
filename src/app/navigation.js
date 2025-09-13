import React from "react"
import Link from "next/link"
import styles from "./Navigation.module.css"
import { FaChartLine } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdHome } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

function Navigation(){
    return(
        <div>
            {/* Navigation on the top of the page */}
            <div className={styles.topNavigation}>

                {/* Right side navigation */}

                <div className={styles.leftNavigation}>
                    <div className={styles.customLogo}>Salman <span>Azad</span></div>

                    <div className={styles.contact}><TiMessages/>contact@salmanazad.com</div>

                </div>

                {/* Left side navigation */}
                <div className={styles.rightNavigation}>
                    <div><Link href={"/"} className={styles.links}><MdHome/>Home</Link></div>
                    <div><Link href={"/experience"} className={styles.links}><FaChartLine/>Experience</Link></div>
                    <div><Link href={"/project"} className={styles.links}><FaProjectDiagram/>Projects</Link></div>
                    <div><Link href={"/knowledge"} className={styles.links}><GiSkills/>Knowledge</Link></div>
                </div>

            </div>
            
        </div>
    )
}

export default Navigation;