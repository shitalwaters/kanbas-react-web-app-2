import React from 'react';
import Database from "../Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from './Modules';
import Home from './Home';

function Courses() {
    const location = useLocation();
    const { courseId } = useParams();
    const course = Database.courses.find((course) => course._id === courseId);

    const getActiveLinkName = () => {
        // This will create an array of path segments
        // It also filters out empty strings to safely handle trailing slashes
        const paths = location.pathname.split('/').filter(Boolean); 
        // This checks if the last segment is a known route
        if (paths.length && ["Home", "Modules", "Assignments", "Grades"].includes(paths[paths.length - 1])) {
            return paths[paths.length - 1]; // Return the last segment if it's a known route
        }
        return ""; // Default to empty string if no known route is found
    };

    if (!course) {
        return <div>Course not found</div>;
    }
        const activeLinkName = getActiveLinkName();
    return (
        <div>
        <h1>{course.name} {activeLinkName && ` - ${activeLinkName}`}</h1>
        <CourseNavigation />
        <div>
        <div
        
        className="overflow-y-scroll position-fixed bottom-0 end-0"
        style={{
        left: "320px",
        top: "50px",
        }}

        
        >
        <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home/>} />
        <Route path="Home" element={<h1>Home</h1>} />
        <Route path="Modules" element={<Modules/>} />
        <Route path="Assignments" element={<h1>Assignments</h1>} />
        <Route
        path="Assignments/:assignmentId"
        element={<h1>Assignment Editor</h1>}
        />
        <Route path="Grades" element={<h1>Grades</h1>} />
        </Routes>
        </div>
        </div>
        </div>
        );
        }
        export default Courses;
