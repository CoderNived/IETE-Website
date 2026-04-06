import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink, HiUsers, HiCheckCircle, HiClock } from "react-icons/hi";

const CATEGORY_STYLES = {
  "IoT":     { bg: "#DCFCE7", color: "#166534" },
  "AI/ML":   { bg: "#EDE9FE", color: "#5B21B6" },
  "Web Dev": { bg: "#DBEAFE", color: "#1E40AF" },
  "Hardware":{ bg: "#FEF3C7", color: "#92400E" },
};

const STATUS_STYLES = {
  "Completed":   { bg: "#DCFCE7", color: "#166534", icon: HiCheckCircle },
  "In Progress": { bg: "#FEF3C7", color: "#92400E", icon: HiClock       },
};

export default function ProjectCard({ project, index }) {
  var catStyle    = CATEGORY_STYLES[project.category] || { bg: "#F1F5F9", color: "#475569" };
  var statStyle   = STATUS_STYLES[project.status]     || STATUS_STYLES["Completed"];
  var StatusIcon  = statStyle.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(26,86,219,0.12)" }}
      style={{
        background:    "white",
        borderRadius:  "1.25rem",
        border:        "1px solid #E5E7EB",
        boxShadow:     "0 2px 12px rgba(0,0,0,0.04)",
        overflow:      "hidden",
        display:       "flex",
        flexDirection: "column",
        transition:    "all 0.3s ease",
      }}
    >
      {/* Featured banner */}
      {project.featured && (
        <div style={{
          background: "linear-gradient(90deg, #1A56DB, #3B82F6)",
          padding:    "0.375rem 1rem",
          fontSize:   "0.72rem",
          fontWeight: 600,
          color:      "white",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}>
          ★ Featured Project
        </div>
      )}

      {!project.featured && (
        <div style={{ height: "4px", background: "linear-gradient(90deg, #E5E7EB, #F1F5F9)" }} />
      )}

      <div style={{
        padding:       "1.75rem",
        display:       "flex",
        flexDirection: "column",
        gap:           "0.875rem",
        flex:          1,
      }}>

        {/* Category + Status */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{
            padding:      "0.2rem 0.65rem",
            borderRadius: "999px",
            fontSize:     "0.72rem",
            fontWeight:   600,
            background:   catStyle.bg,
            color:        catStyle.color,
          }}>
            {project.category}
          </span>
          <span style={{
            padding:      "0.2rem 0.65rem",
            borderRadius: "999px",
            fontSize:     "0.72rem",
            fontWeight:   600,
            background:   statStyle.bg,
            color:        statStyle.color,
            display:      "flex",
            alignItems:   "center",
            gap:          "0.25rem",
          }}>
            <StatusIcon size={11} />
            {project.status}
          </span>
          <span style={{
            marginLeft:   "auto",
            fontSize:     "0.75rem",
            color:        "#9CA3AF",
            fontWeight:   500,
          }}>
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize:   "1.0625rem",
          fontWeight: 700,
          color:      "#0F172A",
          lineHeight: 1.3,
          margin:     0,
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize:   "0.875rem",
          color:      "#6B7280",
          lineHeight: 1.7,
          margin:     0,
          flex:       1,
        }}>
          {project.description}
        </p>

        {/* Team */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <HiUsers size={14} color="#9CA3AF" />
          <span style={{ fontSize: "0.8125rem", color: "#6B7280" }}>
            {project.team.join(", ")}
          </span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
          {project.tags.map(function(tag) {
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

        {/* Links */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto", flexWrap: "wrap" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "0.375rem",
              padding:        "0.5rem 1rem",
              background:     "#0F172A",
              color:          "white",
              borderRadius:   "0.625rem",
              fontSize:       "0.8125rem",
              fontWeight:     600,
              textDecoration: "none",
              flex:           1,
              justifyContent: "center",
            }}
          >
            <FaGithub size={15} />
            GitHub
          </a>

          {project.deployed && (
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "0.375rem",
                padding:        "0.5rem 1rem",
                background:     "#EBF2FF",
                color:          "#1A56DB",
                borderRadius:   "0.625rem",
                fontSize:       "0.8125rem",
                fontWeight:     600,
                textDecoration: "none",
                flex:           1,
                justifyContent: "center",
              }}
            >
              <HiExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
}