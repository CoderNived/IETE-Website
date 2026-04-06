import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const SOCIAL_LINKS = [
  { icon: FaGithub,    href: "https://github.com",    label: "GitHub"    },
  { icon: FaLinkedin,  href: "https://linkedin.com",  label: "LinkedIn"  },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaYoutube,   href: "https://youtube.com",   label: "YouTube"   },
  { icon: FaTwitter,   href: "https://twitter.com",   label: "Twitter"   },
];

const QUICK_LINKS = [
  { label: "Home",             href: "/"            },
  { label: "About Us",         href: "/about"       },
  { label: "Events",           href: "/events"      },
  { label: "Blogs",            href: "/blogs"       },
  { label: "Internship",       href: "/internship"  },
  { label: "Projects",         href: "/projects"    },
  { label: "Gallery",          href: "/gallery"     },
];

const RESOURCES = [
  { label: "IETE India (Official)", href: "https://iete.org",    external: true  },
  { label: "IEEE Student Branch",   href: "https://ieee.org",    external: true  },
  { label: "Research Papers",       href: "/projects#papers",    external: false },
  { label: "Event Gallery",         href: "/events#gallery",     external: false },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="section-wrapper">

        {/* Top grid */}
        <div className="footer-grid">

          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="footer-logo-wrap">
  <img
    src="/images/logos/IETE-Logo1.jpg"
    alt="IETE Logo"
    style={{
      height:     "42px",
      width:      "auto",
      objectFit:  "contain",
      flexShrink: 0,
      filter:     "brightness(0) invert(1)",  /* makes it white for dark footer */
    }}
  />
  <div>
    <div className="footer-brand-name">IETE Council</div>
    <div className="footer-brand-sub">Student Chapter</div>
  </div>
</Link>

            <p className="footer-desc">
              Fostering innovation, technical excellence, and professional
              growth among electronics and telecommunication engineering students.
            </p>

            <div className="footer-socials">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social-btn"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-link-list">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">
                    <span className="footer-link-arrow">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

{/* Column 3 — Resources */}
<div>
  <h3 className="footer-col-title">Resources</h3>
  <ul className="footer-link-list">
    {RESOURCES.map(({ label, href, external }) => (
      <li key={href}>
        <a
          href={href}
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : undefined}
          className="footer-link"
        >
          <span className="footer-link-arrow">›</span>
          {label}
          {external ? " ↗" : ""}
        </a>
      </li>
    ))}
  </ul>
</div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="footer-col-title">Get In Touch</h3>
            <div className="footer-contact-list">

              <div className="footer-contact-row">
                <HiLocationMarker size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">
                  Your College Name,<br />
                  City, State — 400000,<br />
                  India
                </span>
              </div>

              <div className="footer-contact-row">
                <HiMail size={18} className="footer-contact-icon" />
                <a href="mailto:iete@yourcollege.edu.in" className="footer-contact-link">
                  iete@yourcollege.edu.in
                </a>
              </div>

              <div className="footer-contact-row">
                <HiPhone size={18} className="footer-contact-icon" />
                <a href="tel:+910000000000" className="footer-contact-link">
                  +91 00000 00000
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} IETE Student Chapter. All rights reserved.
          </p>
          <p className="footer-made">
            Built with ♥ by the IETE Tech Team
          </p>
        </div>
      </div>

      {/* All footer styles in one place — no inline handler issues */}
      <style>{`
        .footer-root {
          background: linear-gradient(180deg, #0F172A 0%, #0a0f1e 100%);
          color: white;
          padding-top: 5rem;
          padding-bottom: 2rem;
          margin-top: auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer-logo-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          text-decoration: none;
          margin-bottom: 1.25rem;
        }
        .footer-logo-box {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: linear-gradient(135deg, #1A56DB, #3B82F6);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(26,86,219,0.4);
          flex-shrink: 0;
        }
        .footer-logo-text {
          color: white; font-weight: 800; font-size: 13px;
        }
        .footer-brand-name {
          font-weight: 700; font-size: 1rem; color: white; line-height: 1.3;
        }
        .footer-brand-sub {
          font-size: 0.7rem; color: rgba(255,255,255,0.5);
        }
        .footer-desc {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }
        .footer-socials {
          display: flex; gap: 0.75rem; flex-wrap: wrap;
        }
        .footer-social-btn {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .footer-social-btn:hover {
          background: #1A56DB;
          border-color: #1A56DB;
          color: white;
        }
        .footer-col-title {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 1.25rem;
        }
        .footer-link-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        .footer-link {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.375rem;
          transition: color 0.2s ease;
        }
        .footer-link:hover { color: white; }
        .footer-link-arrow { color: #1A56DB; font-size: 0.75rem; }
        .footer-contact-list {
          display: flex; flex-direction: column; gap: 1rem;
        }
        .footer-contact-row {
          display: flex; gap: 0.75rem;
        }
        .footer-contact-icon {
          color: #1A56DB; flex-shrink: 0; margin-top: 2px;
        }
        .footer-contact-text {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
        }
        .footer-contact-link {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact-link:hover { color: white; }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 1.75rem;
        }
        .footer-copy { font-size: 0.8125rem; color: rgba(255,255,255,0.35); }
        .footer-made { font-size: 0.8125rem; color: rgba(255,255,255,0.25); }
      `}</style>
    </footer>
  );
}