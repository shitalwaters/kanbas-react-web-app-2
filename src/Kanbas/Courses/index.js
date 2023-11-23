import Database from "../Database";
import { useParams } from "react-router-dom";

function Courses() {
    const { courseId } = useParams();
    const course = Database.courses.find((course) => course._id === courseId);
    return (
        <div>
            <h1>Course {course.name}</h1>
        </div>
    );
}
export default Courses;