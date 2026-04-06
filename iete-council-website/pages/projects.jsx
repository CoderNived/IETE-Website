import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink, HiDocumentText, HiBookOpen } from "react-icons/hi";
import ProjectCard   from "@/components/sections/projects/ProjectCard";
import ProjectFilter from "@/components/sections/projects/ProjectFilter";
import { PROJECTS, RESEARCH_PAPERS } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab,    setActiveTab]    = useState("projects");

  var filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(function(p) { return p.category === activeFilter; });

  return (
    <>
      {/* ── Page Hero ── */}
      <section style={{
        background:    "linear-gradient(135deg, #0F172A 0%, #1A56DB 100%)",
        paddingTop:    "9rem",
        paddingBottom: "5rem",
      }}>
        <div style={{
          maxWidth:    "1280px",
          marginLeft:  "auto",
          marginRight: "auto",
          paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
          textAlign:   "center",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span style={{
              display:       "inline-block",
              background:    "rgba(255,255,255,0.15)",
              color:         "rgba(255,255,255,0.9)",
              padding:       "0.375rem 1rem",
              borderRadius:  "999px",
              fontSize:      "0.8125rem",
              fontWeight:    500,
              letterSpacing: "0.05em",
              marginBottom:  "1.25rem",
            }}>
              What We Build
            </span>
            <h1 style={{
              fontSize:      "clamp(2rem, 5vw, 3.5rem)",
              fontWeight:    800,
              color:         "white",
              lineHeight:    1.15,
              marginBottom:  "1rem",
              letterSpacing: "-0.02em",
            }}>
              Projects & Research
            </h1>
            <p style={{
              fontSize:   "1.0625rem",
              color:      "rgba(255,255,255,0.7)",
              maxWidth:   "520px",
              margin:     "0 auto",
              lineHeight: 1.7,
            }}>
              From IoT prototypes to published papers — here's everything we've built and discovered.
            </p>

            {/* Stats */}
            <div style={{
              display:        "flex",
              justifyContent: "center",
              gap:            "3rem",
              marginTop:      "2.5rem",
              flexWrap:       "wrap",
            }}>
              {[
                { value: PROJECTS.length + "+",        label: "Projects"       },
                { value: RESEARCH_PAPERS.length + "+", label: "Papers Published"},
                { value: "5+",                         label: "Categories"     },
              ].map(function(s) {
                return (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tabs ── */}
      <div style={{
        position:     "sticky",
        top:          "72px",
        zIndex:       30,
        background:   "white",
        borderBottom: "1px solid #E5E7EB",
        boxShadow:    "0 2px 12px rgba(0,0,0,0.04)",
      }}>
        <div style={{
          maxWidth:    "1280px",
          marginLeft:  "auto",
          marginRight: "auto",
          paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
          display:     "flex",
        }}>
          {[
            { key: "projects", label: "Projects",         icon: HiDocumentText },
            { key: "papers",   label: "Research Papers",  icon: HiBookOpen     },
          ].map(function(tab) {
            var Icon     = tab.icon;
            var isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={function() { setActiveTab(tab.key); }}
                style={{
                  display:      "flex",
                  alignItems:   "center",
                  gap:          "0.5rem",
                  padding:      "1.125rem 1.75rem",
                  fontWeight:   600,
                  fontSize:     "0.9375rem",
                  border:       "none",
                  background:   "transparent",
                  cursor:       "pointer",
                  color:        isActive ? "#1A56DB" : "#6B7280",
                  borderBottom: isActive ? "2px solid #1A56DB" : "2px solid transparent",
                  transition:   "all 0.2s ease",
                }}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Content ── */}
      <section style={{
        paddingTop:    "3rem",
        paddingBottom: "6rem",
        background:    "#F8FAFF",
        minHeight:     "60vh",
      }}>
        <div style={{
          maxWidth:    "1280px",
          marginLeft:  "auto",
          marginRight: "auto",
          paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}>

          <AnimatePresence mode="wait">

            {/* ── Projects Tab ── */}
            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                {/* Filter bar */}
                <div style={{
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "space-between",
                  flexWrap:       "wrap",
                  gap:            "1rem",
                  marginBottom:   "2rem",
                }}>
                  <div>
                    <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#0F172A", margin: "0 0 0.25rem" }}>
                      Student Projects
                    </h2>
                    <p style={{ fontSize: "0.875rem", color: "#6B7280", margin: 0 }}>
                      Showing {filtered.length} of {PROJECTS.length} projects
                    </p>
                  </div>
                  <ProjectFilter active={activeFilter} onSelect={setActiveFilter} />
                </div>

                {/* Project grid */}
                <div style={{
                  display:             "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap:                 "1.5rem",
                }}>
                  <AnimatePresence>
                    {filtered.map(function(project, i) {
                      return (
                        <ProjectCard key={project.id} project={project} index={i} />
                      );
                    })}
                  </AnimatePresence>
                </div>

                {filtered.length === 0 && (
                  <div style={{ textAlign: "center", padding: "4rem", color: "#9CA3AF" }}>
                    <p style={{ fontSize: "1rem" }}>No projects found in this category.</p>
                  </div>
                )}
              </motion.div>
            )}

            {/* ── Papers Tab ── */}
            {activeTab === "papers" && (
              <motion.div
                key="papers"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ marginBottom: "2rem" }}>
                  <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#0F172A", margin: "0 0 0.25rem" }}>
                    Research Papers
                  </h2>
                  <p style={{ fontSize: "0.875rem", color: "#6B7280", margin: 0 }}>
                    Published under IETE and peer-reviewed international journals
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "860px" }}>
                  {RESEARCH_PAPERS.map(function(paper, i) {
                    return (
                      <motion.div
                        key={paper.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        style={{
                          background:   "white",
                          borderRadius: "1.25rem",
                          border:       "1px solid #E5E7EB",
                          padding:      "2rem",
                          boxShadow:    "0 2px 12px rgba(0,0,0,0.04)",
                        }}
                      >
                        {/* Journal badge */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem", flexWrap: "wrap" }}>
                          <span style={{
                            background:   "#EBF2FF",
                            color:        "#1A56DB",
                            fontSize:     "0.72rem",
                            fontWeight:   600,
                            padding:      "0.2rem 0.75rem",
                            borderRadius: "999px",
                          }}>
                            {paper.journal}
                          </span>
                          <span style={{ fontSize: "0.8125rem", color: "#9CA3AF" }}>
                            {paper.year}
                          </span>
                          {paper.published && (
                            <span style={{
                              background:   "#DCFCE7",
                              color:        "#166534",
                              fontSize:     "0.72rem",
                              fontWeight:   600,
                              padding:      "0.2rem 0.75rem",
                              borderRadius: "999px",
                            }}>
                              Published
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 style={{
                          fontSize:     "1rem",
                          fontWeight:   700,
                          color:        "#0F172A",
                          lineHeight:   1.4,
                          marginBottom: "0.5rem",
                        }}>
                          {paper.title}
                        </h3>

                        {/* Authors */}
                        <p style={{
                          fontSize:     "0.8125rem",
                          color:        "#1A56DB",
                          fontWeight:   500,
                          marginBottom: "0.875rem",
                        }}>
                          {paper.authors.join(", ")}
                        </p>

                        {/* Abstract */}
                        <p style={{
                          fontSize:     "0.875rem",
                          color:        "#6B7280",
                          lineHeight:   1.7,
                          marginBottom: "1.25rem",
                        }}>
                          {paper.abstract}
                        </p>

                        {/* Tags */}
                        <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                          {paper.tags.map(function(tag) {
                            return (
                              <span key={tag} style={{
                                padding:      "0.2rem 0.55rem",
                                borderRadius: "6px",
                                fontSize:     "0.7rem",
                                fontWeight:   500,
                                background:   "#F1F5F9",
                                color:        "#475569",
                              }}>
                                {tag}
                              </span>
                            );
                          })}
                        </div>

                        {/* DOI Link */}
                        <a
                          href={paper.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display:        "inline-flex",
                            alignItems:     "center",
                            gap:            "0.5rem",
                            padding:        "0.5rem 1.25rem",
                            background:     "#F8FAFF",
                            border:         "1px solid #BFDBFE",
                            borderRadius:   "0.625rem",
                            color:          "#1A56DB",
                            fontSize:       "0.875rem",
                            fontWeight:     600,
                            textDecoration: "none",
                          }}
                        >
                          <HiExternalLink size={16} />
                          View Paper (DOI)
                        </a>

                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>
    </>
  );
}