"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  {
    location: "Bhitarkanika · Kendrapara",
    title: "Plan a trip",
    emphasis: "to Odisha.",
    description: "Explore locally planned tours for pilgrimage, nature, culture and heritage across Odisha.",
    image: "/wildlife/bhitarkanika-banner.jpg",
    alt: "Mangrove waterways in Bhitarkanika Wildlife Sanctuary",
  },
  {
    location: "Mukteshwar · Bhubaneswar",
    title: "Stone stories",
    emphasis: "in every detail.",
    description: "Take a closer look at the exquisite Kalinga architecture of ancient Bhubaneswar.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Mukteshwar_Temple_Bhubaneswar.jpg",
    alt: "Mukteshwar Temple in Bhubaneswar",
  },
  {
    location: "Similipal · Mayurbhanj",
    title: "Take the long way",
    emphasis: "to the falls.",
    description: "Follow forest paths to dramatic waterfalls and quiet corners of Similipal.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Joranda_Water_Fall_Simlipal_Biosphere_Reserve.jpg",
    alt: "Joranda waterfall surrounded by Similipal forest",
  },
  {
    location: "Chilika · Satapada",
    title: "Where the lake",
    emphasis: "meets the sky.",
    description: "Set out across Chilika for open-water horizons, island stops and sunset light.",
    image: "/chilika/satapada-banner.jpg",
    alt: "A passenger boat crossing Chilika Lake near Satapada",
  },
];

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function getReducedMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [pointerInside, setPointerInside] = useState(false);
  const [keyboardInside, setKeyboardInside] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getReducedMotionPreference,
    () => false,
  );
  const isAutoPlaying = (!prefersReducedMotion || autoPlayEnabled) && !isUserPaused;
  const slide = slides[activeIndex];

  useEffect(() => {
    if (!isAutoPlaying || pointerInside || keyboardInside) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isAutoPlaying, pointerInside, keyboardInside]);

  function showSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  return (
    <section
      className="hero"
      id="home"
      aria-label="Explore Odisha destinations"
      onPointerEnter={() => setPointerInside(true)}
      onPointerLeave={() => setPointerInside(false)}
      onFocusCapture={() => setKeyboardInside(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setKeyboardInside(false);
        }
      }}
    >
      <div
        key={slide.image}
        className="hero-image"
        role="img"
        aria-label={slide.alt}
        style={{ backgroundImage: `url("${slide.image}")` }}
      />
      <div className="hero-shade" />
      <div className="hero-content" aria-live={isAutoPlaying ? "off" : "polite"} aria-atomic="true">
        <span className="hero-kicker"><span className="kicker-line" /> {slide.location}</span>
        <h1 key={slide.title}>{slide.title}<br /><i>{slide.emphasis}</i></h1>
        <p>{slide.description}</p>
        <div className="hero-actions">
          <a className="button button--lime" href="#places">Find your somewhere <ArrowRight size={17} /></a>
          <a className="hero-text-link" href="#about">Meet your local hosts <ArrowDown size={15} /></a>
        </div>
      </div>
      <div className="hero-caption"><span>{String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span><span>{slide.location}</span></div>
      <a className="hero-scroll" href="#welcome"><span>Scroll to explore</span><ArrowDown size={15} /></a>
      <div className="hero-stamp"><span>Locally<br />imagined</span></div>
      <div className="hero-controls" aria-label="Destination slides">
        <button type="button" onClick={() => showSlide(activeIndex - 1)} aria-label="Previous destination"><ChevronLeft size={18} /></button>
        <div className="hero-dots">
          {slides.map((item, index) => (
            <button
              type="button"
              key={item.location}
              className={index === activeIndex ? "is-active" : ""}
              aria-label={`Show ${item.location} slide`}
              aria-pressed={index === activeIndex}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            if (prefersReducedMotion && !autoPlayEnabled) {
              setAutoPlayEnabled(true);
              setIsUserPaused(false);
            } else {
              setIsUserPaused((paused) => !paused);
            }
          }}
          aria-label={!isAutoPlaying ? (prefersReducedMotion && !autoPlayEnabled ? "Enable automatic slides" : "Resume automatic slides") : "Pause automatic slides"}
        >
          {isAutoPlaying ? <Pause size={15} /> : <Play size={15} />}
        </button>
        <button type="button" onClick={() => showSlide(activeIndex + 1)} aria-label="Next destination"><ChevronRight size={18} /></button>
      </div>
    </section>
  );
}