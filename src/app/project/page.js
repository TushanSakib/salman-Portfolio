"use client";

import { useState, useEffect } from "react";
import styles from "./project.module.css";
import PageTransition from "../PageTransition";
import { motion } from "framer-motion";

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch project data
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/data/data.json");
        if (!response.ok) throw new Error("Failed to fetch projects");
        const json = await response.json();
        setProjects(json?.projects?.list || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") setSelected(null);
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selected]);

  return (
    <PageTransition>
      <div className={styles.projectSection}>
        <h2 className={styles.projectSectionTitle}>Projects</h2>

        {/* Wrapper to maintain consistent height and prevent shake */}
        <motion.div
          className={styles.projectsGridWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {loading ? (
            <div className={styles.loaderContainer}>
              <div className={styles.loader}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className={styles.loadingText}>Loading projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <p className={styles.noProjects}>No projects found.</p>
          ) : (
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={styles.projectCard}
                  onClick={() => setSelected(project)}
                >
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  <p className={styles.projectCompany}>{project.company}</p>
                  <p className={styles.projectSummary}>{project.summary}</p>

                  {project.tags?.length > 0 && (
                    <div className={styles.projectTags}>
                      <div className={styles.projectTagsContainer}>
                        {project.tags.map((tag, i) => (
                        <span key={i} className={styles.projectTag}>
                          {tag}
                        </span>
                      ))}
                      </div>
                      
                      <span className={styles.clickIndicator}>➤</span>
                    </div>
                  )}
                  
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Modal */}
        {selected && (
          <div
            className={styles.projectModalBackdrop}
            onClick={(e) => e.target === e.currentTarget && setSelected(null)}
          >
            <div className={styles.projectModal}>
              <button
                className={styles.modalClose}
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              <h3 className={styles.modalTitle}>{selected.name}</h3>
              <p className={styles.modalCompany}>{selected.company}</p>
              <p className={styles.modalSummary}>{selected.summary}</p>

              {selected.achievements?.length > 0 && (
                <ul className={styles.modalAchievements}>
                  {selected.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              )}

              {selected.tags?.length > 0 && (
                <div className={styles.modalTags}>
                  {selected.tags.map((tag, i) => (
                    <span key={i} className={styles.modalTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
