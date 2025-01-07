import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//initial ediyoruz...
gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerExample = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -500 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          markers: true,
          start: "top 80%", // Kutunun üstü, pencerenin %80'ine geldiğinde tetiklenir
          end: "bottom 0%", // Kutunun üstü pencerenin %50'sine geldiğinde animasyon biter
          scrub: true, // Kaydırmaya bağlı olarak animasyonu sürekli çalıştırır
        },
      }
    );
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "green",
        margin: "500px auto",
      }}
    ></div>
  );
};

export default ScrollTriggerExample;
