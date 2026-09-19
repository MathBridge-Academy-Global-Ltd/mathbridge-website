"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  /** Duration in milliseconds before fading out (default: 3000ms = 3s) */
  durationMs?: number;
  /** Optional callback fired when the preloader has finished exiting */
  onComplete?: () => void;
}

export default function Preloader({
  durationMs = 3000,
  onComplete,
}: PreloaderProps) {
  const [show, setShow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock background scroll during preloader
    document.body.style.overflow = "hidden";

    // Play both videos with audio muted (browser autoplay policy)
    containerRef.current?.querySelectorAll("video").forEach((video) => {
      video.muted = true;
      video.play().catch(() => {});
    });

    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, durationMs);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [durationMs]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {show && (
        <motion.div
          ref={containerRef}
          key="mathbridge-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] w-screen h-screen bg-white overflow-hidden select-none pointer-events-none"
          role="dialog"
          aria-modal="true"
          aria-label="Loading MathBridge"
        >
          {/* Mobile & Portrait Tablet Video */}
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            className="w-full h-full object-cover block landscape:hidden"
          >
            <source
              src="/preloader/mathbridge-video-mobile.mp4"
              type="video/mp4"
            />
          </video>

          {/* Desktop & Landscape Tablet Video */}
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            className="w-full h-full object-cover hidden landscape:block"
          >
            <source
              src="/preloader/mathbridge-video-desktop.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
