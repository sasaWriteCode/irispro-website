import { useEffect, useState, useRef } from 'react';

const CounterItem = ({ target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth easeOutQuad function
      const easedProgress = progress * (2 - progress);
      const currentVal = Math.floor(easedProgress * (end - start) + start);
      
      setCount(currentVal);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return (
    <div className="sc__item" ref={elementRef}>
      <span className="sc__number">{count.toLocaleString()}</span>
      <span className="sc__label">{label}</span>
    </div>
  );
};

export default function StatsCounter() {
  const STATS = [
    { target: 325138, label: 'Happy Clients' },
    { target: 31, label: 'Service Centers' },
    { target: 8, label: 'Countries' },
    { target: 2, label: 'Technology Patents' },
  ];

  return (
    <section className="sc" aria-label="IrisPro achievements and reach">
      <div className="sc__inner">
        {STATS.map((s, i) => (
          <CounterItem key={i} target={s.target} label={s.label} />
        ))}
      </div>
    </section>
  );
}
