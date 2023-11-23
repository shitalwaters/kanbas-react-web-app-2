import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import CourseNavigation from "./Courses/CourseNavigation";


function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation />
            <div>
            <Routes>
    <Route path="/" element={<Navigate to="Dashboard" />} />
    <Route path="Account" element={<h1>Account</h1>} />
    <Route path="Dashboard" element={<Dashboard />} />
    <Route path="Courses" element={<CourseNavigation />} /> {/* General Courses Page */}
    <Route path="Courses/Home" element={<h1>Home</h1>} />{/* General Home Page */}
    <Route path="Courses/Modules" element={<h1>Modules</h1>} />
    <Route path="Courses/Assignments" element={<h1>Assignments</h1>} />
    <Route path="Courses/Grades" element={<h1>Grades</h1>} />
    <Route path="Courses/:courseId/*" element={<Courses />} /> {/* Specific Course Page */}
    {/* ... other routes ... */}
</Routes>

            </div>
        </div>
    );
}
export default Kanbas;
