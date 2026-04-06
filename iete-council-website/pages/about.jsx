import { motion } from "framer-motion";
import Link from "next/link";
import CollegeInfo   from "@/components/sections/about/CollegeInfo";
import VisionMission from "@/components/sections/about/VisionMission";
import TeamSection   from "@/components/sections/about/TeamTimeline";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function AboutPage() {
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
              Know Us Better
            </span>
            <h1 style={{
              fontSize:      "clamp(2rem, 5vw, 3.5rem)",
              fontWeight:    800,
              color:         "white",
              lineHeight:    1.15,
              marginBottom:  "1rem",
              letterSpacing: "-0.02em",
            }}>
              About IETE Council
            </h1>
            <p style={{
              fontSize:  "1.0625rem",
              color:     "rgba(255,255,255,0.7)",
              maxWidth:  "520px",
              margin:    "0 auto",
              lineHeight: 1.7,
            }}>
              A legacy of 24+ years, 500+ members, and a community that never stops building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── All sections ── */}
      <CollegeInfo />
      <VisionMission />
      <TeamSection />

      {/* ── Join CTA ── */}
      <section id="join" style={{
        paddingTop:    "5rem",
        paddingBottom: "5rem",
        background:    "white",
      }}>
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
              padding:       "4rem 3rem",
              textAlign:     "center",
              boxShadow:     "0 20px 60px rgba(26,86,219,0.3)",
            }}
          >
            <h2 style={{
              fontSize:     "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight:   800,
              color:        "white",
              marginBottom: "1rem",
              letterSpacing:"-0.02em",
            }}>
              Ready to join the council?
            </h2>
            <p style={{
              fontSize:     "1rem",
              color:        "rgba(255,255,255,0.75)",
              marginBottom: "2.5rem",
              maxWidth:     "480px",
              margin:       "0 auto 2.5rem",
              lineHeight:   1.7,
            }}>
              Applications open every semester. Join 500+ students who are already
              building, learning, and leading together.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
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
                Apply Now <HiArrowRight size={18} />
              </a>
              <a
                href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  gap:            "0.5rem",
                  padding:        "0.875rem 2rem",
                  background:     "rgba(255,255,255,0.15)",
                  color:          "white",
                  fontWeight:     600,
                  borderRadius:   "0.875rem",
                  textDecoration: "none",
                  fontSize:       "1rem",
                  border:         "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <FaWhatsapp size={18} color="#25D366" />
                WhatsApp Group
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}