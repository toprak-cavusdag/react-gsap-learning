import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TimelineExample = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // İlk Animasyon: Kutunun hareketi
    tl.fromTo(
      boxRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 300, duration: 1 }
    );

    //İkinci Animasyon: Kutunun Genişlemesi
    tl.to(boxRef.current, { width: "200px", duration: 0.5 });

    //Üçüncü Animasyon: Kutunun Boyaması
    tl.to(boxRef.current, { backgroundColor: "red", duration: 0.5 });
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

export default TimelineExample;
