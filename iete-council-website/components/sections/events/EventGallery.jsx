import { motion } from "framer-motion";
import { HiCalendar, HiDocumentDownload, HiPhotograph } from "react-icons/hi";
import { formatDate } from "@/lib/utils";

export default function PastEventCard({ event, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        position: "relative",
      }}
    >
      {/* Timeline line + dot */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1A56DB, #3B82F6)",
            boxShadow: "0 0 0 4px #DBEAFE",
            flexShrink: 0,
            marginTop: "1.5rem",
            zIndex: 1,
          }}
        />
        <div
          style={{
            width: "2px",
            flexGrow: 1,
            background: "linear-gradient(180deg, #BFDBFE, transparent)",
            marginTop: "0.5rem",
          }}
        />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{
          flex: 1,
          background: "white",
          borderRadius: "1.25rem",
          border: "1px solid #E5E7EB",
          padding: "1.75rem",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          marginBottom: "2rem",
        }}
      >
        {/* Date badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.75rem",
          }}
        >
          <HiCalendar size={15} color="#1A56DB" />
          <span
            style={{
              fontSize: "0.8125rem",
              color: "#1A56DB",
              fontWeight: 600,
            }}
          >
            {formatDate(event?.date)}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "#0F172A",
            marginBottom: "0.625rem",
          }}
        >
          {event?.title}
        </h3>

        {/* Highlight badge */}
        {event?.highlight && (
          <div
            style={{
              display: "inline-block",
              background: "#EBF2FF",
              color: "#1A56DB",
              fontSize: "0.75rem",
              fontWeight: 600,
              padding: "0.25rem 0.75rem",
              borderRadius: "999px",
              marginBottom: "0.875rem",
            }}
          >
            ✦ {event.highlight}
          </div>
        )}

        {/* Summary */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "#6B7280",
            lineHeight: 1.7,
            marginBottom: "1.25rem",
          }}
        >
          {event?.summary || ""}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            flexWrap: "wrap",
            marginBottom: "1.25rem",
          }}
        >
          {event?.tags?.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.2rem 0.6rem",
                borderRadius: "6px",
                fontSize: "0.72rem",
                fontWeight: 500,
                background: "#F1F5F9",
                color: "#475569",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Gallery */}
        {event?.gallery?.length > 0 && (
          <div style={{ marginBottom: "1.25rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
              }}
            >
              <HiPhotograph size={14} /> Gallery
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              {event.gallery.slice(0, 3).map((img, i) => (
                <div
                  key={i}
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "0.5rem",
                    background:
                      "linear-gradient(135deg, #EBF2FF, #DBEAFE)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #BFDBFE",
                  }}
                >
                  <HiPhotograph size={22} color="#93C5FD" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Report */}
        {event?.report && (
          <a
            href={event.report}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.625rem 1.25rem",
              background: "#F8FAFF",
              border: "1px solid #BFDBFE",
              borderRadius: "0.625rem",
              color: "#1A56DB",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#EBF2FF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#F8FAFF";
            }}
          >
            <HiDocumentDownload size={18} />
            Download Report PDF
          </a>
        )}
      </motion.div>
    </div>
  );
}