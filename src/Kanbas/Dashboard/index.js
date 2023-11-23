import React from 'react';
import Database from '../Database';
import blueSolid from '../../blueSolid.jpg'
import { Link } from 'react-router-dom';
import "./index.css"


function Dashboard() {
  return (
    <div className="col-md-10">
        <h1>Dashboard</h1>
        <div className="page-header"></div>
        
      <h2>Published Courses</h2>
      <div className="d-flex flex-row flex-wrap">
        {Database.courses.map(course => (
          <div key={course._id} className="m-3" style={{ flex: '1 0 calc(25% - 24px)', maxWidth: 'calc(25% - 24px)' }}>
           
            <div className="card">
              <img className="card-img-top" src={blueSolid} alt="Course Image" />
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                {course.name}
                <p className="card-text">{course._id} </p>
                <p className="card-text">{course.startDate} to {course.endDate}</p>
                </Link>
                
              </div>
            </div>
       
        ))}
      </div>
    </div>
  );
}

export default Dashboard;