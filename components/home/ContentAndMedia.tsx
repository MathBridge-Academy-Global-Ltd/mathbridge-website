"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PlayCircle, ArrowRight } from "lucide-react";

const reels = [
  {
    embedUrl: "https://www.instagram.com/reel/DZ7kw_8SsEB/embed/?autoplay=1",
    postUrl: "https://www.instagram.com/mathbridge.academy/reel/DZ7kw_8SsEB/",
    title: "JAMB Surd Question Solved",
    description:
      "Watch how we break down a tricky JAMB surd question step by step — making complex concepts simple and exam-ready for every student.",
  },
  {
    embedUrl: "https://www.instagram.com/reel/Db3TRUMKH6A/embed/",
    postUrl: "https://www.instagram.com/reel/Db3TRUMKH6A/",
    title: "SAT Registration & Tutorials",
    description:
      "Everything you need to know about SAT registration and how MathBridge prepares students with structured, result-driven tutorial sessions.",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DcZBAM6K1mJ/embed/",
    postUrl: "https://www.instagram.com/mathbridge.academy/reel/DcZBAM6K1mJ/",
    title: "Our Anniversary Celebration",
    description:
      "A look back at the milestones, the students, and the journey — celebrating another year of transforming maths education globally.",
  },
];

export default function ContentAndMedia() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="content-media-section"
      aria-label="Instagram content"
    >
      <div className="content-media-grid">
        {reels.map((reel, i) => (
          <motion.div
            key={reel.postUrl}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className="content-media-card"
          >
            {/* Frame */}
            <div className="content-media-frame">
              {/* Instagram icon badge */}
              <a
                href={reel.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="content-media-ig-badge"
                aria-label={`View ${reel.title} on Instagram`}
              >
                <ArrowRight size={16} />
              </a>

              <iframe
                src={reel.embedUrl}
                title={reel.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading={i === 0 ? "eager" : "lazy"}
                className="content-media-iframe"
              />
            </div>

            {/* Description below */}
            <div className="content-media-info">
              <h3 className="content-media-title">{reel.title}</h3>
              <p className="content-media-desc">{reel.description}</p>

              <a
                href={reel.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="content-media-link"
              >
                <PlayCircle size={14} />
                <span>Watch on Instagram</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .content-media-section {
          padding: 5rem 1.5rem 6rem;
          background: #f8f9fb;
          position: relative;
          overflow: hidden;
        }

        /* Subtle background decoration */
        .content-media-section::before {
          content: "";
          position: absolute;
          top: -120px;
          right: -120px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 9, 175, 0.04) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .content-media-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .content-media-card {
          background: #ffffff;
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06),
            0 1px 4px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .content-media-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0, 9, 175, 0.1),
            0 4px 12px rgba(0, 0, 0, 0.06);
        }

        /* Frame wrapper */
        .content-media-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 9 / 16;
          background: #101928;
          overflow: hidden;
        }

        .content-media-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Instagram badge */
        .content-media-ig-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          z-index: 10;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: background 0.2s ease, transform 0.2s ease;
          text-decoration: none;
        }

        .content-media-ig-badge:hover {
          background: linear-gradient(
            45deg,
            #f09433,
            #e6683c,
            #dc2743,
            #cc2366,
            #bc1888
          );
          transform: scale(1.1);
        }

        /* Text info below frame */
        .content-media-info {
          padding: 1.5rem 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .content-media-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #101928;
          margin: 0 0 0.5rem;
          line-height: 1.3;
        }

        .content-media-desc {
          font-size: 0.875rem;
          color: #4b5563;
          line-height: 1.65;
          margin: 0 0 1.25rem;
          flex: 1;
        }

        .content-media-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: #0009af;
          text-decoration: none;
          transition: color 0.2s ease, gap 0.2s ease;
        }

        .content-media-link:hover {
          color: #000780;
          gap: 0.6rem;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .content-media-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .content-media-section {
            padding: 3.5rem 1rem 4rem;
          }

          .content-media-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
