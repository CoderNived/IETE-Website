import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const SOCIALS = [
  {
    icon: FaInstagram,
    label: "Instagram",
    handle: "@iete_chapter",
    desc: "Event photos & reels",
    href: "https://instagram.com",
    color: "#E1306C",
    bg: "#FCE4EC",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "IETE Student Chapter",
    desc: "Professional updates",
    href: "https://linkedin.com",
    color: "#0A66C2",
    bg: "#E8F0FE",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    handle: "iete-council",
    desc: "Open source projects",
    href: "https://github.com",
    color: "#171515",
    bg: "#F0F0F0",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    handle: "IETE Council",
    desc: "Talks & workshops",
    href: "https://youtube.com",
    color: "#FF0000",
    bg: "#FFEBEE",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    handle: "Community Group",
    desc: "Join 500+ members",
    href: "https://chat.whatsapp.com/YOUR_GROUP_LINK",
    color: "#25D366",
    bg: "#E8F5E9",
  },
];

export default function SocialStrip() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="badge" style={{ marginBottom: "1rem" }}>
            Stay Connected
          </span>

          <h2 style={{ fontSize: "2.5rem", fontWeight: 800 }}>
            Find us everywhere
          </h2>

          <p style={{ color: "#6B7280", maxWidth: "480px", margin: "0 auto" }}>
            Follow our journey across platforms and never miss an update.
          </p>
        </motion.div>

        {/* Social Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {SOCIALS.map(
            ({ icon: Icon, label, handle, desc, href, color, bg }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "2rem",
                  borderRadius: "1rem",
                  border: "1px solid #E5E7EB",
                  background: "white",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={24} color={color} />
                </div>

                <strong>{label}</strong>
                <span style={{ color }}>{handle}</span>
                <small>{desc}</small>
              </motion.a>
            )
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: "4rem",
            background: "#1A56DB",
            borderRadius: "1.5rem",
            padding: "2rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <h3 style={{ color: "white" }}>
              Ready to be part of something big?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              Join 500+ students already in our community.
            </p>
          </div>

          {/* ✅ FIXED BUTTON */}
          <a
            href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "white",
              color: "#1A56DB",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            <FaWhatsapp color="#25D366" />
            Join WhatsApp Group
          </a>
        </motion.div>
      </div>
    </section>
  );
}