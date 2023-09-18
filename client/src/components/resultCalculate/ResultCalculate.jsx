import { useState } from 'react';

const ResultCalculate = ({onResultCalculate}) => {
    const [totalMarks, setTotalMarks] = useState(50);
    const [passMarks, setPassMarks] = useState(20);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [wrongAnswers, setWrongAnswers] = useState([]);

    const onCalculate = () => {
        const obtainedMarks = 5*correctAnswers - 1*wrongAnswers;

        const result = obtainedMarks >= passMarks ? 'Passed' : 'Failed';

        onResultCalculate(result);
    }
    return (
        <div>
           <h2>Calculate Result</h2> 
           <div>
             <label>Total Marks</label>
             <input 
                type='number'
                value={totalMarks}
                onChange={(e) => setTotalMarks(parseInt(e.target.value))}
             />
           </div>
           <div>
             <label>Pass Marks</label>
             <input 
               type='number'
               value={passMarks}
               onChange={(e) => setPassMarks(parseInt(e.target.value))}
             />
           </div>
           <div>
             <label>Correct Answers</label>
             <input 
               type='number'
               value={correctAnswers}
               onChange={(e) => setCorrectAnswers(parseInt(e.target.value))}
             />
           </div>
           <div>
             <label>Wrong Answers</label>
             <input
               type='number'
               value={wrongAnswers}
               onChange={(e) => setWrongAnswers(parseInt(e.target.value))}
             />
           </div>
           <div>
             <button onClick={onCalculate}>Calculate Result</button>
           </div>
        </div>
    );
}

export default ResultCalculate;
