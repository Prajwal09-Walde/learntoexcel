import React from 'react';
import './courseList.css'

const CourseList = () => {
    return (
        <div className='courseList'>
            <div className='courseLContainer'>
              <div className='courseTitle'>
                <span className='courseName'>Course Name</span>
                <span className='courseDescription'>Course desc</span>
              </div>
              <button className='courseListButton'>Click to Course</button>
            </div>
        </div>
    );
}

export default CourseList;
