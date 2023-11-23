import React from 'react';
import Database from '../Database';
import blueSolid from '../../blueSolid.jpg'
import "./index.css"

function Dashboard() {
  return (
    <div className="col-md-10">
        <h1>Dashboard</h1>
        <div className="page-header"></div>
        
      <h2>Published Courses</h2>
      <div className="d-flex flex-row flex-wrap">
        {Database.courses.map(course => (
          <div key={course.id} className="m-3" style={{ flex: '1 0 calc(25% - 24px)', maxWidth: 'calc(25% - 24px)' }}>
            <div className="card">
              <img className="card-img-top" src={blueSolid} alt="Course Image" />
              <div className="card-body">
                <h5 className="card-title"><a href="">{course.name}</a></h5>
                <p className="card-text">{course.startDate} to {course.endDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;