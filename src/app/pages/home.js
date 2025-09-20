"use client" 
import { useState, useEffect } from "react"; 
import styles from "./home.module.css"; 
import PageTransition from "../PageTransition"; 
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => { 
    const timer = setTimeout(() => setLoading(false), 1200); 
    return () => clearTimeout(timer); 
  }, []); 
  
  if (loading) { 
    return ( 
      <div className={styles.loadingContainer}> 
        <div className={styles.loadingSpinner}></div> 
        <div className={styles.loadingText}>Loading Home...</div> 
      </div> 
    ); 
  }
  
  return (
    <PageTransition>
      <section className={styles.homeSection}>
        <div className={styles.homeContainer}>
          
          {/* Mobile Image - Only visible on mobile, positioned at top */}
          <div className={styles.profileImageMobile}>
            <Image
              src="/images/salman_azad.jpg"
              alt="Salman Azad"
              fill
              className={styles.profilePic}
              sizes="280px"
              priority
            />
          </div>
          
          {/* Left side - Text content */}
          <div className={styles.profileBio}>
            <div className={styles.introBox}>It&apos;s Me</div>
            <h1 className={styles.name}>Salman Azad</h1>
            <h2 className={styles.role}>Technical Project Coordinator</h2>

            <p className={styles.description}>
              Project Coordinator with 5+ years of experience managing complex projects in fast-paced environments. Skilled in defining project scopes, task allocation, and assembling high-performance teams to deliver projects on time and within budget. Proficient in agile methodologies, progress tracking, and milestone management. Detail-oriented and adaptable, committed to aligning projects with business and technical goals while ensuring efficient delivery and stakeholder satisfaction.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
            </div>
          </div>

          {/* Right side - Desktop Image */}
          <div className={styles.profileImageDesktop}>
            <Image
              src="/images/salman_azad.jpg"
              alt="Salman Azad"
              fill
              className={styles.profilePic}
              sizes="(max-width: 1024px) 350px, 450px"
              priority
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}