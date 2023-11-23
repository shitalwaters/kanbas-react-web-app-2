import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./index.css"

{/*BreadCrum at the top w/ dynamically changing Title */}
function getPageTitle(url) {
    const pathSegments = url.split("/").filter(segment => segment.length > 0);
    const lastSegment = pathSegments[pathSegments.length - 1];
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
}

function Kanbas() {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname);

    return (
        <div className="d-flex">
            <KanbasNavigation />
            <div>
                {/* Dynamic Title */}
                <div className="page-title">
                    <h2>{pageTitle}</h2>
                </div>

                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/*" element={<h1>Courses</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default Kanbas;
