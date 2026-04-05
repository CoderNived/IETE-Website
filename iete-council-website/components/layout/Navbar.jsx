import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

/**
 * Navigation links config.
 * Add/remove pages here — the navbar updates automatically.
 */
const NAV_LINKS = [
  { label: "Home",        href: "/"            },
  { label: "About",       href: "/about"       },
  { label: "Events",      href: "/events"      },
  { label: "Blogs",       href: "/blogs"       },
  { label: "Internship",  href: "/internship"  },
  { label: "Projects",    href: "/projects"    },
  { label: "Gallery",     href: "/gallery"     },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]     = useState(false);
  const router = useRouter();

  /* ── Detect scroll position ── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  /* ── Prevent body scroll when menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <>
      {/* ── Main navbar bar ── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0,    opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          right:           0,
          zIndex:          50,
          transition:      "all 0.3s ease",
          backgroundColor: isScrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter:  isScrolled ? "blur(12px)"             : "none",
          borderBottom:    isScrolled ? "1px solid #E5E7EB"      : "1px solid transparent",
          boxShadow:       isScrolled ? "0 2px 20px rgba(26,86,219,0.08)" : "none",
        }}
      >
        <div className="section-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

          {/* ── Logo + Brand ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
            {/* IETE Logo circle */}
            <div style={{
              width:           "40px",
              height:          "40px",
              borderRadius:    "10px",
              background:      "linear-gradient(135deg, #1A56DB, #3B82F6)",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              boxShadow:       "0 4px 12px rgba(26,86,219,0.3)",
              flexShrink:      0,
            }}>
              <span style={{ color: "white", fontWeight: 800, fontSize: "13px", letterSpacing: "0.5px" }}>
                IETE
              </span>
            </div>

            {/* Brand text */}
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span style={{
                fontWeight:  700,
                fontSize:    "1rem",
                color:       isScrolled ? "#0F172A" : "#0F172A",
                letterSpacing: "-0.01em",
              }}>
                IETE Council
              </span>
              <span style={{ fontSize: "0.7rem", color: "#6B7280", fontWeight: 400 }}>
                Student Chapter
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
               className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding:        "0.5rem 1rem",
                  borderRadius:   "0.5rem",
                  fontWeight:     500,
                  fontSize:       "0.9375rem",
                  textDecoration: "none",
                  transition:     "all 0.2s ease",
                  color:          isActive(link.href) ? "#1A56DB" : "#374151",
                  background:     isActive(link.href) ? "#EBF2FF" : "transparent",
                  position:       "relative",
                }}
                onMouseEnter={e => {
                  if (!isActive(link.href)) {
                    e.currentTarget.style.background = "#F9FAFB";
                    e.currentTarget.style.color = "#1A56DB";
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive(link.href)) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#374151";
                  }
                }}
              >
                {link.label}
                {/* Active indicator dot */}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position:     "absolute",
                      bottom:       "4px",
                      left:         "50%",
                      transform:    "translateX(-50%)",
                      width:        "4px",
                      height:       "4px",
                      borderRadius: "50%",
                      background:   "#1A56DB",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* ── CTA Button + Hamburger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>

            {/* Join Us button — hidden on small screens */}
            <Link href="/about#join" className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}
                  id="join-btn">
              Join Us
            </Link>

            {/* Hamburger — shown on small screens */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              id="hamburger-btn"
              style={{
                background:  "none",
                border:      "none",
                cursor:      "pointer",
                padding:     "0.5rem",
                borderRadius:"0.5rem",
                color:       "#0F172A",
                display:     "none",     /* shown via CSS below */
              }}
              aria-label="Toggle menu"
            >
              {menuOpen
                ? <HiX size={24} />
                : <HiMenuAlt3 size={24} />
              }
            </button>
          </div>

        </div>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position:        "fixed",
                inset:           0,
                zIndex:          40,
                backgroundColor: "rgba(15,23,42,0.4)",
                backdropFilter:  "blur(4px)",
              }}
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position:        "fixed",
                top:             0,
                right:           0,
                bottom:          0,
                width:           "min(320px, 85vw)",
                zIndex:          45,
                backgroundColor: "white",
                boxShadow:       "-8px 0 40px rgba(0,0,0,0.12)",
                display:         "flex",
                flexDirection:   "column",
                padding:         "1.5rem",
              }}
            >
              {/* Panel header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
                <span style={{ fontWeight: 700, fontSize: "1.125rem", color: "#0F172A" }}>
                  Menu
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem", color: "#6B7280" }}
                >
                  <HiX size={22} />
                </button>
              </div>

              {/* Mobile nav links */}
              <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        display:        "flex",
                        alignItems:     "center",
                        padding:        "0.875rem 1rem",
                        borderRadius:   "0.75rem",
                        fontWeight:     500,
                        fontSize:       "1rem",
                        textDecoration: "none",
                        color:          isActive(link.href) ? "#1A56DB" : "#374151",
                        background:     isActive(link.href) ? "#EBF2FF" : "transparent",
                        transition:     "all 0.15s ease",
                        borderLeft:     isActive(link.href) ? "3px solid #1A56DB" : "3px solid transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div style={{ marginTop: "auto" }}>
                <Link href="/about#join" className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}>
                  Join IETE Council
                </Link>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          #join-btn     { display: none !important; }
          #hamburger-btn{ display: flex !important; }
        }
        @media (min-width: 769px) {
          #hamburger-btn{ display: none !important; }
        }
      `}</style>

      {/* ── Navbar height spacer ── */}
      {/* Pushes page content below the fixed navbar */}
      <div style={{ height: "72px" }} />
    </>
  );
}