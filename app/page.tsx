"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Heart,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ImageIcon,
  Truck,
  ShieldCheck,
  RefreshCw,
  Plus,
  Minus,
  X,
  Trash2,
  LayoutGrid,
  Frame,
  Instagram,
  Music,
  Youtube,
  Menu,
} from "lucide-react";

const NAV_LINKS = ["Shop", "Collections", "Artists", "About"];

const FANDOM_CHIPS = [
  "All",
  "BLACKPINK",
  "BTS",
  "aespa",
  "TWICE",
  "IVE",
  "NewJeans",
  "ITZY",
];

const products = [
  { id: 1, src: "/1.jpg", name: "Taehyung — Layover Collage", group: "BTS", price: 799, badge: "Bestseller", badgeColor: "#C0426C" },
  { id: 2, src: "/2.jpg", name: "Lisa — Rock Chic Edition", group: "BLACKPINK", price: 799, badge: "New", badgeColor: "#7c4dff" },
  { id: 3, src: "/3.jpg", name: "Jungkook — Golden Poster", group: "BTS", price: 799, badge: "Bestseller", badgeColor: "#C0426C" },
  { id: 4, src: "/4.jpg", name: "Jimin — MUSE Album Art", group: "BTS", price: 799, badge: "New", badgeColor: "#7c4dff" },
  { id: 5, src: "/5.jpg", name: "LALISA — Mugshot Series", group: "BLACKPINK", price: 799, badge: null, badgeColor: null },
];

const PRICING_OPTIONS = [
  {
    title: "A4 Framed",
    price: "Rs. 799",
    tag: "Most Popular",
    tagColor: "#C0426C",
    note: "Premium framed print, ready to hang",
    highlight: true,
  },
  {
    title: "A4 Unframed",
    price: "Rs. 349",
    tag: "Budget Pick",
    tagColor: "#6b3050",
    note: "High quality print, frame it yourself",
    highlight: false,
  },
  {
    title: "Bundle (2 Framed)",
    price: "Rs. 1,399",
    tag: "Best Value",
    tagColor: "#7c4dff",
    note: "Mix any 2 posters, save Rs. 199",
    highlight: false,
  },
];

const TRUST_ITEMS = [
  {
    icon: <Truck size={20} strokeWidth={1.5} color="#C0426C" />,
    title: "Free Delivery",
    sub: "Orders above Rs. 1000",
  },
  {
    icon: <ImageIcon size={20} strokeWidth={1.5} color="#C0426C" />,
    title: "Art Quality Print",
    sub: "Museum-grade paper",
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.5} color="#C0426C" />,
    title: "Secure Payment",
    sub: "eSewa & card accepted",
  },
  {
    icon: <RefreshCw size={20} strokeWidth={1.5} color="#C0426C" />,
    title: "Easy Returns",
    sub: "7-day hassle-free",
  },
];

const PROMO_BOXES = [
  { icon: <LayoutGrid strokeWidth={1.5} color="white" />, label: "Grid Layout" },
  { icon: <Frame strokeWidth={1.5} color="white" />, label: "Frame Style" },
  { icon: <Sparkles strokeWidth={1.5} color="white" />, label: "Aesthetic Match" },
];

