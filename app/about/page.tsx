"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Search,
  Heart,
  Star,
  Sparkles,
  Menu,
  Instagram,
  Music,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Shop", href: "/" },
  { label: "Collections", href: "/" },
  { label: "Artists", href: "/" },
  { label: "About", href: "/about" },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#FFF5F7" }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; opacity: 0; }
        .delay-0  { animation-delay: 0s; }
        .delay-1  { animation-delay: 0.1s; }
        .delay-2  { animation-delay: 0.2s; }
        .delay-3  { animation-delay: 0.3s; }
        .delay-4  { animation-delay: 0.4s; }
        .delay-5  { animation-delay: 0.5s; }
        .belief-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 20px;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .belief-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(192,66,108,0.15);
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 bg-white" style={{ borderBottom: "1px solid #f0d0dc" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="shrink-0 text-[22px] font-bold tracking-[-0.5px] no-underline"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#C0426C" }}
          >
            her<em>wall</em>
          </Link>

          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.08em] no-underline"
                style={{ color: link.href === "/about" ? "#C0426C" : "#6b3050", fontWeight: link.href === "/about" ? 600 : 500 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button className="hidden md:flex items-center justify-center p-1.5 bg-transparent border-0 cursor-pointer" style={{ color: "#6b3050" }}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="hidden md:flex items-center justify-center p-1.5 bg-transparent border-0 cursor-pointer" style={{ color: "#6b3050" }}>
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white border-0 rounded-full text-[13px] font-medium whitespace-nowrap no-underline"
              style={{ background: "#C0426C", padding: "8px 14px" }}
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              <span className="hidden sm:inline">Shop Now</span>
            </Link>
            <button className="md:hidden flex items-center justify-center p-1.5 bg-transparent border-0 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "#6b3050" }}>
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white" style={{ borderTop: "1px solid #f0d0dc", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: 16 }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-[14px] font-medium uppercase tracking-[0.08em] no-underline" style={{ color: link.href === "/about" ? "#C0426C" : "#6b3050" }} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* ── 1. HERO ── */}
      <section
        className="fade-up delay-0"
        style={{
          background: "linear-gradient(145deg, #fce8ef, #ffd6e7)",
          padding: "6rem 2rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <span
          className="inline-block text-[12px] font-medium rounded-full text-white"
          style={{ background: "#C0426C", padding: "5px 18px", letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          Our Story
        </span>
        <h1
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontStyle: "italic",
            fontSize: "clamp(24px, 5vw, 40px)",
            fontWeight: 700,
            color: "#C0426C",
            margin: 0,
            lineHeight: 1.3,
            maxWidth: 600,
          }}
        >
          "Your room. Your rules. Your wall."
        </h1>
        <p style={{ margin: 0, fontSize: 15, color: "#6b3050", fontWeight: 300, maxWidth: 480, lineHeight: 1.8 }}>
          A small shop from Nepal, built by two siblings who believed every girl deserves her favorite idol on her wall.
        </p>
      </section>

      {/* ── 2. ORIGIN STORY ── */}
      <section
        className="fade-up delay-1 max-w-[1100px] mx-auto"
        style={{ padding: "5rem 2rem" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: decorative number + heading */}
          <div style={{ position: "relative" }}>
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(80px, 18vw, 140px)",
                fontWeight: 700,
                color: "rgba(192,66,108,0.08)",
                lineHeight: 1,
                display: "block",
                userSelect: "none",
              }}
            >
              01
            </span>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                color: "#2a0e1c",
                margin: 0,
                position: "absolute",
                bottom: "0.5rem",
                left: 0,
                lineHeight: 1.2,
              }}
            >
              How it<br /><em style={{ color: "#C0426C" }}>started</em>
            </h2>
          </div>

          {/* Right: story text */}
          <div>
            <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 16, color: "#3a0a20", lineHeight: 1.9, fontWeight: 300, margin: 0 }}>
              We are a brother and sister from Nepal, and we started herwall
              with one simple observation — the girls around us had posters saved
              in their phones, idols they dreamed about, walls they wished looked
              different. But the posters were either too expensive, too hard to find,
              or felt like something they had to hide.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 16, color: "#3a0a20", lineHeight: 1.9, fontWeight: 400, margin: "1.5rem 0 0", fontStyle: "italic" }}>
              We didn't think that was right.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. THE MOMENT ── */}
      <section
        className="fade-up delay-2"
        style={{
          background: "#2a0e1c",
          padding: "5rem 2rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <blockquote
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontStyle: "italic",
            fontSize: "clamp(20px, 4vw, 32px)",
            color: "#f4a0c4",
            margin: 0,
            maxWidth: 720,
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          "We saw girls in Nepal who loved K-pop with everything they had.
          And we thought — they deserve a wall that loves them back."
        </blockquote>
        <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>
          — The herwall founders
        </p>
      </section>

      {/* ── 4. WHAT WE BELIEVE ── */}
      <section
        className="fade-up delay-3 max-w-[1100px] mx-auto"
        style={{ padding: "5rem 2rem" }}
      >
        <h2
          className="text-center m-0 mb-10"
          style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#2a0e1c" }}
        >
          What we <em style={{ color: "#C0426C" }}>stand for</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: <Heart size={28} strokeWidth={1.5} color="#C0426C" />,
              title: "Your idols are valid",
              text: "K-pop is not a phase. It is a feeling. We never judge, we only celebrate.",
            },
            {
              icon: <Star size={28} strokeWidth={1.5} color="#C0426C" />,
              title: "Your room is your world",
              text: "The four walls around you should feel like you. We help make that happen.",
            },
            {
              icon: <Sparkles size={28} strokeWidth={1.5} color="#C0426C" />,
              title: "Made with love in Nepal",
              text: "Two siblings, one dream, and a deep belief that Nepali girls deserve better.",
            },
          ].map((card, i) => (
            <div key={card.title} className="belief-card">
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "#fce8ef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {card.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 19, fontWeight: 700, color: "#2a0e1c", margin: 0 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 14, color: "#6b3050", lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. FOUNDERS ── */}
      <section
        className="fade-up delay-4 max-w-[800px] mx-auto"
        style={{ padding: "0 2rem 5rem" }}
      >
        <h2
          className="text-center m-0 mb-10"
          style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#2a0e1c" }}
        >
          The people <em style={{ color: "#C0426C" }}>behind it</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              initial: "A",
              gradient: "linear-gradient(135deg, #fce8ef, #C0426C)",
              name: "The Brother",
              role: "Vision & Tech",
              line: "Builds the walls. Literally.",
            },
            {
              initial: "S",
              gradient: "linear-gradient(135deg, #fce8ef, #e896b2)",
              name: "The Sister",
              role: "Creative & Soul",
              line: "Picks the posters. Feels the vibe.",
            },
          ].map((founder) => (
            <div
              key={founder.name}
              style={{
                background: "white",
                borderRadius: 20,
                border: "0.5px solid #f0d0dc",
                padding: "2rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
                boxShadow: "0 4px 24px rgba(192,66,108,0.06)",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: founder.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 700,
                  color: "white",
                  boxShadow: "0 4px 20px rgba(192,66,108,0.25)",
                }}
              >
                {founder.initial}
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: 18, fontWeight: 700, color: "#2a0e1c", margin: "0 0 4px" }}>
                  {founder.name}
                </p>
                <p style={{ fontSize: 13, color: "#C0426C", fontWeight: 500, margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {founder.role}
                </p>
              </div>
              <p style={{ fontSize: 13, color: "#7a3050", fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>
                {founder.line}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section
        className="fade-up delay-5"
        style={{
          background: "#FFF5F7",
          borderTop: "1px solid #f0d0dc",
          padding: "5rem 2rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(26px, 5vw, 38px)",
            fontWeight: 700,
            color: "#2a0e1c",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          Ready to build your <em style={{ color: "#C0426C" }}>wall?</em>
        </h2>
        <p style={{ fontSize: 15, color: "#6b3050", fontWeight: 300, margin: 0, maxWidth: 400, lineHeight: 1.8 }}>
          Browse our collection and find the poster that feels like home.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
          <Link
            href="/"
            className="no-underline"
            style={{
              background: "#C0426C",
              color: "white",
              borderRadius: 999,
              padding: "12px 28px",
              fontSize: 14,
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Shop Now
          </Link>
          <Link
            href="/"
            className="no-underline"
            style={{
              background: "transparent",
              color: "#C0426C",
              border: "1.5px solid #C0426C",
              borderRadius: 999,
              padding: "12px 28px",
              fontSize: 14,
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            See Collections
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2a0e1c", padding: "2rem 1rem 1.5rem" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <span className="text-[22px] font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: "#f4a0c4" }}>
              herwall
            </span>
            <div className="flex gap-5 md:gap-6">
              {["Contact", "FAQ", "Track Order"].map((link) => (
                <a key={link} href="#" className="text-[13px] no-underline font-normal" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {link}
                </a>
              ))}
            </div>
            <div className="flex gap-2">
              {[
                <Instagram key="ig" size={17} strokeWidth={1.5} />,
                <Music key="music" size={17} strokeWidth={1.5} />,
                <Youtube key="yt" size={17} strokeWidth={1.5} />,
              ].map((icon, i) => (
                <button key={i} className="w-9 h-9 rounded-full bg-transparent flex items-center justify-center cursor-pointer" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.55)" }}>
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <p className="m-0 text-[12px] text-center" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2025 herwall. Made with love in Nepal.
          </p>
        </div>
      </footer>
    </div>
  );
}
