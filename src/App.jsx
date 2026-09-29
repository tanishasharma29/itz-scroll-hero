import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function CarVisual() {
  return (
    <svg
      className="car-svg"
      viewBox="0 0 900 360"
      role="img"
      aria-label="Futuristic automotive silhouette"
    >
      <defs>
        <linearGradient id="carBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e9f5fb" />
          <stop offset="35%" stopColor="#9fb6c1" />
          <stop offset="70%" stopColor="#52636d" />
          <stop offset="100%" stopColor="#1b2730" />
        </linearGradient>

        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#243d4b" />
          <stop offset="55%" stopColor="#07131d" />
          <stop offset="100%" stopColor="#02080d" />
        </linearGradient>

        <linearGradient id="light" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#d9f7ff" />
          <stop offset="100%" stopColor="#65dfff" />
        </linearGradient>

        <filter id="carGlow">
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="softGlow">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* Ground glow */}
      <ellipse
        cx="450"
        cy="300"
        rx="320"
        ry="30"
        fill="#1da9ff"
        opacity="0.28"
        filter="url(#softGlow)"
      />

      {/* Car body */}
      <path
        className="car-body"
        d="
          M92 242
          C110 205 154 183 220 178
          L285 171
          L350 92
          C369 68 399 55 432 55
          L579 55
          C622 55 658 74 681 109
          L720 170
          L776 181
          C820 189 850 213 867 242
          L846 264
          L758 265
          C748 218 712 191 668 191
          C623 191 586 220 578 265
          L324 265
          C315 220 279 191 235 191
          C190 191 153 220 145 265
          L112 264
          Z
        "
        fill="url(#carBody)"
      />

      {/* Upper glass */}
      <path
        d="
          M333 166
          L380 99
          C393 81 414 72 437 72
          L572 72
          C602 72 626 87 643 112
          L678 166
          Z
        "
        fill="url(#glass)"
        stroke="#9bb2bd"
        strokeWidth="3"
        opacity="0.96"
      />

      {/* Window divider */}
      <path
        d="M513 76 L503 165"
        stroke="#7f969f"
        strokeWidth="3"
        opacity="0.7"
      />

      {/* Main side highlight */}
      <path
        d="M176 213 C320 191 574 193 747 211"
        fill="none"
        stroke="#e7f7ff"
        strokeWidth="4"
        opacity="0.65"
      />

      {/* Lower accent */}
      <path
        d="M166 239 C330 251 580 250 751 236"
        fill="none"
        stroke="#4dcfff"
        strokeWidth="3"
        opacity="0.6"
        filter="url(#carGlow)"
      />

      {/* Front light */}
      <path
        d="M775 197 L838 218 L813 233 L763 218 Z"
        fill="url(#light)"
        filter="url(#carGlow)"
      />

      {/* Rear light */}
      <path
        d="M92 214 L141 198 L151 219 L108 232 Z"
        fill="#dffaff"
        opacity="0.9"
        filter="url(#carGlow)"
      />

      {/* Front wheel */}
      <g className="wheel">
        <circle cx="684" cy="260" r="53" fill="#071018" />
        <circle cx="684" cy="260" r="39" fill="#111e27" stroke="#718692" strokeWidth="5" />
        <circle cx="684" cy="260" r="21" fill="#071018" stroke="#b7d3dd" strokeWidth="3" />
        <circle cx="684" cy="260" r="8" fill="#55d9ff" />
      </g>

      {/* Rear wheel */}
      <g className="wheel">
        <circle cx="235" cy="260" r="53" fill="#071018" />
        <circle cx="235" cy="260" r="39" fill="#111e27" stroke="#718692" strokeWidth="5" />
        <circle cx="235" cy="260" r="21" fill="#071018" stroke="#b7d3dd" strokeWidth="3" />
        <circle cx="235" cy="260" r="8" fill="#55d9ff" />
      </g>

      {/* Fine body line */}
      <path
        d="M118 267 H816"
        stroke="#8ee9ff"
        strokeWidth="2"
        opacity="0.7"
      />
    </svg>
  );
}

