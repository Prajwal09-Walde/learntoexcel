import ExamList from '../../components/User/ExamList/ExamList';
import CourseList from '../../components/User/CourseList/CourseList';
import Header from '../../components/header/Header';
import './userDashboard.css'

const UserDashboard = ({courseId, userId}) => {

    //const [selectedExam, setSelectedExam] = useState(null);
 
    //const startExam = (examId) => {
       // setSelectedExam(examId);
   // };

    return (
        <div className='userDashboard'>
           <Header/>
           <h1>User Dashboard</h1>
           <div className='userContainer'>
                <CourseList/>
                <ExamList/>
           </div> 
        </div>
    );
}

export default UserDashboard;
