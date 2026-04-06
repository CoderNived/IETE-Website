import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCalendar, HiClock } from "react-icons/hi";
import EventCard     from "@/components/sections/events/EventCard";
import PastEventCard from "@/components/sections/events/EventGallery";
import { UPCOMING_EVENTS, PAST_EVENTS } from "@/data/events";

const TABS = ["Upcoming Events", "Past Events"];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* ── Page Hero ── */}
      <section style={{
        background:    "linear-gradient(135deg, #0F172A 0%, #1A56DB 100%)",
        paddingTop:    "9rem",
        paddingBottom: "5rem",
      }}>
        <div style={{
          maxWidth: "1280px", marginLeft: "auto", marginRight: "auto",
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)", paddingRight: "clamp(1.5rem, 5vw, 5rem)",
          textAlign: "center",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span style={{
              display: "inline-block", background: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.9)", padding: "0.375rem 1rem",
              borderRadius: "999px", fontSize: "0.8125rem", fontWeight: 500,
              letterSpacing: "0.05em", marginBottom: "1.25rem",
            }}>
              What's Happening
            </span>
            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800,
              color: "white", lineHeight: 1.15, marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}>
              Events & Workshops
            </h1>
            <p style={{
              fontSize: "1.0625rem", color: "rgba(255,255,255,0.7)",
              maxWidth: "520px", margin: "0 auto", lineHeight: 1.7,
            }}>
              Stay updated with upcoming events and explore what we've achieved together.
            </p>

            {/* Quick stats */}
            <div style={{
              display: "flex", justifyContent: "center", gap: "3rem",
              marginTop: "2.5rem", flexWrap: "wrap",
            }}>
              {[
                { icon: HiCalendar, value: `${UPCOMING_EVENTS.length} Upcoming`, label: "events this month" },
                { icon: HiClock,    value: `${PAST_EVENTS.length} Past`,         label: "events archived"   },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center", marginBottom: "0.25rem" }}>
                    <Icon size={18} color="rgba(255,255,255,0.7)" />
                    <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "white" }}>{value}</span>
                  </div>
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tabs ── */}
      <div style={{
        position:   "sticky",
        top:        "72px",
        zIndex:     30,
        background: "white",
        borderBottom: "1px solid #E5E7EB",
        boxShadow:  "0 2px 12px rgba(0,0,0,0.04)",
      }}>
        <div style={{
          maxWidth: "1280px", marginLeft: "auto", marginRight: "auto",
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)", paddingRight: "clamp(1.5rem, 5vw, 5rem)",
          display: "flex", gap: "0",
        }}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                padding:         "1.125rem 1.75rem",
                fontWeight:      600,
                fontSize:        "0.9375rem",
                border:          "none",
                background:      "transparent",
                cursor:          "pointer",
                color:           activeTab === i ? "#1A56DB" : "#6B7280",
                borderBottom:    activeTab === i ? "2px solid #1A56DB" : "2px solid transparent",
                transition:      "all 0.2s ease",
                position:        "relative",
              }}
            >
              {tab}
              {i === 0 && (
                <span style={{
                  marginLeft:   "0.5rem",
                  background:   "#EBF2FF",
                  color:        "#1A56DB",
                  fontSize:     "0.72rem",
                  fontWeight:   700,
                  padding:      "0.15rem 0.5rem",
                  borderRadius: "999px",
                }}>
                  {UPCOMING_EVENTS.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ── */}
      <section style={{
        paddingTop:    "4rem",
        paddingBottom: "6rem",
        background:    "#F8FAFF",
        minHeight:     "60vh",
      }}>
        <div style={{
          maxWidth: "1280px", marginLeft: "auto", marginRight: "auto",
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)", paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}>

          <AnimatePresence mode="wait">

            {/* ── Upcoming Events ── */}
            {activeTab === 0 && (
              <motion.div
                key="upcoming"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ marginBottom: "2rem" }}>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.375rem" }}>
                    Upcoming Events
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "#6B7280" }}>
                    Register early — spots fill up fast.
                  </p>
                </div>

                <div style={{
                  display:             "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap:                 "1.5rem",
                }}>
                  {UPCOMING_EVENTS.map((event, i) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <EventCard event={event} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Past Events Timeline ── */}
            {activeTab === 1 && (
              <motion.div
                key="past"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ marginBottom: "2.5rem" }}>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.375rem" }}>
                    Past Events
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "#6B7280" }}>
                    A timeline of everything we've built and celebrated together.
                  </p>
                </div>

                <div style={{ maxWidth: "760px" }}>
                  {PAST_EVENTS.map((event, i) => (
                    <PastEventCard key={event.id} event={event} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>
    </>
  );
}