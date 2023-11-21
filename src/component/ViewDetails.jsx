

import React from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import EmployeeService from '../service/EmployeeService';

function ViewDetails() {
    const navigate = useNavigate();
    const ROLE = localStorage.getItem("role") ? localStorage.getItem("role") : "USER";
    const {id}=useParams();
    const [employee, setEmployee] = React.useState({});
    const [firstLoad, setFirstLoad] = React.useState(true);

    if (firstLoad) {
        EmployeeService.getEmployeeById(id).then((res) => {
            setEmployee(res.data);
            setFirstLoad(false);
        });
    }

    const cancel = () => {
        if(ROLE==="ADMIN"){
            navigate('/employees');
        }
        else{
            navigate('/userPage');

        }

    }

  return (
    <div>
        
        <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> First Name: {employee.firstName} </label>
                         
                    </div>
                    <div className="row">
                        <label> Last Name: {employee.lastName}</label>
                    </div>
                    <div className="row">
                        <label>Email ID: {employee.email}</label>
                    </div>

                    <div className="row">
                        <label>Date of Birth: {employee.dob}</label>
                        
                    </div>

                    <div className="row">
                        <label>Address: {employee.address}</label>
        
                    </div>

                    <div className="row">
                        <label>City: {employee.city}</label>
                
                    </div>

                    <div className="row">
                        <label>State:{employee.state} </label>
                    
                    </div>

                    <div className="row">
                        <label>Zip code: {employee.zipcode} </label>
                
                    </div>

                    <div className="row">
                        <label>Mobile NO:{employee.mobileNo} </label>
                        
                    </div>

                    <div className="row">
                        <label>Department:{employee.departmment} </label>
                    
                    </div>

                    <div className="row">
                        <label>Employee Id: {employee.employeeId} </label>
                
                    </div>

                    <div className="row">
                        <label>UserName: {employee.username} </label>
                
                    </div>

                    <div className="row">
                        <label>Password: {employee.password} </label>
                
                    </div>

                    <div className="row">
                        <label>Role: {employee.role} </label>
                
                    </div>

                    
                    <Container className='text-center'>
                    
                      
                      <Button  
                        onClick={cancel} 
                        color='danger'>Cancel</Button>
                        

                    </Container>
                </div>

            </div>

    
        
             

    </div>
  )
}

export default ViewDetails