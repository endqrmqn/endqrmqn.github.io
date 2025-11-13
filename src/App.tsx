import React, {useState, useEffect} from "react";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<"dark" | "light">("dark");

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }
    useEffect(() => {
    // nothing here — no shifts needed
    }, [mode]);




    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    

    return (
    <div className={`main-container ${mode === "dark" ? 'dark-mode' : "light-mode"}`}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
            <Main mode={mode}/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;