import React, { useEffect } from "react";
import '../assets/styles/Main.scss';

function Main() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.3;  // sensitivity
      const y = (e.clientY / window.innerHeight - 0.5) * 0.3;
      document.documentElement.style.setProperty('--bg-x', `${x}%`);
      document.documentElement.style.setProperty('--bg-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="landing" className="main-section">
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
