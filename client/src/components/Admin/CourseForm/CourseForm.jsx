import { useState } from "react";
import './courseForm.css';

const CourseForm = () => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');


    const saveCourse = (e) => {
        e.preventDefault();
        console.log({name, desc});
        const data = {name, desc};
        fetch('http://localhost:8500/api/courses', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          }, body: JSON.stringify(data),
        }).then((res) => {
          res.json().then((rs) => {
            console.log('rs', rs);
          })
        })
        
    } 
    
    return (
        <div className="course">
            <div className="courseContainer">
              <h2>Create a Course</h2>
              <form>
                <input 
                  type="text"
                  placeholder='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <input
                  type='text'
                  placeholder='description'
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
                <br/>
                <button onClick={saveCourse}>Create</button>
              </form>
            </div>
        </div>
    );
}

export default CourseForm;
