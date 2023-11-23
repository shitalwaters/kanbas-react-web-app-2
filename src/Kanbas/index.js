import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";


function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation />
        <div>
        <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Courses/*" element={<h1>Courses</h1>} />
            <Route path="Calendar/*" element={<h1>Calendar</h1>} />
</Routes>
        </div>
    </div>
    );
}
export default Kanbas;