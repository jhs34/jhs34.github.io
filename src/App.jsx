import { useState } from 'react';
import Aurora from './Aurora';
import './App.css';
import logo from './assets/logo.png';

function App() {
    const [activeModal, setActiveModal] = useState(null); // 'projects' or 'about' or null
    const [isClosing, setIsClosing] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuClosing, setIsMenuClosing] = useState(false);

    const openModal = (modalType) => {
        setActiveModal(modalType);
        setIsClosing(false);
        closeMenu();
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setActiveModal(null);
            setIsClosing(false);
        }, 300);
    };

    const toggleMenu = () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            setIsMenuOpen(true);
            setIsMenuClosing(false);
        }
    };

    const closeMenu = () => {
        if (!isMenuOpen) return;
        setIsMenuClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsMenuClosing(false);
        }, 300);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="app-logo" />
                    <span className="logo-text google-sans-flex">JHS</span>
                </div>

                <button
                    className={`menu-button ${isMenuOpen && !isMenuClosing ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {isMenuOpen && (
                    <div className={`glass-menu ${isMenuClosing ? 'closing' : ''}`}>
                        <ul className="menu-items">
                            <li onClick={() => openModal('projects')} className="google-sans-flex">Projects</li>
                            <li onClick={() => openModal('about')} className="google-sans-flex">About</li>
                        </ul>
                    </div>
                )}
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
                <button className="glass-button google-sans-flex" onClick={() => openModal('projects')}>
                    Projects
                </button>
            </div>

            {activeModal && (
                <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={closeModal}>
                    <div className={`glass-modal ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>×</button>

                        {activeModal === 'projects' && (
                            <>
                                <h2 className="google-sans-flex">Projects</h2>
                                <ul className="project-list">
                                    <li>
                                        <a href="/counter" className="project-link noto-sans-kr">
                                            Counter (카운터)
                                        </a>
                                    </li>
                                    {/* Add more projects here */}
                                </ul>
                            </>
                        )}

                        {activeModal === 'about' && (
                            <div className="about-content">
                                <div className="about-header">
                                    <img src={logo} alt="Logo" className="about-logo" />
                                    <span className="about-title google-sans-flex">JHS</span>
                                </div>
                                <div className="about-body">
                                    <a href="https://github.com/jhs34" target="_blank" rel="noopener noreferrer" className="github-link">
                                        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" className="github-icon">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                        </svg>
                                        <span className="google-sans-flex github-username">jhs34</span>
                                    </a>
                                </div>
                                <div className="about-footer">
                                    <p className="google-sans-flex">made with Antigravity</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
