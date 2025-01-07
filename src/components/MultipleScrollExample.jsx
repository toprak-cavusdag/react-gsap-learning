import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MultipleScrollExample = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50, scale:0.5 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          markers: true,
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 20%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "500px auto",
        width: "200px",
      }}
    >
      <div style={{ width: "100%", height: "50px", backgroundColor: "blue" }} />
      <div
        style={{ width: "100%", height: "50px", backgroundColor: "green" }}
      />
      <div style={{ width: "100%", height: "50px", backgroundColor: "red" }} />
    </div>
  );
};

export default MultipleScrollExample;
