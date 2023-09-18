import { useState } from "react";
import './registrationForm.css';
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const RegistrationForm = () => {
    const [details, setDetails] = useState({
        email: '',
        name: '',
        gender: '',
        phoneNumber: '',
        password: '',
    })

    const onRegister = (e) => {
        e.preventDefault();
    }
    return (
        <div className="registration">
           <Header type='!list'/>
           <h1>Register</h1>
           <div className="rContainer">
             <form onSubmit={onRegister}>
                <label>Email: </label>
                <input 
                  type="text" 
                  placeholder="email" 
                  value={details.email}
                  onChange={(e) => setDetails({...details, email: e.target.value})}
                  />
                <br/>
                <label>Name: </label>
                <input 
                  type="text" 
                  placeholder="name" 
                  value={details.name}
                  onChange={(e) => setDetails({...details, name: e.target.value})}
                  />
                <br/>
                <label>Gender: </label>
                <input 
                  type="text" 
                  placeholder="gender" 
                  value={details.gender}
                  onChange={(e) => setDetails({...details, gender: e.target.value})}
                  />
                <br/>
                <label>Phone no: </label>
                <input 
                 type="text" 
                 placeholder="phone-number" 
                 value={details.phoneNumber}
                 onChange={(e) => setDetails({...details, phoneNumber: e.target.value})}
                />
                <br/>
                <label>Password: </label>
                <input 
                 type="text" 
                 placeholder="password" 
                 value={details.password}
                 onChange={(e) => setDetails({...details, password: e.target.value})}
                />
                <br/>
                <Link>
                  <button className='rButton' type="submit">Register</button>
                </Link>
             </form>
           </div> 
        </div>
    );
}

export default RegistrationForm;