function App() {
  const appRef = useRef(null);
  const heroRef = useRef(null);
  const carRef = useRef(null);
  const titleRef = useRef(null);
  const titleOutlineRef = useRef(null);
  const copyRef = useRef(null);
  const visualRef = useRef(null);
  const metricsRef = useRef(null);
  const progressRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      const car = carRef.current;
      const title = titleRef.current;
      const titleOutline = titleOutlineRef.current;
      const copy = copyRef.current;
      const visual = visualRef.current;
      const metrics = metricsRef.current;
      const progressBar = progressRef.current;

      // Initial entrance
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(".nav-item", {
          y: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
        })
        .from(
          ".hero-kicker",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.35"
        )
        .from(
          title,
          {
            y: 70,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.45"
        )
        .from(
          copy,
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          visual,
          {
            scale: 0.88,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .from(
          metrics,
          {
            x: 35,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.8"
        );

      // Main scroll animation
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.15,
          pin: ".hero-sticky",
          anticipatePin: 1,
          onUpdate: (self) => {
            const value = Math.round(self.progress * 100);
            setProgress(value);

            if (progressBar) {
              gsap.set(progressBar, {
                scaleX: self.progress,
              });
            }
          },
        },
      });

      heroTimeline
        .to(
          title,
          {
            x: -75,
            y: -30,
            scale: 0.82,
            duration: 0.38,
            ease: "none",
          },
          0
        )
        .to(
          titleOutline,
          {
            x: -30,
            y: 18,
            scale: 0.92,
            opacity: 0.5,
            duration: 0.38,
            ease: "none",
          },
          0
        )
        .to(
          copy,
          {
            y: 50,
            opacity: 0.45,
            duration: 0.35,
            ease: "none",
          },
          0
        )
        .to(
          visual,
          {
            y: -20,
            scale: 1.05,
            rotateY: -4,
            duration: 0.45,
            ease: "none",
          },
          0
        )
        .to(
          car,
          {
            x: 10,
            y: -10,
            scale: 1.08,
            rotateZ: -1.5,
            duration: 0.5,
            ease: "none",
          },
          0
        )
        .to(
          ".hero-orbit",
          {
            rotate: 35,
            scale: 1.12,
            duration: 0.5,
            ease: "none",
          },
          0
        )
        .to(
          ".hero-grid",
          {
            y: 45,
            opacity: 0.45,
            duration: 0.5,
            ease: "none",
          },
          0
        )
        .to(
          ".metric-card",
          {
            y: -20,
            duration: 0.5,
            stagger: 0.05,
            ease: "none",
          },
          0
        );

      // Feature cards
      gsap.from(".feature-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 72%",
        },
      });

      gsap.from(".system-heading", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".system-heading",
          start: "top 78%",
        },
      });

      gsap.from(".tech-chip", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-stack",
          start: "top 75%",
        },
      });

      // Footer reveal
      gsap.from(".final-content", {
        y: 70,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".final-section",
          start: "top 75%",
        },
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={appRef} className="site">
      {/* HERO */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-sticky">
          <div className="hero-grid" />
          <div className="hero-noise" />

          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <header className="top-nav">
            <div className="nav-item brand">ITZ°</div>

            <div className="nav-item nav-center">
              DIGITAL MOTION / AUTOMOTIVE
            </div>

            <div className="nav-item nav-status">
              <span className="status-dot" />
              SCROLL EXPERIENCE
            </div>
          </header>

          <div className="hero-layout">
            {/* LEFT */}
            <div className="hero-copy">
              <div className="hero-kicker">
                01 — WELCOME TO THE EXPERIENCE
              </div>

              <div className="title-wrap">
                <h1 ref={titleRef} className="hero-title">
                  WELCOME
                </h1>

                <h1 ref={titleOutlineRef} className="hero-title-outline">
                  ITZ FIZZ
                </h1>
              </div>

              <p ref={copyRef} className="hero-description">
                A cinematic scroll interaction built around depth,
                movement and responsive visual storytelling.
              </p>

              <button
                className="scroll-button"
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight * 1.7,
                    behavior: "smooth",
                  })
                }
              >
                <span className="button-dot" />
                SCROLL TO EXPLORE
              </button>
            </div>

            {/* CENTER VISUAL */}
            <div ref={visualRef} className="hero-visual">
              <div className="visual-header">
                <span>VOLT / 01</span>
                <span className="signal">
                  <i />
                  <i />
                  <i />
                </span>
              </div>

              <div className="visual-stage">
                <div className="stage-glow" />

                <div ref={carRef} className="car-wrapper">
                  <CarVisual />
                </div>

                <div className="light-streak streak-one" />
                <div className="light-streak streak-two" />

                <div className="stage-particle particle-a" />
                <div className="stage-particle particle-b" />
                <div className="stage-particle particle-c" />
              </div>

              <div className="visual-footer">
                <span>ACTIVE / 01</span>
                <span className="footer-line" />
                <span>SCROLL LINKED</span>
              </div>
            </div>

            {/* RIGHT METRICS */}
            <div ref={metricsRef} className="metrics">
              <div className="metric-card">
                <strong>60 FPS</strong>
                <span>SMOOTH TRANSFORMS</span>
              </div>

              <div className="metric-card">
                <strong>3D</strong>
                <span>DEPTH + SCALE</span>
              </div>

              <div className="metric-card">
                <strong>01 / 04</strong>
                <span>SCROLL SEQUENCE</span>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>SCROLL / MOVE / DISCOVER</span>

            <div className="progress-track">
              <div ref={progressRef} className="progress-fill" />
            </div>

            <span>{String(progress).padStart(2, "0")}%</span>
          </div>
        </div>
      </section>

      {/* MOTION SYSTEM */}
      <section className="system-section">
        <div className="section-container">
          <div className="section-label">
            <span>02 — MOTION SYSTEM</span>
            <span>INTERACTION / 04</span>
          </div>

          <div className="system-heading">
            <h2>
              Every scroll
              <span> becomes part of the story.</span>
            </h2>

            <p>
              This experience combines React, Tailwind CSS, JavaScript,
              GSAP and ScrollTrigger to transform ordinary scrolling
              into a controlled visual sequence.
            </p>
          </div>

          <div className="motion-line">
            <div className="motion-line-dot" />
            <div className="motion-line-progress" />
          </div>

          <div className="features-section">
            <article className="feature-card">
              <div className="feature-number">01</div>
              <div className="feature-icon">↗</div>
              <h3>Scroll Linked</h3>
              <p>
                Visual movement responds directly to scroll position
                instead of relying on disconnected animations.
              </p>
              <span>SCROLLTRIGGER</span>
            </article>

            <article className="feature-card">
              <div className="feature-number">02</div>
              <div className="feature-icon">◌</div>
              <h3>Fluid Motion</h3>
              <p>
                Interpolation, easing and transform-based animation
                keep the interface smooth and responsive.
              </p>
              <span>GSAP ENGINE</span>
            </article>

            <article className="feature-card">
              <div className="feature-number">03</div>
              <div className="feature-icon">◇</div>
              <h3>Visual Depth</h3>
              <p>
                Scale, rotation, glow and layered surfaces create
                depth without overwhelming the interface.
              </p>
              <span>3D TRANSFORMS</span>
            </article>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="technology-section">
        <div className="section-container">
          <div className="section-label">
            <span>03 — TECHNOLOGY</span>
            <span>BUILD STACK</span>
          </div>

          <div className="tech-layout">
            <div>
              <p className="mini-label">THE SYSTEM BEHIND THE EXPERIENCE</p>

              <h2 className="tech-heading">
                Built with
                <br />
                <span>modern web motion.</span>
              </h2>
            </div>

            <div className="tech-stack">
              <div className="tech-chip">
                <span>01</span>
                <strong>REACT</strong>
                <small>COMPONENT UI</small>
              </div>

              <div className="tech-chip">
                <span>02</span>
                <strong>TAILWIND</strong>
                <small>UTILITY STYLING</small>
              </div>

              <div className="tech-chip">
                <span>03</span>
                <strong>GSAP</strong>
                <small>MOTION ENGINE</small>
              </div>

              <div className="tech-chip">
                <span>04</span>
                <strong>SCROLLTRIGGER</strong>
                <small>SCROLL CONTROL</small>
              </div>

              <div className="tech-chip">
                <span>05</span>
                <strong>JAVASCRIPT</strong>
                <small>INTERACTION LOGIC</small>
              </div>

              <div className="tech-chip">
                <span>06</span>
                <strong>VITE</strong>
                <small>FAST TOOLING</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="final-section">
        <div className="final-glow" />

        <div className="final-content">
          <span className="final-label">04 — FINAL FRAME</span>

          <h2>
            KEEP
            <br />
            <span>SCROLLING.</span>
          </h2>

          <p>
            Designed as a scroll-driven automotive interface —
            built to demonstrate interaction, motion and frontend craft.
          </p>

          <div className="final-actions">
            <a
              href="https://github.com/tanishasharma29"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

            <a href="#top" onClick={() => window.scrollTo(0, 0)}>
              BACK TO TOP ↑
            </a>
          </div>
        </div>

        <footer className="site-footer">
          <span>ITZ° / DIGITAL MOTION</span>
          <span>REACT × GSAP × TAILWIND</span>
          <span>2026</span>
        </footer>
      </section>
    </main>
  );
}

export default App;