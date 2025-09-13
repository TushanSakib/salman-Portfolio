"use client";

import { useEffect, useState } from "react";
import styles from "./knowledge.module.css";
import PageTransition from "../PageTransition";

export default function LearningSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/data.json");
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <PageTransition>
      <div className={styles.learningSection}>
        {/* ================== Skills ================== */}
        <section className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            {Object.keys(data.skills).map((category, idx) => (
              <div key={idx} className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>{category}</h3>
                <div className={styles.skillList}>
                  {data.skills[category].map((skill, i) => (
                    <span key={i} className={styles.skillItem}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================== Education ================== */}
        <section className={styles.educationSection}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationGrid}>
            {data.education.map((edu, idx) => (
              <div key={idx} className={styles.educationCard}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.university}>{edu.university}</p>
                <p className={styles.duration}>{edu.duration}</p>
                <p className={styles.location}>{edu.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================== Certifications ================== */}
        <section className={styles.certificationsSection}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <div className={styles.certificationsGrid}>
            {data.certifications.map((cert, idx) => (
              <div key={idx} className={styles.certCard}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                {cert.issuer && <p className={styles.issuer}>From {cert.issuer}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
