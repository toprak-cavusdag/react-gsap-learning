import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SvgTransformExample = () => {
  const shapeRef = useRef(null);

  useEffect(() => {
    gsap.to(shapeRef.current, {
      fill: "red",
      scale: 1.5,
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: "elastic.in(1, 0.3)",
    });
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      style={{ width: "100px", height: "100px", margin: "100px auto" }}
    >
      <rect
        ref={shapeRef}
        x="25"
        y="25"
        width="50"
        height="50"
        fill="blue"
        style={{ transformOrigin: "center" }}
      />
    </svg>
  );
};

export default SvgTransformExample;
