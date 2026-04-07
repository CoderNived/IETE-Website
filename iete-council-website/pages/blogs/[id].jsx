import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowLeft, HiClock, HiCalendar, HiUser } from "react-icons/hi";
import { BLOGS } from "@/data/blogs";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year:  "numeric",
    month: "long",
    day:   "numeric",
  });
}

export default function BlogDetail() {
  var router = useRouter();
  var blog = BLOGS.find(function(b) { return b.id === router.query.id; });

  if (!blog) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#0F172A", marginBottom: "1rem" }}>
            Blog not found
          </h1>
          <Link href="/blogs" style={{ color: "#1A56DB", textDecoration: "none", fontWeight: 600 }}>
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section style={{
        background:    blog.coverColor || "#EBF2FF",
        paddingTop:    "9rem",
        paddingBottom: "4rem",
      }}>
        <div style={{
          maxWidth:    "860px",
          marginLeft:  "auto",
          marginRight: "auto",
          paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}>
          {/* Back link */}
          <Link href="/blogs" style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            "0.375rem",
            color:          "#1A56DB",
            textDecoration: "none",
            fontWeight:     600,
            fontSize:       "0.875rem",
            marginBottom:   "2rem",
          }}>
            <HiArrowLeft size={16} /> Back to Blogs
          </Link>

          {/* Category */}
          <div style={{ marginBottom: "1rem" }}>
            <span style={{
              background:   "#1A56DB",
              color:        "white",
              fontSize:     "0.75rem",
              fontWeight:   600,
              padding:      "0.3rem 0.875rem",
              borderRadius: "999px",
            }}>
              {blog.category}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize:      "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight:    800,
              color:         "#0F172A",
              lineHeight:    1.2,
              marginBottom:  "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            {blog.title}
          </motion.h1>

          {/* Meta */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", alignItems: "center" }}>
            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{
                width:          "36px",
                height:         "36px",
                borderRadius:   "50%",
                background:     "linear-gradient(135deg, #1A56DB, #3B82F6)",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                fontSize:       "0.75rem",
                fontWeight:     700,
                color:          "white",
              }}>
                {blog.author.split(" ").map(function(n) { return n[0]; }).join("").slice(0, 2)}
              </div>
              <div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#0F172A" }}>
                  {blog.author}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>
                  {blog.authorRole}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#6B7280", fontSize: "0.875rem" }}>
              <HiCalendar size={15} />
              {formatDate(blog.date)}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#6B7280", fontSize: "0.875rem" }}>
              <HiClock size={15} />
              {blog.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Blog content */}
      <section style={{ paddingTop: "3rem", paddingBottom: "6rem", background: "white" }}>
        <div style={{
          maxWidth:    "860px",
          marginLeft:  "auto",
          marginRight: "auto",
          paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}>

          {/* Excerpt as lead paragraph */}
          <p style={{
            fontSize:     "1.125rem",
            color:        "#374151",
            lineHeight:   1.8,
            marginBottom: "2rem",
            fontWeight:   500,
            paddingBottom:"2rem",
            borderBottom: "1px solid #F1F5F9",
          }}>
            {blog.excerpt}
          </p>

          {/* Placeholder content */}
          <div style={{ color: "#4B5563", lineHeight: 1.8, fontSize: "1rem" }}>
            <p style={{ marginBottom: "1.5rem" }}>
              This is where the full blog content will appear. When you connect
              Sanity CMS in Phase 8, this will be replaced with rich text content
              including images, code blocks, and embeds.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              For now, you can add content directly in the <code style={{
                background:   "#F1F5F9",
                padding:      "0.15rem 0.375rem",
                borderRadius: "4px",
                fontSize:     "0.875rem",
                color:        "#1A56DB",
              }}>data/blogs.js</code> file
              under the <code style={{
                background:   "#F1F5F9",
                padding:      "0.15rem 0.375rem",
                borderRadius: "4px",
                fontSize:     "0.875rem",
                color:        "#1A56DB",
              }}>content</code> field.
            </p>
          </div>

          {/* Tags */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #F1F5F9" }}>
            <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#9CA3AF", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Tags
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {blog.tags.map(function(tag) {
                return (
                  <span key={tag} style={{
                    padding:      "0.375rem 0.875rem",
                    borderRadius: "999px",
                    fontSize:     "0.8125rem",
                    fontWeight:   500,
                    background:   "#F1F5F9",
                    color:        "#475569",
                  }}>
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Back button */}
          <div style={{ marginTop: "3rem" }}>
            <Link
              href="/blogs"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "0.5rem",
                padding:        "0.75rem 1.5rem",
                background:     "#EBF2FF",
                color:          "#1A56DB",
                borderRadius:   "0.75rem",
                fontWeight:     600,
                textDecoration: "none",
                fontSize:       "0.9375rem",
              }}
            >
              <HiArrowLeft size={18} />
              Back to All Blogs
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}