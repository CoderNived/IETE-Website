import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiCalendar, HiCode, HiBriefcase,
  HiPhotograph, HiBookOpen, HiArrowRight,
} from "react-icons/hi";

const HIGHLIGHTS = [
  {
    icon:        HiCalendar,
    title:       "Events & Workshops",
    description: "From hackathons to guest lectures — we run technical and non-technical events that build real skills.",
    link:        "/events",
    linkLabel:   "View Events",
    color:       "#1A56DB",
    bg:          "#EBF2FF",
  },
  {
    icon:        HiCode,
    title:       "Projects & Research",
    description: "Student-led projects, faculty-guided research, and published papers under the IETE banner.",
    link:        "/projects",
    linkLabel:   "See Projects",
    color:       "#0F766E",
    bg:          "#CCFBF1",
  },
  {
    icon:        HiBriefcase,
    title:       "Internship Portal",
    description: "Our unique internship board where faculty post opportunities and students apply — all in one place.",
    link:        "/internship",
    linkLabel:   "Find Internships",
    color:       "#7C3AED",
    bg:          "#EDE9FE",
  },
  {
    icon:        HiBookOpen,
    title:       "Technical Blogs",
    description: "Student-written blogs covering tech trends, project experiences, career advice and more.",
    link:        "/blogs",
    linkLabel:   "Read Blogs",
    color:       "#B45309",
    bg:          "#FEF3C7",
  },
  {
    icon:        HiPhotograph,
    title:       "Gallery",
    description: "Relive our best moments — workshops, fests, team activities and annual celebrations.",
    link:        "/gallery",
    linkLabel:   "View Gallery",
    color:       "#BE185D",
    bg:          "#FCE7F3",
  },
  {
    icon:        HiCalendar,
    title:       "About the Council",
    description: "Meet our team, know our vision, and learn about the legacy of IETE at our college.",
    link:        "/about",
    linkLabel:   "Meet the Team",
    color:       "#0369A1",
    bg:          "#E0F2FE",
  },
];

export default function HighlightsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} style={{
      paddingTop:    "6rem",
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

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>
            Everything We Offer
          </span>
          <h2 style={{
            fontSize:      "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight:    800,
            color:         "#0F172A",
            lineHeight:    1.2,
            marginBottom:  "1rem",
            letterSpacing: "-0.02em",
          }}>
            One chapter. Endless opportunities.
          </h2>
          <p style={{
            fontSize:  "1.0625rem",
            color:     "#6B7280",
            maxWidth:  "560px",
            margin:    "0 auto",
            lineHeight: 1.7,
          }}>
            Whether you want to build, research, write, or lead —
            IETE has a space for every kind of engineer.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap:                 "1.5rem",
        }}>
          {HIGHLIGHTS.map(({ icon: Icon, title, description, link, linkLabel, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background:   "white",
                borderRadius: "1.25rem",
                border:       "1px solid #E5E7EB",
                padding:      "2rem",
                boxShadow:    "0 2px 12px rgba(0,0,0,0.04)",
                transition:   "all 0.3s ease",
                display:      "flex",
                flexDirection:"column",
                gap:          "1rem",
              }}
              whileHover={{
                y:         -4,
                boxShadow: "0 12px 40px rgba(26,86,219,0.12)",
              }}
            >
              {/* Icon */}
              <div style={{
                width:          "48px",
                height:         "48px",
                borderRadius:   "12px",
                background:     bg,
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                flexShrink:     0,
              }}>
                <Icon size={22} color={color} />
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize:     "1.0625rem",
                  fontWeight:   700,
                  color:        "#0F172A",
                  marginBottom: "0.5rem",
                }}>
                  {title}
                </h3>
                <p style={{
                  fontSize:  "0.875rem",
                  color:     "#6B7280",
                  lineHeight: 1.7,
                }}>
                  {description}
                </p>
              </div>

              {/* Link */}
              <Link
                href={link}
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  gap:            "0.375rem",
                  fontSize:       "0.875rem",
                  fontWeight:     600,
                  color:          color,
                  textDecoration: "none",
                  transition:     "gap 0.2s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.gap = "0.625rem"}
                onMouseLeave={e => e.currentTarget.style.gap = "0.375rem"}
              >
                {linkLabel} <HiArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}