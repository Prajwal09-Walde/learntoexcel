import { useState } from 'react';
import './examForm.css'
import {useParams} from 'react-router-dom';

const ExamForm = () => {
    const {courseId}  = useParams();
    const [examDetails, setExamDetails] = useState({
        name: '',
        totalMarks: '',
        passMarks: '',
        time: '',
        questions: [],
    });

    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleAddQuestions = () => {
      if (question && options.length >=2 && correctAnswer !== '') {
        setExamDetails({
          ...examDetails,
          questions: [
            ...examDetails.questions,
            {
              question,
              options,
              correctAnswer,
            },
          ],
        });

        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectAnswer('');
      }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.warn({...examDetails});
        const data = ({...examDetails, courseId});
        fetch(`http://localhost:8500/api/exams/`+ courseId,
          {
            method: 'POST',
            headers: {    
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }, body: JSON.stringify(data),
          }
        );
    }
    return (
        <div className='exam'>
           <div className='examContainer'>
             <h2>Create exam</h2>
             <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  placeholder='exam name'
                  value={examDetails.name}
                  onChange={(e) => setExamDetails({...examDetails, name: e.target.value})}
                />
                <br/>
                <input
                  type='number'
                  placeholder='total marks'
                  value={examDetails.totalMarks}
                  onChange={(e) => setExamDetails({...examDetails, totalMarks: e.target.value})}
                />
                <br/>
                <input
                  type='number'  
                  placeholder='pass marks'                
                  value={examDetails.passMarks}
                  onChange={(e) => setExamDetails({...examDetails, passMarks: e.target.value})}
                />
                <br/>
                <input
                  type='text'
                  placeholder='time (in mins)'
                  value={examDetails.time}
                  onChange={(e) => setExamDetails({...examDetails, time: e.target.value})}
                />
                <br/>
                <input
                  type='text'
                  placeholder='enter question'
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                {options.map((option, optionIndex) => (
                 <div key={optionIndex}>
                    <input
                      type='text'
                      placeholder='enter options'
                      value={option}
                      onChange={(e) => {
                        const updatedOptions = [...options];
                        updatedOptions[optionIndex] = e.target.value;
                        setOptions(updatedOptions);
                      }}
                    />
                    <input
                      type='radio'
                      name='correctAnswer'
                      checked={correctAnswer === option}
                      onChange={() => setCorrectAnswer(option)}
                    />
                 </div>
                ))}
                <button type='button' onClick={handleAddQuestions}>Add Questions</button>
                <button type='submit'>Create Examination form</button>
             </form>
           </div> 
        </div>
    );
}

export default ExamForm;
