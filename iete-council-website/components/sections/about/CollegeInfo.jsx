import { motion } from "framer-motion";
import { HiLocationMarker, HiGlobe, HiAcademicCap, HiOfficeBuilding } from "react-icons/hi";

const COLLEGE_FACTS = [
  { icon: HiAcademicCap,   label: "Established",   value: "1983"                    },
  { icon: HiOfficeBuilding, label: "Campus",        value: "Vidyavihar, Mumbai"      },
  { icon: HiLocationMarker, label: "Affiliation",   value: "Mumbai University"       },
  { icon: HiGlobe,          label: "IETE Chapter",  value: "Active since 2001"       },
];

export default function CollegeInfo() {
  return (
    <section style={{
      paddingTop:    "5rem",
      paddingBottom: "4rem",
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

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>
            Our Institution
          </span>
          <h2 style={{
            fontSize:      "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight:    800,
            color:         "#0F172A",
            lineHeight:    1.2,
            marginBottom:  "1.25rem",
            letterSpacing: "-0.02em",
          }}>
            K.J. Somaiya College<br />
            <span style={{
              background:           "linear-gradient(135deg, #1A56DB, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor:  "transparent",
              backgroundClip:       "text",
            }}>
              of Engineering
            </span>
          </h2>
          <p style={{
            fontSize:     "0.9375rem",
            color:        "#4B5563",
            lineHeight:   1.8,
            marginBottom: "2rem",
          }}>
            K.J. Somaiya College of Engineering is a premier institution in Mumbai,
            known for its strong technical foundation, research culture, and
            industry partnerships. The IETE Student Chapter here has been a
            cornerstone of technical activity since 2001.
          </p>

          {/* College facts */}
          <div style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "1rem",
          }}>
            {COLLEGE_FACTS.map(function(fact, i) {
              var Icon = fact.icon;
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    background:   "#F8FAFF",
                    borderRadius: "0.875rem",
                    padding:      "1rem",
                    border:       "1px solid #EBF2FF",
                    display:      "flex",
                    gap:          "0.75rem",
                    alignItems:   "flex-start",
                  }}
                >
                  <div style={{
                    width:          "36px",
                    height:         "36px",
                    borderRadius:   "10px",
                    background:     "#EBF2FF",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    flexShrink:     0,
                  }}>
                    <Icon size={18} color="#1A56DB" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "#9CA3AF", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {fact.label}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#0F172A", fontWeight: 600 }}>
                      {fact.value}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right — decorative card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: "relative", minHeight: "360px" }}
        >
          {/* Back card */}
          <div style={{
            position:     "absolute",
            top:          "1.5rem",
            left:         "1.5rem",
            right:        0,
            bottom:       0,
            background:   "linear-gradient(135deg, #EBF2FF, #DBEAFE)",
            borderRadius: "1.5rem",
            border:       "1px solid #BFDBFE",
          }} />

          {/* Front card */}
          <div style={{
            position:      "absolute",
            top:           0,
            left:          0,
            right:         "1.5rem",
            bottom:        "1.5rem",
            background:    "white",
            borderRadius:  "1.5rem",
            border:        "1px solid #E5E7EB",
            boxShadow:     "0 8px 40px rgba(26,86,219,0.12)",
            padding:       "2rem",
            display:       "flex",
            flexDirection: "column",
            gap:           "1.25rem",
          }}>
            {/* IETE logo box */}
            <div style={{
              width:          "56px",
              height:         "56px",
              borderRadius:   "14px",
              background:     "linear-gradient(135deg, #1A56DB, #3B82F6)",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              boxShadow:      "0 4px 16px rgba(26,86,219,0.3)",
            }}>
              <span style={{ color: "white", fontWeight: 800, fontSize: "13px" }}>IETE</span>
            </div>

            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.375rem" }}>
                IETE Student Chapter
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.6 }}>
                An officially recognized chapter under the Institution of Electronics
                and Telecommunication Engineers, India.
              </p>
            </div>

            {/* Stats row */}
            <div style={{
              display:             "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap:                 "0.75rem",
              marginTop:           "auto",
            }}>
              {[
                { v: "24+", l: "Years"   },
                { v: "50+", l: "Events"  },
                { v: "500+", l: "Alumni" },
              ].map(function(s) {
                return (
                  <div key={s.l} style={{
                    background:   "#F8FAFF",
                    borderRadius: "0.75rem",
                    padding:      "0.75rem 0.5rem",
                    textAlign:    "center",
                    border:       "1px solid #EBF2FF",
                  }}>
                    <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A56DB" }}>{s.v}</div>
                    <div style={{ fontSize: "0.7rem", color: "#6B7280" }}>{s.l}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}