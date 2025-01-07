import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FadeInExample = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
        margin: "100px auto",
      }}
    ></div>
  );
};

export default FadeInExample;
