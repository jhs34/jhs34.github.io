import Aurora from './Aurora';
import './App.css';
import logo from './assets/logo.png';

function App() {
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
            </div>
        </div>
    );
}

export default App;
