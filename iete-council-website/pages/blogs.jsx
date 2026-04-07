import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/sections/blogs/BlogCard";
import { BLOGS, BLOG_CATEGORIES } from "@/data/blogs";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  var filtered = activeCategory === "All"
    ? BLOGS
    : BLOGS.filter(function(b) { return b.category === activeCategory; });

  var featured = BLOGS.filter(function(b) { return b.featured; });

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
              Knowledge Hub
            </span>
            <h1 style={{
              fontSize:      "clamp(2rem, 5vw, 3.5rem)",
              fontWeight:    800,
              color:         "white",
              lineHeight:    1.15,
              marginBottom:  "1rem",
              letterSpacing: "-0.02em",
            }}>
              Blogs & Articles
            </h1>
            <p style={{
              fontSize:   "1.0625rem",
              color:      "rgba(255,255,255,0.7)",
              maxWidth:   "520px",
              margin:     "0 auto",
              lineHeight: 1.7,
            }}>
              Technical insights, internship stories, research guides and career
              advice — written by students, for students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Posts ── */}
      {featured.length > 0 && (
        <section style={{ paddingTop: "4rem", paddingBottom: "3rem", background: "white" }}>
          <div style={{
            maxWidth:    "1280px",
            marginLeft:  "auto",
            marginRight: "auto",
            paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
            paddingRight: "clamp(1.5rem, 5vw, 5rem)",
          }}>
            <h2 style={{
              fontSize:     "1.25rem",
              fontWeight:   700,
              color:        "#0F172A",
              marginBottom: "1.5rem",
            }}>
              ★ Featured Articles
            </h2>
            <div style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap:                 "1.5rem",
            }}>
              {featured.map(function(blog, i) {
                return <BlogCard key={blog.id} blog={blog} index={i} />;
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── All Blogs with Filter ── */}
      <section style={{
        paddingTop:    "3rem",
        paddingBottom: "6rem",
        background:    "#F8FAFF",
      }}>
        <div style={{
          maxWidth:    "1280px",
          marginLeft:  "auto",
          marginRight: "auto",
          paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}>

          {/* Filter + heading row */}
          <div style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            flexWrap:       "wrap",
            gap:            "1rem",
            marginBottom:   "2rem",
          }}>
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0F172A", margin: "0 0 0.25rem" }}>
                All Articles
              </h2>
              <p style={{ fontSize: "0.875rem", color: "#6B7280", margin: 0 }}>
                {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {/* Category filters */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {BLOG_CATEGORIES.map(function(cat) {
                var isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={function() { setActiveCategory(cat); }}
                    style={{
                      padding:      "0.5rem 1.125rem",
                      borderRadius: "999px",
                      fontSize:     "0.875rem",
                      fontWeight:   600,
                      border:       "2px solid",
                      borderColor:  isActive ? "#1A56DB" : "#E5E7EB",
                      background:   isActive ? "#1A56DB" : "white",
                      color:        isActive ? "white"   : "#6B7280",
                      cursor:       "pointer",
                      transition:   "all 0.2s ease",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Blog grid */}
          <div style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap:                 "1.5rem",
          }}>
            {filtered.map(function(blog, i) {
              return <BlogCard key={blog.id} blog={blog} index={i} />;
            })}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem", color: "#9CA3AF" }}>
              <p>No articles in this category yet.</p>
            </div>
          )}

        </div>
      </section>

      {/* ── Write for Us CTA ── */}
      <section style={{ paddingTop: "4rem", paddingBottom: "5rem", background: "white" }}>
        <div style={{
          maxWidth:    "1280px",
          marginLeft:  "auto",
          marginRight: "auto",
          paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background:    "linear-gradient(135deg, #1A56DB 0%, #1241A8 100%)",
              borderRadius:  "2rem",
              padding:       "3.5rem 3rem",
              textAlign:     "center",
              boxShadow:     "0 20px 60px rgba(26,86,219,0.25)",
            }}
          >
            <h2 style={{
              fontSize:     "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight:   800,
              color:        "white",
              marginBottom: "0.875rem",
              letterSpacing:"-0.02em",
            }}>
              Have something to share?
            </h2>
            <p style={{
              fontSize:     "1rem",
              color:        "rgba(255,255,255,0.75)",
              marginBottom: "2rem",
              maxWidth:     "480px",
              margin:       "0 auto 2rem",
              lineHeight:   1.7,
            }}>
              Write for the IETE blog — share your project, internship experience,
              or technical learnings with 500+ students.
            </p>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "0.5rem",
                padding:        "0.875rem 2rem",
                background:     "white",
                color:          "#1A56DB",
                fontWeight:     700,
                borderRadius:   "0.875rem",
                textDecoration: "none",
                fontSize:       "1rem",
                boxShadow:      "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              Submit Your Article
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}