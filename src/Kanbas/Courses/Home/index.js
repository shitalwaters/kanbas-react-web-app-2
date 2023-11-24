import ModuleList from "../Modules/ModuleList";
import "./index.css"

function Home() {
    return (
        <div className="home-container">
            <ModuleList />
            <div className="status-container">
                <h2>Status</h2>
                {/* Status content goes here */}
            </div>
        </div>
    );
}
export default Home;
