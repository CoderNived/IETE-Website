import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
});

const CYCLING_WORDS = ["Innovation", "Technology", "Excellence", "Leadership", "Research"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      position:   "relative",
      minHeight:  "100vh",
      display:    "flex",
      alignItems: "center",
      overflow:   "hidden",
      background: "linear-gradient(135deg, #F8FAFF 0%, #EBF2FF 50%, #F0F7FF 100%)",
      marginTop:  "-72px",   /* pull up behind transparent navbar */
    }}>

      {/* Three.js canvas */}
      <HeroCanvas />

      {/* Gradient overlay */}
      <div style={{
        position:   "absolute",
        inset:      0,
        background: "linear-gradient(90deg, rgba(248,250,255,0.95) 0%, rgba(248,250,255,0.75) 55%, rgba(248,250,255,0.1) 100%)",
        zIndex:     1,
      }} />

      {/* Content */}
      <div style={{
        position:      "relative",
        zIndex:        2,
        width:         "150%",
        maxWidth:      "1280px",
        marginLeft:    "auto",
        marginRight:   "auto",
        paddingLeft:   "clamp(1.5rem, 5vw, 5rem)",
        paddingRight:  "clamp(1.5rem, 5vw, 5rem)",
        paddingTop:    "10rem",   /* 72px navbar + breathing room */
        paddingBottom: "6rem",
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "680px" }}
        >

          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="badge" style={{ marginBottom: "1.5rem", display: "inline-flex", gap: "0.375rem", alignItems: "center" }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: "#1A56DB", animation: "pulse 2s infinite",
              }} />
              IETE Student Chapter — Est. 2001
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} style={{
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800,
            lineHeight: 1.15, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: "0.5rem",
          }}>
            Engineering
          </motion.h1>

          {/* Cycling word */}
          <motion.div variants={itemVariants}
            style={{ marginBottom: "0.5rem", height: "clamp(2.75rem, 5.5vw, 4.5rem)", overflow: "hidden" }}>
            <motion.h1
              key={wordIndex}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800,
                lineHeight: 1.15, letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #1A56DB, #3B82F6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}
            >
              {CYCLING_WORDS[wordIndex]}
            </motion.h1>
          </motion.div>

          <motion.h1 variants={itemVariants} style={{
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800,
            lineHeight: 1.15, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: "1.75rem",
          }}>
            Together
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} style={{
            fontSize: "1.125rem", color: "#4B5563", lineHeight: 1.75,
            marginBottom: "2.5rem", maxWidth: "520px",
          }}>
            The IETE Student Chapter bridges the gap between classroom learning
            and real-world engineering — through events, projects, internships,
            and a community that grows together.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/events" className="btn-primary"
              style={{ fontSize: "1rem", padding: "0.875rem 1.75rem" }}>
              Explore Events <HiArrowRight size={18} />
            </Link>
            <a href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
              target="_blank" rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: "1rem", padding: "0.875rem 1.75rem" }}>
              <FaWhatsapp size={18} style={{ color: "#25D366" }} />
              Join WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants}
            style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem", flexWrap: "wrap" }}>
            {[
              { value: "500+", label: "Members"         },
              { value: "50+",  label: "Events Hosted"   },
              { value: "30+",  label: "Projects Built"  },
              { value: "15+",  label: "Years of Legacy" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1A56DB", lineHeight: 1, marginBottom: "0.25rem" }}>
                  {value}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "#6B7280", fontWeight: 500 }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center",
          gap: "0.375rem", color: "#9CA3AF", fontSize: "0.75rem",
          fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <HiChevronDown size={20} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}