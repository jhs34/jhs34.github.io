import Aurora from './Aurora';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            <div className="content">
                <h1>Welcome to My Main Page</h1>
                <p>This is the beginning of something great.</p>
            </div>
        </div>
    );
}

export default App;
