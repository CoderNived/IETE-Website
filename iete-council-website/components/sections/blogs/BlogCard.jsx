import Link from "next/link";
import { motion } from "framer-motion";
import { HiClock, HiUser, HiArrowRight, HiTag } from "react-icons/hi";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year:  "numeric",
    month: "long",
    day:   "numeric",
  });
}

const CATEGORY_STYLES = {
  "Technical":  { bg: "#EBF2FF", color: "#1E40AF" },
  "Experience": { bg: "#CCFBF1", color: "#0F766E" },
  "Research":   { bg: "#FCE7F3", color: "#9D174D" },
  "Career":     { bg: "#FEF3C7", color: "#92400E" },
};

export default function BlogCard({ blog, index }) {
  var catStyle = CATEGORY_STYLES[blog.category] || { bg: "#F1F5F9", color: "#475569" };

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
      {/* Cover color strip */}
      <div style={{
        height:     "140px",
        background: blog.coverColor || "#EBF2FF",
        display:    "flex",
        alignItems: "center",
        justifyContent: "center",
        position:   "relative",
      }}>
        {/* Featured tag */}
        {blog.featured && (
          <span style={{
            position:     "absolute",
            top:          "1rem",
            left:         "1rem",
            background:   "linear-gradient(135deg, #1A56DB, #3B82F6)",
            color:        "white",
            fontSize:     "0.7rem",
            fontWeight:   700,
            padding:      "0.25rem 0.75rem",
            borderRadius: "999px",
            letterSpacing:"0.05em",
          }}>
            ★ Featured
          </span>
        )}
        {/* Category icon area */}
        <div style={{
          width:          "64px",
          height:         "64px",
          borderRadius:   "16px",
          background:     "rgba(255,255,255,0.8)",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          backdropFilter: "blur(8px)",
        }}>
          <HiTag size={28} color="#1A56DB" />
        </div>
      </div>

      <div style={{
        padding:       "1.5rem",
        display:       "flex",
        flexDirection: "column",
        gap:           "0.75rem",
        flex:          1,
      }}>

        {/* Category + Read time */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <span style={{
            padding:      "0.2rem 0.65rem",
            borderRadius: "999px",
            fontSize:     "0.72rem",
            fontWeight:   600,
            background:   catStyle.bg,
            color:        catStyle.color,
          }}>
            {blog.category}
          </span>
          <span style={{
            display:    "flex",
            alignItems: "center",
            gap:        "0.25rem",
            fontSize:   "0.75rem",
            color:      "#9CA3AF",
          }}>
            <HiClock size={13} />
            {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize:   "1rem",
          fontWeight: 700,
          color:      "#0F172A",
          lineHeight: 1.4,
          margin:     0,
        }}>
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p style={{
          fontSize:   "0.875rem",
          color:      "#6B7280",
          lineHeight: 1.7,
          margin:     0,
          flex:       1,
        }}>
          {blog.excerpt}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
          {blog.tags.slice(0, 3).map(function(tag) {
            return (
              <span key={tag} style={{
                padding:      "0.15rem 0.5rem",
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

        {/* Author + Date */}
        <div style={{
          display:      "flex",
          alignItems:   "center",
          gap:          "0.5rem",
          paddingTop:   "0.75rem",
          borderTop:    "1px solid #F1F5F9",
        }}>
          {/* Author avatar */}
          <div style={{
            width:          "32px",
            height:         "32px",
            borderRadius:   "50%",
            background:     "linear-gradient(135deg, #1A56DB, #3B82F6)",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            flexShrink:     0,
            fontSize:       "0.75rem",
            fontWeight:     700,
            color:          "white",
          }}>
            {blog.author.split(" ").map(function(n) { return n[0]; }).join("").slice(0, 2)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#374151" }}>
              {blog.author}
            </div>
            <div style={{ fontSize: "0.72rem", color: "#9CA3AF" }}>
              {formatDate(blog.date)}
            </div>
          </div>
        </div>

        {/* Read more link */}
        <Link
          href={"/blogs/" + blog.id}
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            "0.375rem",
            fontSize:       "0.875rem",
            fontWeight:     600,
            color:          "#1A56DB",
            textDecoration: "none",
            marginTop:      "auto",
          }}
        >
          Read Article <HiArrowRight size={16} />
        </Link>

      </div>
    </motion.div>
  );
}