import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Exam = ({examDetails}) => {
    const [response, setResponse] = useState({});
    const [remTime, setRemtime] = useState();

    const handleOption = (questionId, optionIndex) => {
       setResponse({
        ...response,
        [questionId]: optionIndex,
       });
    };

    const handleSubmit = () => {
      console.log('response submitted')
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (remTime > 0) {
                setRemtime(remTime - 1);
            }else {
                handleSubmit();
                clearInterval();
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [remTime]);

    const formatTime = (time) => {
        const minutes = Math.floor(time/60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
    return (
        <div className='exam'>
         <div>
            <h2>name</h2>
            <h3>Instructions</h3>
            <li>
              <p>This is an online-proctored exam. So condidate should not navigate away from this tab while giving the exam and close all tabs before proceeding</p>
            </li>
            <li>
              <p>Each question carries 5 marks. Answering correctly will fetch you 5 marks where as wrongly answered will cut off 1 mark each from your current score</p>
            </li>
            <li>
              <p>Complete the exam well before or on the time. Failing to do so will lead to auto submission of the exam. All the best!</p>
            </li>  
         </div>
          <p>time remaining: 30:00</p>
          <form>
                <div>
                  <p>question</p>
                    <label>
                      <input
                        type='radio'
                        onChange={handleOption}
                      />
                      option
                    </label>
                </div>
            <Link to='/result'>
              <button onClick={handleSubmit}>Submit</button>
            </Link>
          </form>
        </div>
    );
}

export default Exam;
