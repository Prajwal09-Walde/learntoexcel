import CourseForm from '../../components/Admin/CourseForm/CourseForm';
import ExamForm from '../../components/Admin/ExamForm/ExamForm';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

const AdminDashboard = () => {
    //const [courseId, setCourseId] = useState(null);

    //const handleCourseCreate = (createCourseId) => {
    //    setCourseId(createCourseId);
   //}
    return (
        <div className='adminDashboard'>
           <Navbar/>
           <Header/>
           <h1>Course List</h1>
           <CourseForm/>
           <h1>Exam List</h1>
           <ExamForm/>
        </div>
    );
}

export default AdminDashboard;
