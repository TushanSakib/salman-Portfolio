"use client";

import { useEffect, useState } from "react";
import styles from "./about.module.css";
import PageTransition from "../PageTransition";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import Image from "next/image"; 

function Experience() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data/data.json"); // Ensure this file is in public/data/data.json
        if (!response.ok) throw new Error("Failed to fetch data");
        const json = await response.json();
        setData(json?.experience?.jobs || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}>
          <p>Loading experiences...</p>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className={styles.containerFullWidth}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>
            <span className={styles.titleGradient}>Professional Experience</span>
          </h1>
          <p className={styles.subtitle}>Journey through my professional career</p>
          <div className={styles.experienceStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{data.length}+</span>
              <span className={styles.statLabel}>Positions</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>Years</span>
            </div>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          {data.map((job, index) => (
            <div key={job.company + index} className={styles.card}>
              <div className={styles.cardHeader}>
                {job?.image && (
                  <div className={styles.logoWrapper}>
                    <Image
                      src={job.image}
                      alt={`${job.company} logo`}
                      width={80}
                      height={80}
                      className={styles.companyLogo}
                    />
                  </div>
                )}
                <div className={styles.companyInfo}>
                  <h3 className={styles.company}>
                    {job?.website ? (
                      <a href={job.website} target="_blank" rel="noopener noreferrer">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                  <div className={styles.metaInfo}>
                    <span className={styles.duration}>
                      <MdOutlineDateRange /> {job?.duration}
                    </span>
                    <div className={styles.location}>
                      <FaLocationDot /> <span>{job?.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.roleSection}>
                <h2 className={styles.role}>{job?.role}</h2>
                <div className={styles.roleUnderline}></div>
              </div>

              {job?.responsibilities?.length > 0 && (
                <div className={styles.responsibilitiesWrapper}>
                  <h4 className={styles.responsibilitiesTitle}>
                    <GiAchievement /> Key Achievements
                  </h4>
                  <ul className={styles.responsibilities}>
                    {job.responsibilities.map((item, idx) => (
                      <li key={idx} className={styles.responsibilityItem}>
                        <div className={styles.bulletPoint}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.cardFooter}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default Experience;
