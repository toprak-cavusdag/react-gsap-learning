import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StaggerExample = () => {
  const itemsRef = useRef([]); // Array olacak

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2, // Her bir eleman için 0.2 saniye gecikme
        scrollTrigger: {
          trigger: itemsRef.current[0], // İlk öğe ile başlar
          start: "top 80%",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div style={{ margin: "200px auto", textAlign: "center" }}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          style={{
            margin: "20px auto",
            width: "200px",
            height: "50px",
            backgroundColor: "burlywood",
            lineHeight: "50px",
            fontWeight: "bold",
          }}
        >
          Eleman {item}
        </div>
      ))}
    </div>
  );
};

export default StaggerExample;
