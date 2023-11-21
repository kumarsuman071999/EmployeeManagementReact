
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';



import LoginComponent from './component/LoginComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import AdminPage from './pages/AdminPage';
import User from './pages/User';
import AddEmployee from './component/AddEmployee';
import ViewDetails from './component/ViewDetails';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import ChangePassword from './component/ChangePassword';
import NewRegistration from './component/NewRegistration';


function App() {
  return (
    <div >

      <Router>
      <ToastContainer position="bottom-center"/>
        <HeaderComponent/>
        <Routes>

            <Route path="/BOS/index.jsp" exact element={<LoginComponent/>}></Route>
            <Route path="/" exact element={<LoginComponent/>}></Route>
            <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
            <Route path="/view-employee/:id" element={<ViewDetails/>}></Route>
            <Route path="/adminPage" element={<AdminPage/>}></Route>
            <Route path="/userPage" element={<User/>}></Route>
            <Route path="/add-employee/:id" element={<AddEmployee/>}></Route>
            <Route path="/update/password" element={<ChangePassword/>}></Route>
            <Route path="/new/registration" element={<NewRegistration/>}></Route>



           
        </Routes>

      </Router>

      

    

     
      
     
    </div>
  );
}

export default App;
