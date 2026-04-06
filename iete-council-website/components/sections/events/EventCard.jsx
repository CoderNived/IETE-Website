import Link from "next/link";
import { motion } from "framer-motion";
import { HiCalendar, HiLocationMarker, HiClock, HiExternalLink, HiPhone } from "react-icons/hi";
import { formatDate } from "@/lib/utils";

const MODE_COLORS = {
  Offline: { bg: "#DCFCE7", color: "#166534" },
  Online:  { bg: "#DBEAFE", color: "#1E40AF" },
};

const DOMAIN_COLORS = {
  Technical: { bg: "#EDE9FE", color: "#5B21B6" },
  Workshop:  { bg: "#FEF3C7", color: "#92400E" },
  Seminar:   { bg: "#FCE7F3", color: "#9D174D" },
  Cultural:  { bg: "#FFEDD5", color: "#9A3412" },
};

export default function EventCard({ event }) {
  const modeStyle   = MODE_COLORS[event.mode]   || MODE_COLORS.Offline;
  const domainStyle = DOMAIN_COLORS[event.domain] || DOMAIN_COLORS.Technical;

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(26,86,219,0.14)" }}
      style={{
        background: "white",
        borderRadius: "1.25rem",
        border: "1px solid #E5E7EB",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        overflow: "hidden",
        display: "flex",              // ✅ IMPORTANT
        flexDirection: "column",      // ✅ IMPORTANT
        height: "100%",               // ✅ IMPORTANT
      }}
    >
      <div style={{ height: "8px", background: "linear-gradient(90deg, #1A56DB, #3B82F6)" }} />

      <div
        style={{
          padding: "1.75rem",
          display: "flex",           // ✅ IMPORTANT
          flexDirection: "column",   // ✅ IMPORTANT
          height: "100%",            // ✅ IMPORTANT
        }}
      >
        {/* Tags */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          <span style={{ padding: "0.2rem 0.65rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 600, background: domainStyle.bg, color: domainStyle.color }}>
            {event.domain}
          </span>

          <span style={{ padding: "0.2rem 0.65rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 600, background: modeStyle.bg, color: modeStyle.color }}>
            {event.mode}
          </span>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem" }}>
          {event.title}
        </h3>

        {/* Meta */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <HiCalendar size={15} color="#1A56DB" />
            <span>{formatDate(event.date)}</span>
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <HiClock size={15} color="#1A56DB" />
            <span>{event.time}</span>
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <HiLocationMarker size={15} color="#1A56DB" />
            <span>{event.venue}</span>
          </div>
        </div>

        {/* Description */}
        <p style={{ marginBottom: "1rem" }}>
          {event.description.length > 120
            ? event.description.slice(0, 120) + "..."
            : event.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          {event.tags?.map(tag => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>

        {/* Contacts */}
        {event.contacts?.map(c => (
          <div key={c.name}>
            {c.name} — {c.role}
            <a href={`tel:${c.phone}`}>
              <HiPhone /> {c.phone}
            </a>
          </div>
        ))}

        {/* ✅ PUSH BUTTON TO BOTTOM */}
        <div style={{ marginTop: "auto" }}>
          <a
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.75rem",
              background: "#1A56DB",
              color: "white",
              borderRadius: "0.75rem",
              textDecoration: "none",
              marginTop: "1rem",
            }}
          >
            Register Now <HiExternalLink size={16} />
          </a>
        </div>

      </div>
    </motion.div>
  );
}