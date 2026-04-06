import { motion } from "framer-motion";
import { HiLightBulb, HiFlag, HiHeart } from "react-icons/hi";

const ITEMS = [
  {
    icon:  HiLightBulb,
    label: "Our Vision",
    color: "#1A56DB",
    bg:    "#EBF2FF",
    text:  "To be a premier student chapter that nurtures technically sound, socially aware, and industry-ready engineers who lead innovation in electronics and telecommunication.",
  },
  {
    icon:  HiFlag,
    label: "Our Mission",
    color: "#0F766E",
    bg:    "#CCFBF1",
    text:  "To provide students with hands-on technical experiences, industry exposure, and leadership opportunities through events, projects, internships, and collaborative learning.",
  },
  {
    icon:  HiHeart,
    label: "Our Values",
    color: "#BE185D",
    bg:    "#FCE7F3",
    text:  "Excellence, Collaboration, Inclusivity, and Continuous Learning. We believe every student deserves a platform to grow and every idea deserves a chance to become reality.",
  },
];

export default function VisionMission() {
  return (
    <section style={{
      paddingTop:    "5rem",
      paddingBottom: "5rem",
      background:    "linear-gradient(135deg, #0F172A 0%, #1A56DB 100%)",
    }}>
      <div style={{
        maxWidth:    "1280px",
        marginLeft:  "auto",
        marginRight: "auto",
        paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
        paddingRight: "clamp(1.5rem, 5vw, 5rem)",
      }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span style={{
            display:       "inline-block",
            background:    "rgba(255,255,255,0.15)",
            color:         "rgba(255,255,255,0.9)",
            padding:       "0.375rem 1rem",
            borderRadius:  "999px",
            fontSize:      "0.8125rem",
            fontWeight:    500,
            marginBottom:  "1rem",
          }}>
            What Drives Us
          </span>
          <h2 style={{
            fontSize:      "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight:    800,
            color:         "white",
            letterSpacing: "-0.02em",
          }}>
            Vision, Mission & Values
          </h2>
        </motion.div>

        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap:                 "1.5rem",
        }}>
          {ITEMS.map(function(item, i) {
            var Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background:     "rgba(255,255,255,0.08)",
                  border:         "1px solid rgba(255,255,255,0.15)",
                  borderRadius:   "1.25rem",
                  padding:        "2rem",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div style={{
                  width:          "52px",
                  height:         "52px",
                  borderRadius:   "14px",
                  background:     "rgba(255,255,255,0.15)",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  marginBottom:   "1.25rem",
                }}>
                  <Icon size={24} color="white" />
                </div>
                <h3 style={{
                  fontSize:     "1.125rem",
                  fontWeight:   700,
                  color:        "white",
                  marginBottom: "0.875rem",
                }}>
                  {item.label}
                </h3>
                <p style={{
                  fontSize:   "0.9rem",
                  color:      "rgba(255,255,255,0.7)",
                  lineHeight: 1.75,
                  margin:     0,
                }}>
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}