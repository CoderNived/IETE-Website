import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "Home",       href: "/"           },
  { label: "About",      href: "/about"      },
  { label: "Events",     href: "/events"     },
  { label: "Blogs",      href: "/blogs"      },
  { label: "Internship", href: "/internship" },
  { label: "Projects",   href: "/projects"   },
  { label: "Gallery",    href: "/gallery"    },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [router.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          right:           0,
          zIndex:          50,
          transition:      "all 0.3s ease",
          backgroundColor: isScrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter:  isScrolled ? "blur(12px)" : "none",
          borderBottom:    isScrolled ? "1px solid #E5E7EB" : "1px solid transparent",
          boxShadow:       isScrolled ? "0 2px 20px rgba(26,86,219,0.08)" : "none",
        }}
      >
        {/* ── Inner wrapper — centers content with padding ── */}
        <div style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          height:         "72px",
          maxWidth:       "1280px",
          marginLeft:     "auto",
          marginRight:    "auto",
          paddingLeft:    "clamp(1.5rem, 5vw, 5rem)",
          paddingRight:   "clamp(1.5rem, 5vw, 5rem)",
          width:          "100%",
        }}>

          {/* ── Logo + Brand ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", flexShrink: 0 }}>
            <img
              src="/images/logos/somaiya.png"
              alt="Somaiya College"
              style={{ height: "40px", width: "auto", objectFit: "contain", flexShrink: 0 }}
            />
            <div style={{ width: "1px", height: "32px", background: "#D1D5DB", flexShrink: 0 }} />
            <img
              src="/images/logos/IETE-Logo1.jpg"
              alt="IETE Logo"
              style={{ height: "38px", width: "auto", objectFit: "contain", flexShrink: 0 }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#0F172A", letterSpacing: "-0.01em" }}>
                IETE Council
              </span>
              <span style={{ fontSize: "0.68rem", color: "#6B7280", fontWeight: 400 }}>
                Student Chapter
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding:        "0.5rem 0.875rem",
                  borderRadius:   "0.5rem",
                  fontWeight:     500,
                  fontSize:       "0.875rem",
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
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: "absolute", bottom: "4px", left: "50%",
                      transform: "translateX(-50%)", width: "4px", height: "4px",
                      borderRadius: "50%", background: "#1A56DB",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* ── CTA + Hamburger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            <Link href="/about#join" id="join-btn" className="btn-primary"
              style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}>
              Join Us
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              id="hamburger-btn"
              aria-label="Toggle menu"
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "0.5rem", borderRadius: "0.5rem", color: "#0F172A", display: "none",
              }}
            >
              {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 40,
                backgroundColor: "rgba(15,23,42,0.4)", backdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: "min(320px, 85vw)", zIndex: 45,
                backgroundColor: "white", boxShadow: "-8px 0 40px rgba(0,0,0,0.12)",
                display: "flex", flexDirection: "column", padding: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
                <span style={{ fontWeight: 700, fontSize: "1.125rem", color: "#0F172A" }}>Menu</span>
                <button onClick={() => setMenuOpen(false)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#6B7280" }}>
                  <HiX size={22} />
                </button>
              </div>

              <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.div key={link.href}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}>
                    <Link href={link.href} style={{
                      display: "flex", alignItems: "center",
                      padding: "0.875rem 1rem", borderRadius: "0.75rem",
                      fontWeight: 500, fontSize: "1rem", textDecoration: "none",
                      color: isActive(link.href) ? "#1A56DB" : "#374151",
                      background: isActive(link.href) ? "#EBF2FF" : "transparent",
                      borderLeft: isActive(link.href) ? "3px solid #1A56DB" : "3px solid transparent",
                    }}>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

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

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav    { display: none !important; }
          #join-btn       { display: none !important; }
          #hamburger-btn  { display: flex !important; }
        }
        @media (min-width: 901px) {
          #hamburger-btn  { display: none !important; }
        }
      `}</style>
    </>
  );
}