export default function Home() {
  const [activeChip, setActiveChip] = useState("All");
  const [cart, setCart] = useState<{ id: number; name: string; group: string; price: number; qty: number }[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState("");

  const addToCart = (product: { id: number; name: string; group: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setToast("Added to cart!");
    setTimeout(() => setToast(""), 2000);
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((i) => i.id !== id));
  const updateQty = (id: number, delta: number) =>
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  const handleWhatsAppOrder = () => {
    const itemsList = cart
      .map((i) => `• ${i.name} (${i.group}) x${i.qty} — Rs. ${i.price * i.qty}`)
      .join("\n");
    const message = `Hello herwall! 🛍️ I'd like to place an order:\n\n${itemsList}\n\n*Total: Rs. ${total}*\n\nPlease confirm my order and payment details. Thank you!`;
    window.open(`https://wa.me/9779846843300?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen" style={{ background: "#FFF5F7" }}>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .badge-pulse {
          animation: badgePulse 2s ease-in-out infinite;
          display: inline-block;
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.3); }
        }
        .dot-pulse {
          animation: dotPulse 1.5s ease-in-out infinite;
        }
        .product-card {
          background: rgba(255,255,255,0.85);
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.9) !important;
          box-shadow: 0 4px 24px rgba(192,66,108,0.08);
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(192,66,108,0.18);
        }
        .product-card .img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(192,66,108,0.15);
          -webkit-backdrop-filter: blur(2px);
          backdrop-filter: blur(2px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }
        .product-card:hover .img-overlay {
          opacity: 1;
        }
        .product-card .quick-add {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 3;
          white-space: nowrap;
          background: #C0426C;
          color: white;
          border: none;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 16px;
          cursor: pointer;
        }
        .product-card:hover .quick-add {
          opacity: 1;
        }
        .pricing-card {
          background: rgba(255,255,255,0.6);
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(192,66,108,0.1);
          transition: all 0.3s ease;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .pricing-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(192,66,108,0.2);
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        className="sticky top-0 z-50 bg-white"
        style={{ borderBottom: "1px solid #f0d0dc" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-3">
          {/* Logo */}
          <div
            className="shrink-0 text-[22px] font-bold tracking-[-0.5px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#C0426C" }}
          >
            her<em>wall</em>
          </div>

          {/* Center nav — desktop only */}
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[13px] font-medium uppercase tracking-[0.08em] no-underline"
                style={{ color: "#6b3050" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              className="hidden md:flex items-center justify-center p-1.5 bg-transparent border-0 cursor-pointer"
              style={{ color: "#6b3050" }}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              className="hidden md:flex items-center justify-center p-1.5 bg-transparent border-0 cursor-pointer"
              style={{ color: "#6b3050" }}
            >
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="relative flex items-center gap-1.5 text-white border-0 rounded-full text-[13px] font-medium cursor-pointer whitespace-nowrap"
              style={{ background: "#C0426C", padding: "8px 14px" }}
            >
              {totalItems > 0 && (
                <span
                  className="dot-pulse absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                  style={{ background: "#ff91b8", border: "2px solid white" }}
                />
              )}
              <ShoppingBag size={16} strokeWidth={1.5} />
              <span className="hidden sm:inline">Cart ({totalItems})</span>
            </button>
            <button
              className="md:hidden flex items-center justify-center p-1.5 bg-transparent border-0 cursor-pointer"
              style={{ color: "#6b3050" }}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 pt-6 pb-4 md:pt-12 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">

          {/* Left — text block */}
          <div
            className="rounded-3xl p-6 md:p-10 relative overflow-hidden flex flex-col gap-4 md:gap-6"
            style={{ background: "linear-gradient(145deg, #fce8ef, #ffd6e7)" }}
          >
            <div
              className="absolute rounded-full pointer-events-none"
              style={{ top: -60, right: -60, width: 220, height: 220, background: "rgba(192,66,108,0.07)" }}
            />
            <div
              className="absolute rounded-full pointer-events-none"
              style={{ bottom: -40, left: -40, width: 160, height: 160, background: "rgba(192,66,108,0.07)" }}
            />
            <div className="relative z-10">
              <span
                className="inline-flex items-center gap-1.5 text-white rounded-full text-[12px] font-medium"
                style={{ background: "#C0426C", padding: "5px 14px" }}
              >
                <Sparkles size={13} strokeWidth={1.5} />
                New Drop — Summer 2025
              </span>
            </div>
            <h1
              className="relative z-10 m-0 font-bold leading-[1.15] text-[36px] md:text-[52px]"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#2a0e1c" }}
            >
              Your wall, your{" "}
              <em style={{ color: "#C0426C", fontStyle: "italic" }}>world</em>
            </h1>
            <p
              className="relative z-10 m-0 text-[15px] md:text-base leading-relaxed font-light"
              style={{ color: "#6b3050" }}
            >
              Curated K-pop poster prints that turn your room into a shrine.
            </p>
            <div className="relative z-10 flex flex-wrap gap-3">
              <button
                className="flex items-center gap-2 text-white border-0 rounded-full text-sm font-medium cursor-pointer"
                style={{ background: "#C0426C", padding: "11px 22px" }}
              >
                Shop Collection
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
              <button
                className="flex items-center gap-2 bg-transparent rounded-full text-sm font-medium cursor-pointer"
                style={{ color: "#C0426C", border: "1.5px solid #C0426C", padding: "11px 22px" }}
              >
                See Bestsellers
              </button>
            </div>
          </div>

          {/* Right — poster grid */}
          <div
            className="rounded-3xl p-2.5 grid grid-cols-3 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2.5 md:min-h-[380px]"
            style={{ background: "#2a0e1c" }}
          >
            <div className="relative overflow-hidden rounded-2xl h-[180px] md:h-auto md:row-span-2">
              <Image src="/3.jpg" alt="Jungkook Golden" fill className="object-cover object-top" />
              <div
                className="absolute bottom-0 left-0 right-0 z-10"
                style={{ background: "linear-gradient(to top, rgba(42,14,28,0.85), transparent)", padding: "1rem 0.75rem 0.75rem" }}
              >
                <p className="text-white text-[10px] md:text-[11px] font-medium uppercase tracking-[0.08em] m-0">
                  BTS / Golden Era
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl h-[180px] md:h-auto">
              <Image src="/1.jpg" alt="V Taehyung" fill className="object-cover object-top" />
              <div
                className="absolute bottom-0 left-0 right-0 z-10"
                style={{ background: "linear-gradient(to top, rgba(42,14,28,0.85), transparent)", padding: "0.75rem" }}
              >
                <p className="text-white text-[10px] font-medium uppercase tracking-[0.06em] m-0">
                  BTS / Layover
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl h-[180px] md:h-auto">
              <Image src="/2.jpg" alt="Lisa Rock Chic" fill className="object-cover object-top" />
              <div
                className="absolute bottom-0 left-0 right-0 z-10"
                style={{ background: "linear-gradient(to top, rgba(42,14,28,0.85), transparent)", padding: "0.75rem" }}
              >
                <p className="text-white text-[10px] font-medium uppercase tracking-[0.06em] m-0">
                  BLACKPINK / Rock Chic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FANDOM FILTER CHIPS ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-5 md:py-6">
        <h2
          className="text-[22px] md:text-[28px] font-bold m-0 mb-4"
          style={{ fontFamily: "var(--font-playfair), serif", color: "#2a0e1c" }}
        >
          Shop by <em style={{ color: "#C0426C", fontStyle: "italic" }}>Fandom</em>
        </h2>
        <div
          className="flex gap-2.5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ overflowX: "auto" }}
        >
          {FANDOM_CHIPS.map((chip) => (
            <button
              key={chip}
              onClick={() => setActiveChip(chip)}
              className="rounded-full text-[13px] font-medium cursor-pointer whitespace-nowrap transition-all duration-150"
              style={{
                padding: "7px 16px",
                border: "1.5px solid",
                background: activeChip === chip ? "#C0426C" : "transparent",
                color: activeChip === chip ? "white" : "#6b3050",
                borderColor: activeChip === chip ? "#C0426C" : "#f0d0dc",
              }}
            >
              {chip}
            </button>
          ))}
        </div>
      </section>

      {/* ── PRICING OPTIONS ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-8 md:pb-10">
        <div className="text-center mb-6 md:mb-8">
          <h2
            className="text-[22px] md:text-[30px] font-bold m-0 mb-2"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#2a0e1c" }}
          >
            Choose Your <em style={{ color: "#C0426C", fontStyle: "italic" }}>Format</em>
          </h2>
          <p className="m-0 text-[14px] md:text-[15px] font-light" style={{ color: "#6b3050" }}>
            Every poster, every idol — in the format that fits your wall.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {PRICING_OPTIONS.map((opt) => (
            <div key={opt.title} className="pricing-card">
              <div>
                <span
                  className="inline-block text-[11px] font-medium rounded-full text-white"
                  style={{ background: opt.tagColor, padding: "3px 12px" }}
                >
                  {opt.tag}
                </span>
              </div>
              <p
                className="m-0 text-[15px] md:text-[17px] font-bold"
                style={{ fontFamily: "var(--font-playfair), serif", color: "#2a0e1c" }}
              >
                {opt.title}
              </p>
              <p
                className="m-0 text-[24px] md:text-[28px] font-bold"
                style={{ color: "#C0426C", fontFamily: "var(--font-playfair), serif" }}
              >
                {opt.price}
              </p>
              <p className="m-0 text-[12px] md:text-[13px] font-light leading-relaxed" style={{ color: "#6b3050" }}>
                {opt.note}
              </p>
              <button
                className="mt-1 w-full flex items-center justify-center gap-1.5 text-white border-0 rounded-full text-[13px] font-medium cursor-pointer"
                style={{ background: opt.highlight ? "#C0426C" : "#2a0e1c", padding: "10px 0" }}
              >
                Select
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-10 md:pb-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {products.map((product) => {
            const cartItem = cart.find((i) => i.id === product.id);
            return (
              <div
                key={product.id}
                className="product-card rounded-[20px] overflow-hidden cursor-pointer"
              >
                {/* Image area */}
                <div className="relative overflow-hidden h-[160px] md:h-[200px]">
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="img-overlay" />

                  {product.badge && (
                    <span
                      className="badge-pulse absolute top-2.5 left-2.5 z-10 text-white text-[11px] font-medium rounded-full"
                      style={{ background: product.badgeColor!, padding: "3px 10px" }}
                    >
                      {product.badge}
                    </span>
                  )}

                  <button className="quick-add" onClick={() => addToCart(product)}>
                    Quick Add +
                  </button>
                </div>

                {/* Info */}
                <div className="p-3 md:p-4 flex flex-col gap-1">
                  <p
                    className="m-0 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.1em]"
                    style={{ color: "#C0426C" }}
                  >
                    {product.group}
                  </p>
                  <p
                    className="m-0 text-[13px] md:text-[15px] font-normal leading-[1.3]"
                    style={{ fontFamily: "var(--font-playfair), serif", color: "#2a0e1c" }}
                  >
                    {product.name}
                  </p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-[13px] md:text-sm font-medium" style={{ color: "#2a0e1c" }}>
                      Rs. {product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center cursor-pointer text-[12px] font-semibold border-0"
                      style={{
                        background: cartItem ? "#C0426C" : "#FFF5F7",
                        color: cartItem ? "white" : "#C0426C",
                        border: cartItem ? "none" : "1.5px solid #f0d0dc",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {cartItem ? cartItem.qty : <Plus size={15} strokeWidth={1.5} />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section
        className="py-6 md:py-8 px-4 md:px-6"
        style={{ background: "white", borderTop: "1px solid #f0d0dc", borderBottom: "1px solid #f0d0dc" }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <div
                className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#fce8ef" }}
              >
                {item.icon}
              </div>
              <div>
                <p className="m-0 text-[13px] md:text-sm font-medium" style={{ color: "#2a0e1c" }}>
                  {item.title}
                </p>
                <p className="m-0 text-[11px] md:text-xs font-light" style={{ color: "#6b3050" }}>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <section className="px-4 md:px-10 py-8 md:py-10">
        <div
          className="rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center"
          style={{ background: "linear-gradient(135deg, #2a0e1c 0%, #5c1a40 55%, #a03060 100%)" }}
        >
          <div className="flex flex-col gap-4 md:gap-5 flex-1">
            <h3
              className="m-0 font-bold leading-[1.2] text-[22px] md:text-[34px] text-white"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Build your dream{" "}
              <em style={{ color: "#f4a0c4", fontStyle: "italic" }}>gallery wall</em>
            </h3>
            <p className="m-0 text-sm md:text-[15px] leading-relaxed font-light" style={{ color: "rgba(255,255,255,0.65)" }}>
              Mix and match your favourite idols across different series. Create a curated aesthetic that&apos;s uniquely yours.
            </p>
            <button
              className="inline-flex self-start items-center gap-2 bg-white border-0 rounded-full text-sm font-medium cursor-pointer"
              style={{ color: "#2a0e1c", padding: "11px 22px" }}
            >
              Build My Wall
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex gap-3 md:gap-4 flex-shrink-0">
            {PROMO_BOXES.map((box) => (
              <div
                key={box.label}
                className="flex flex-col items-center gap-2 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  WebkitBackdropFilter: "blur(8px)",
                  backdropFilter: "blur(8px)",
                  padding: "14px 12px",
                  width: 80,
                  minWidth: 70,
                }}
              >
                <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8">
                  {box.icon}
                </span>
                <p
                  className="m-0 text-[10px] md:text-[11px] text-center font-light"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {box.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2a0e1c", padding: "2rem 1rem 1.5rem" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <span
              className="text-[22px] font-bold"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#f4a0c4" }}
            >
              herwall
            </span>
            <div className="flex gap-5 md:gap-6">
              {["Contact", "FAQ", "Track Order"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[13px] no-underline font-normal"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
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
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-transparent flex items-center justify-center cursor-pointer"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.55)" }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <p
            className="m-0 text-[12px] text-center"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            © 2025 herwall. Made with love in Nepal.
          </p>
        </div>
      </footer>

      {/* ── CART DRAWER ── */}
      {drawerOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50 }}>
          {/* Overlay */}
          <div
            onClick={() => setDrawerOpen(false)}
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }}
          />
          {/* Drawer */}
          <div
            style={{
              position: "fixed",
              right: 0,
              top: 0,
              width: "min(380px, 100vw)",
              height: "100vh",
              background: "white",
              display: "flex",
              flexDirection: "column",
              boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
              zIndex: 10,
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.25rem 1.25rem",
                borderBottom: "0.5px solid #f0d0dc",
              }}
            >
              <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: 20, fontWeight: 700, color: "#2a0e1c" }}>
                Your Cart
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                style={{ background: "transparent", border: 0, cursor: "pointer", color: "#6b3050", padding: 4 }}
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {cart.length === 0 ? (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, color: "#b07090", paddingTop: "4rem" }}>
                  <ShoppingBag size={40} strokeWidth={1} />
                  <p style={{ margin: 0, fontSize: 14 }}>Your cart is empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div style={{ position: "relative", width: 56, height: 56, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                      <Image
                        src={products.find((p) => p.id === item.id)!.src}
                        alt={item.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: "#C0426C", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        {item.group}
                      </p>
                      <p style={{ margin: "2px 0 6px", fontSize: 13, color: "#2a0e1c", lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {item.name}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          style={{ width: 24, height: 24, borderRadius: 6, border: "1px solid #f0d0dc", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b3050" }}
                        >
                          <Minus size={12} strokeWidth={2} />
                        </button>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#2a0e1c", minWidth: 16, textAlign: "center" }}>{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          style={{ width: 24, height: 24, borderRadius: 6, border: "1px solid #f0d0dc", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b3050" }}
                        >
                          <Plus size={12} strokeWidth={2} />
                        </button>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#C0426C", marginLeft: 4 }}>
                          Rs. {item.price * item.qty}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ background: "transparent", border: 0, cursor: "pointer", color: "#b07090", padding: 4, flexShrink: 0 }}
                    >
                      <Trash2 size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div style={{ borderTop: "0.5px solid #f0d0dc", padding: "1rem 1.25rem", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14, color: "#6b3050" }}>Total</span>
                  <span style={{ fontSize: 18, fontWeight: 700, color: "#2a0e1c" }}>Rs. {total}</span>
                </div>
                <button
                  onClick={handleWhatsAppOrder}
                  style={{
                    width: "100%",
                    background: "#25D366",
                    color: "white",
                    border: 0,
                    borderRadius: 999,
                    padding: 14,
                    fontSize: 15,
                    fontWeight: 500,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order via WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── TOAST ── */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            background: "#C0426C",
            color: "white",
            padding: "12px 20px",
            borderRadius: 12,
            fontSize: 14,
            zIndex: 999,
            boxShadow: "0 4px 20px rgba(192,66,108,0.3)",
          }}
        >
          {toast}
        </div>
      )}
    </div>
  );
}
