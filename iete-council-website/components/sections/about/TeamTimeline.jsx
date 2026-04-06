import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { COUNCIL_MEMBERS, FACULTY_COORDINATORS, PAST_BATCHES } from "@/data/team";

function MemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{
        background:   "white",
        borderRadius: "1.25rem",
        border:       "1px solid #E5E7EB",
        padding:      "1.5rem",
        textAlign:    "center",
        boxShadow:    "0 2px 12px rgba(0,0,0,0.04)",
        transition:   "all 0.3s ease",
      }}
    >
      {/* Avatar */}
      <div style={{
        width:          "80px",
        height:         "80px",
        borderRadius:   "50%",
        background:     "linear-gradient(135deg, #1A56DB, #3B82F6)",
        margin:         "0 auto 1rem",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        fontSize:       "1.5rem",
        fontWeight:     700,
        color:          "white",
        boxShadow:      "0 4px 16px rgba(26,86,219,0.25)",
      }}>
        {member.name.split(" ").map(function(n) { return n[0]; }).join("")}
      </div>

      {/* Role badge */}
      <span style={{
        display:      "inline-block",
        background:   "#EBF2FF",
        color:        "#1A56DB",
        fontSize:     "0.72rem",
        fontWeight:   600,
        padding:      "0.2rem 0.75rem",
        borderRadius: "999px",
        marginBottom: "0.5rem",
      }}>
        {member.role}
      </span>

      {/* Name */}
      <h3 style={{
        fontSize:     "1rem",
        fontWeight:   700,
        color:        "#0F172A",
        marginBottom: "0.25rem",
      }}>
        {member.name}
      </h3>

      {/* Year + Branch */}
      <p style={{
        fontSize:     "0.8125rem",
        color:        "#6B7280",
        marginBottom: "1rem",
      }}>
        {member.year} — {member.branch}
      </p>

      {/* Social links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.625rem" }}>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width:          "32px",
            height:         "32px",
            borderRadius:   "8px",
            background:     "#EBF2FF",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            color:          "#1A56DB",
            textDecoration: "none",
            transition:     "all 0.2s ease",
          }}
        >
          <FaLinkedin size={14} />
        </a>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width:          "32px",
            height:         "32px",
            borderRadius:   "8px",
            background:     "#F1F5F9",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            color:          "#374151",
            textDecoration: "none",
            transition:     "all 0.2s ease",
          }}
        >
          <FaGithub size={14} />
        </a>
      </div>
    </motion.div>
  );
}

function FacultyCard({ faculty, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{
        background:   "white",
        borderRadius: "1.25rem",
        border:       "1px solid #E5E7EB",
        padding:      "2rem",
        display:      "flex",
        gap:          "1.25rem",
        alignItems:   "center",
        boxShadow:    "0 2px 12px rgba(0,0,0,0.04)",
      }}
    >
      {/* Avatar */}
      <div style={{
        width:          "64px",
        height:         "64px",
        borderRadius:   "50%",
        background:     "linear-gradient(135deg, #0F172A, #1A56DB)",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        fontSize:       "1.25rem",
        fontWeight:     700,
        color:          "white",
        flexShrink:     0,
      }}>
        {faculty.name.split(" ").map(function(n) { return n[0]; }).join("").slice(0, 2)}
      </div>

      <div style={{ flex: 1 }}>
        <span style={{
          display:      "inline-block",
          background:   "#F1F5F9",
          color:        "#475569",
          fontSize:     "0.7rem",
          fontWeight:   600,
          padding:      "0.15rem 0.6rem",
          borderRadius: "999px",
          marginBottom: "0.375rem",
          textTransform:"uppercase",
          letterSpacing:"0.05em",
        }}>
          {faculty.role}
        </span>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.2rem" }}>
          {faculty.name}
        </h3>
        <p style={{ fontSize: "0.8125rem", color: "#6B7280", marginBottom: "0.5rem" }}>
          {faculty.designation}
        </p>
        <a
          href={"mailto:" + faculty.email}
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            "0.375rem",
            fontSize:       "0.8125rem",
            color:          "#1A56DB",
            textDecoration: "none",
          }}
        >
          <HiMail size={14} />
          {faculty.email}
        </a>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <>
      {/* ── Faculty Coordinators ── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "4rem", background: "#F8FAFF" }}>
        <div style={{
          maxWidth: "1280px", marginLeft: "auto", marginRight: "auto",
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)", paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "3rem" }}
          >
            <span className="badge" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
              Faculty
            </span>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#0F172A", letterSpacing: "-0.02em",
            }}>
              Faculty Coordinators
            </h2>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {FACULTY_COORDINATORS.map(function(f, i) {
              return <FacultyCard key={f.id} faculty={f} index={i} />;
            })}
          </div>
        </div>
      </section>

      {/* ── Current Council ── */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem", background: "white" }}>
        <div style={{
          maxWidth: "1280px", marginLeft: "auto", marginRight: "auto",
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)", paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "3rem" }}
          >
            <span className="badge" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
              Batch 2024–25
            </span>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#0F172A", letterSpacing: "-0.02em",
            }}>
              Current Council
            </h2>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1.25rem",
          }}>
            {COUNCIL_MEMBERS.map(function(m, i) {
              return <MemberCard key={m.id} member={m} index={i} />;
            })}
          </div>
        </div>
      </section>

      {/* ── Past Batches Timeline ── */}
      <section style={{ paddingTop: "4rem", paddingBottom: "5rem", background: "#F8FAFF" }}>
        <div style={{
          maxWidth: "1280px", marginLeft: "auto", marginRight: "auto",
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)", paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "3rem" }}
          >
            <span className="badge" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
              Our Legacy
            </span>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#0F172A", letterSpacing: "-0.02em",
            }}>
              Past Council Batches
            </h2>
          </motion.div>

          <div style={{ maxWidth: "640px", display: "flex", flexDirection: "column" }}>
            {PAST_BATCHES.map(function(batch, i) {
              return (
                <div key={batch.batch} style={{ display: "flex", gap: "1.5rem", position: "relative" }}>
                  {/* Timeline dot + line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      style={{
                        width:        "14px",
                        height:       "14px",
                        borderRadius: "50%",
                        background:   "#1A56DB",
                        boxShadow:    "0 0 0 4px #DBEAFE",
                        marginTop:    "1.25rem",
                        flexShrink:   0,
                        zIndex:       1,
                      }}
                    />
                    {i < PAST_BATCHES.length - 1 && (
                      <div style={{
                        width:      "2px",
                        flexGrow:   1,
                        background: "linear-gradient(180deg, #BFDBFE, #EFF6FF)",
                        minHeight:  "2rem",
                      }} />
                    )}
                  </div>

                  {/* Batch card */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{
                      flex:         1,
                      background:   "white",
                      borderRadius: "1rem",
                      border:       "1px solid #E5E7EB",
                      padding:      "1.25rem 1.5rem",
                      marginBottom: "1rem",
                      boxShadow:    "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <span style={{
                        background:   "linear-gradient(135deg, #1A56DB, #3B82F6)",
                        color:        "white",
                        fontSize:     "0.8125rem",
                        fontWeight:   700,
                        padding:      "0.2rem 0.75rem",
                        borderRadius: "999px",
                      }}>
                        {batch.batch}
                      </span>
                      <span style={{ fontSize: "0.8125rem", color: "#6B7280" }}>
                        President: <strong style={{ color: "#0F172A" }}>{batch.president}</strong>
                      </span>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
                      {batch.achievement}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}