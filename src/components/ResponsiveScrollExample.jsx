import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ResponsiveExample = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia(); // MatchMedia nesnesini oluştur

    mm.add("(min-width: 768px)", () => {
      // Geniş ekran animasyonu
      gsap.fromTo(
        boxRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
            markers: true,
          },
        }
      );
    });

    mm.add("(max-width: 767px)", () => {
      // Dar ekran animasyonu
      gsap.fromTo(
        boxRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
            markers: true,
          },
        }
      );
    });

    return () => mm.revert(); // Temizlik işlemi
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "purple",
        margin: "200px auto",
      }}
    ></div>
  );
};

export default ResponsiveExample;
