import { useEffect, useRef, useState } from "react";

export default function Fade({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element); // แสดงครั้งเดียวแล้วหยุดสังเกต
          }
        });
      },
      { threshold: 0.2 } // ปรับระดับความเห็น (20%)
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-section ${isVisible ? "show" : ""}`}
    >
      {children}
    </div>
  );
}
