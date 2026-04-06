import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";

const HIGHLIGHTS = [
  "Recognized IETE student chapter since 2001",
  "Industry-connected faculty coordinators",
  "Hands-on workshops and technical events",
  "Strong alumni network across top companies",
  "Open to all ECE & related branch students",
];

export default function AboutSnapshot() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} style={{
      paddingTop:    "6rem",
      paddingBottom: "6rem",
      background:    "white",
    }}>
      <div style={{
        maxWidth:    "1280px",
        marginLeft:  "auto",
        marginRight: "auto",
        paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
        paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        display:     "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap:         "4rem",
        alignItems:  "center",
      }}>

        {/* Left — Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Label */}
          <span className="badge" style={{ marginBottom: "1.25rem", display: "inline-block" }}>
            Who We Are
          </span>

          <h2 style={{
            fontSize:     "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight:   800,
            color:        "#0F172A",
            lineHeight:   1.2,
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
          }}>
            More than a club —<br />
            <span style={{
              background: "linear-gradient(135deg, #1A56DB, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              a launchpad.
            </span>
          </h2>

          <p style={{
            fontSize:     "1rem",
            color:        "#4B5563",
            lineHeight:   1.8,
            marginBottom: "2rem",
          }}>
            The IETE Student Chapter at our college is a hub for budding engineers
            passionate about electronics and telecommunication. We create an ecosystem
            where curiosity meets execution — from ideation to deployment.
          </p>

          {/* Highlights list */}
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
            {HIGHLIGHTS.map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                <HiCheckCircle size={20} style={{ color: "#1A56DB", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>

          <Link href="/about" className="btn-primary">
            Learn More About Us <HiArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Right — Visual card stack */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          style={{ position: "relative", minHeight: "420px" }}
        >

          {/* Background card */}
          <div style={{
            position:     "absolute",
            top:          "2rem",
            left:         "2rem",
            right:        0,
            bottom:       0,
            background:   "linear-gradient(135deg, #EBF2FF, #DBEAFE)",
            borderRadius: "1.5rem",
            border:       "1px solid #BFDBFE",
          }} />

          {/* Main card */}
          <div style={{
            position:     "absolute",
            top:          0,
            left:         0,
            right:        "2rem",
            bottom:       "2rem",
            background:   "white",
            borderRadius: "1.5rem",
            border:       "1px solid #E5E7EB",
            boxShadow:    "0 8px 40px rgba(26,86,219,0.12)",
            padding:      "2rem",
            display:      "flex",
            flexDirection:"column",
            justifyContent:"space-between",
          }}>

            {/* Top section */}
            <div>
              <div style={{
                width:          "52px",
                height:         "52px",
                borderRadius:   "14px",
                background:     "linear-gradient(135deg, #1A56DB, #3B82F6)",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                marginBottom:   "1.25rem",
                boxShadow:      "0 4px 16px rgba(26,86,219,0.3)",
              }}>
                <span style={{ color: "white", fontWeight: 800, fontSize: "14px" }}>IETE</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.5rem" }}>
                IETE Student Chapter
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.6 }}>
                An officially recognized chapter under IETE India, fostering technical excellence.
              </p>
            </div>

            {/* Stats inside card */}
            <div style={{
              display:             "grid",
              gridTemplateColumns: "1fr 1fr",
              gap:                 "1rem",
              marginTop:           "1.5rem",
            }}>
              {[
                { value: "500+", label: "Members"  },
                { value: "2001", label: "Est. Year" },
                { value: "50+",  label: "Events"   },
                { value: "30+",  label: "Projects"  },
              ].map(({ value, label }) => (
                <div key={label} style={{
                  background:   "#F8FAFF",
                  borderRadius: "0.75rem",
                  padding:      "0.875rem",
                  textAlign:    "center",
                  border:       "1px solid #EBF2FF",
                }}>
                  <div style={{ fontSize: "1.375rem", fontWeight: 800, color: "#1A56DB" }}>{value}</div>
                  <div style={{ fontSize: "0.75rem", color: "#6B7280", fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}