import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

function User() {
  const {id}=useParams();
  console.log(id);
  const navigate = useNavigate();
    const [employees, setEmployees] = React.useState([]);
    const [firstLoad, setFirstLoad] = React.useState(true);


    if (firstLoad) {
        EmployeeService.getEmployees().then(res => {
        
                setEmployees(res.data);
                setFirstLoad(false);

        
            
        }).catch(_ => {
            localStorage.removeItem("jwt");
            navigate("/");
        })
    }

    
    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);
    }

    const editEmployee = (id) => {
        navigate(`/add-employee/${id}`);
    }
    let userId=localStorage.getItem("username");

    

    
    
    

   
  return (
    <div>
            <h2 className="text-center">Employee List</h2>

            <br></br>
            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>Employee id</th>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        

                           

                            
                            employees.map(

                                
                                (employee) =>
                        
                                
                                        <tr key={employee.id } hidden={employee.username !==userId}>
                                        <td>
                                            
                                            {employee.employeeId}

                                            
                                        </td>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName}</td>
                                        
                                        
                                        <td>
                                            <button onClick={() => editEmployee(employee.id)} className="btn btn-info"   >Update </button>
        
                                            <button style={{ marginLeft: "10px" }} onClick={() => viewEmployee(employee.id)} className="btn btn-info"  >View </button>
                                        </td>
                                    </tr>
                                    
                                    
                                        
                                    

                                
                                    
                                    

                    
                                
                                    
                                )
                            
                        }
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default User