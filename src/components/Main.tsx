import React, { useEffect } from "react";
import '../assets/styles/Main.scss';
interface MainProps {
  mode: "light" | "dark";
}

function Main({ mode }: MainProps) {
    useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0;  // sensitivity
      const y = (e.clientY / window.innerHeight - 0.5) * 0;
      document.documentElement.style.setProperty('--bg-x', `${x}%`);
      document.documentElement.style.setProperty('--bg-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="landing" className="main-section">
  {/* light bg */}
  <div className={`bg-layer bg-light ${mode === "light" ? "bg-active" : ""}`} />

  {/* dark bg */}
  <div className={`bg-layer bg-dark ${mode === "dark" ? "bg-active" : ""}`} />

  <div className="overlay">
    <div className="content">
      <h1>Adi Jha</h1>
      <p>Researcher</p>
    </div>
  </div>
</section>

  );
}

export default Main;
