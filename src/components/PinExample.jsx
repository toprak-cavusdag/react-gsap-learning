import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PinExample = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top", // Sayfa üstüne geldiğinde başlar
      end: "+=400", // 400px kaydırma mesafesi boyunca sabit kalır
      pin: true, // Sabitler
      markers: true, // Başlangıç ve bitiş noktalarını gösterir
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "200px",
        backgroundColor: "orange",
        textAlign: "center",
        lineHeight: "200px",
        margin: "100px auto",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      Ben sabitleniyorum!
    </div>
  );
};

export default PinExample;
