"use client"
import { useState, useEffect } from "react";
import styles from "./home.module.css";
import PageTransition from "../PageTransition";
import Image from "next/image";

function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading (you can replace this with actual data fetch if needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s loading
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

          {/* Left Side: Bio */}
          <div className={styles.profileBio}>
            <div className={styles.introBox}>It&apos;s Me</div>
            <h1 className={styles.name}>Salman Azad</h1>
            <h2 className={styles.role}>Technical Project Coordinator</h2>

            <p className={styles.description}>
              Project Coordinator with 4 years of experience managing complex projects in fast-paced environments. Skilled in defining project scopes, task allocation, and assembling high-performance teams to deliver projects on time and within budget. Proficient in agile methodologies, progress tracking, and milestone management. Detail-oriented and adaptable, committed to aligning projects with business and technical goals while ensuring efficient delivery and stakeholder satisfaction.
            </p>

            {/* Tech-style Stats */}
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Agile</span>
                <span className={styles.statLabel}>Methodology</span>
              </div>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className={styles.profileImage}>
            <Image src="/images/salman_azad.jpg" alt="Salman Azad" fill className={styles.profilePic} />
          </div>

        </div>
      </section>
    </PageTransition>
  );
}

export default Home;
