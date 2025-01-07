import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SvgDrawExample = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pathRef.current,
      { strokeDasharray: "300", strokeDashoffset: "300" }, // Başlangıç: tamamen gizli
      { 
        strokeDashoffset: "0", 
        duration: 2, 
        ease: "power1.inOut", 
        repeat: -1, // Sonsuz döngü anlamına gelir.
        yoyo: true // Animasyonu ters yönde oynat
    } // Animasyon: çizgi tamamlanıyor
    );
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      style={{ width: "200px", height: "200px", margin: "100px auto" }}
    >
      <circle
        ref={pathRef}
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="blue"
        strokeWidth="5"
      />
    </svg>
  );
};

export default SvgDrawExample;
