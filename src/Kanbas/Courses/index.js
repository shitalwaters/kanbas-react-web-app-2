import React from 'react';
import Database from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";

function Courses() {
    const { courseId } = useParams();
    const course = Database.courses.find((course) => course._id === courseId);
    console.log("Course ID:", courseId);
    console.log("Course:", course);
    
    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div>
        <h1>Course {course.name}</h1>
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
        <Route path="Home" element={<h1>Home</h1>} />
        <Route path="Modules" element={<h1>Modules</h1>} />
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
