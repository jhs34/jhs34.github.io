import { useState } from 'react';
import Aurora from './Aurora';
import './App.css';
import logo from './assets/logo.png';

function App() {
    const [showModal, setShowModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const openModal = () => {
        setShowModal(true);
        setIsClosing(false);
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowModal(false);
            setIsClosing(false);
        }, 300); // Match animation duration
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="app-logo" />
                    <span className="logo-text google-sans-flex">JHS</span>
                </div>
            </header>
            <Aurora
                colorStops={["#4F8CFD", "#6453ff", "#4F8CFD"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            <div className="content">
                <h1>Welcome</h1>
                <p className="subtitle noto-sans-kr">환영합니다</p>

                <div className="scroll-indicator">
                    <p className="noto-sans-kr">아래로 스크롤하여 프로젝트 보기</p>
                    <div className="arrow">↓</div>
                </div>
            </div>

            <div className="projects-section">
                <button className="glass-button google-sans-flex" onClick={openModal}>
                    Projects
                </button>
            </div>

            {showModal && (
                <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={closeModal}>
                    <div className={`glass-modal ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
                        <h2 className="google-sans-flex">Projects</h2>
                        <ul className="project-list">
                            <li>
                                <a href="/counter" className="project-link noto-sans-kr">
                                    Counter (카운터)
                                </a>
                            </li>
                            {/* Add more projects here */}
                        </ul>
                        <button className="close-button" onClick={closeModal}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
