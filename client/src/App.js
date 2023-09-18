import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/registration/RegistrationForm";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import Examination from "./pages/Examination/Examination";
import Result from "./pages/results/Result";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/register" element={<RegistrationForm/>}/>
         <Route path="/adminDashboard" element={<AdminDashboard/>}/>
         <Route path="/userDashboard" element={<UserDashboard/>}/>
         <Route path="/examination" element={<Examination/>}/>
         <Route path="/result" element={<Result/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
