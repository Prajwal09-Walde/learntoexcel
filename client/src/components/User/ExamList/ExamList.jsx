import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './examList.css';
import {Link} from 'react-router-dom'

const ExamList = ({courseId, userId}) => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        const fetchExam = async () => {
            try {
                const rs = await axios.get();
                setExams(rs.data);
            }catch (err) {
                console.error("Error while fetching :(", err)
            }
        }
        fetchExam();
    }, [courseId, userId])

    return (
        <div className='examList'>
            <div className='eContainer'>
              <h2>Course Name</h2>
              <div className='courseDetails'>
                <span className='eName'>Exam name</span>
                <span className='eMarks'>Total Marks: </span>
                <span className='eTime'>Time duration: </span>
                <Link to='/examination'>
                   <button className='eButton'>Proceed to exam</button>
                </Link>
              </div>         
            </div>
        </div>
    );
}

export default ExamList;
