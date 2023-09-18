import { useState } from "react";
import ResultCalculate from "../../components/resultCalculate/ResultCalculate";
import { Link } from "react-router-dom";

const Result = () => {
    const [result, setResult] = useState('');

    const handleResult = (onCalculate) => {
        setResult(onCalculate);
    };

    return (
        <div className="result">
          <div className="resultContainer">
            <h1>Result</h1>
            <ResultCalculate onResultCalculate={handleResult}/>
            <div>
              <h2>Result: </h2>
              <p>{result}</p>
            </div>
          </div>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div>
    )
}

export default Result;
