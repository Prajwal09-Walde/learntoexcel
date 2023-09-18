import Header from "../../components/header/Header";
import Login from "../../components/login/Login";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
           <Navbar/> 
           <Header/>
           <div className="homeContainer">
             <h1>Welcome To LearnToExcel. Students' guide to excel</h1>
             <Login/>
             <Link to='/userDashboard'>
               <button>Login as User</button>
             </Link>
             <Link to='/adminDashboard'>
               <button>Login as Admin</button>
             </Link>
           </div>
        </div>
    );
}

export default Home;
