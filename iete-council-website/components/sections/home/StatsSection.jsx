import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { HiUserGroup, HiCalendar, HiCode, HiAcademicCap } from "react-icons/hi";

const STATS = [
  { icon: HiUserGroup,    value: 500,  suffix: "+", label: "Active Members",     desc: "Students across all years"         },
  { icon: HiCalendar,     value: 50,   suffix: "+", label: "Events Hosted",      desc: "Workshops, hackathons & seminars"  },
  { icon: HiCode,         value: 30,   suffix: "+", label: "Projects Built",     desc: "Real-world engineering solutions"  },
  { icon: HiAcademicCap,  value: 15,   suffix: "+", label: "Years of Excellence",desc: "Serving since 2001"               },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} style={{
      background:    "linear-gradient(135deg, #1A56DB 0%, #1241A8 100%)",
      paddingTop:    "5rem",
      paddingBottom: "5rem",
    }}>
      <div style={{
        maxWidth:    "1280px",
        marginLeft:  "auto",
        marginRight: "auto",
        paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
        paddingRight: "clamp(1.5rem, 5vw, 5rem)",
      }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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
            letterSpacing: "0.05em",
            marginBottom:  "1rem",
          }}>
            Our Impact in Numbers
          </span>
          <h2 style={{
            fontSize:   "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color:      "white",
            lineHeight: 1.2,
          }}>
            A legacy built on <span style={{ opacity: 0.75 }}>dedication</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap:                 "2rem",
        }}>
          {STATS.map(({ icon: Icon, value, suffix, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background:   "rgba(255,255,255,0.1)",
                border:       "1px solid rgba(255,255,255,0.15)",
                borderRadius: "1.25rem",
                padding:      "2rem 1.5rem",
                textAlign:    "center",
                backdropFilter: "blur(8px)",
                transition:   "transform 0.3s ease, background 0.3s ease",
                cursor:       "default",
              }}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              {/* Icon */}
              <div style={{
                width:          "52px",
                height:         "52px",
                borderRadius:   "14px",
                background:     "rgba(255,255,255,0.15)",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                margin:         "0 auto 1.25rem",
              }}>
                <Icon size={24} color="white" />
              </div>

              {/* Animated number */}
              <div style={{
                fontSize:    "clamp(2rem, 4vw, 3rem)",
                fontWeight:  800,
                color:       "white",
                lineHeight:  1,
                marginBottom:"0.375rem",
              }}>
                {inView ? (
                  <CountUp end={value} duration={2.5} suffix={suffix} />
                ) : (
                  `0${suffix}`
                )}
              </div>

              <div style={{ fontSize: "1rem", fontWeight: 600, color: "white", marginBottom: "0.375rem" }}>
                {label}
              </div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                {desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}