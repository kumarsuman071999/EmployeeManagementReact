import React from 'react';

import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const ListEmployeeComponent = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = React.useState([]);
    const [firstLoad, setFirstLoad] = React.useState(true);

    const ROLE = localStorage.getItem("role") ? localStorage.getItem("role") : "USER";

    if (firstLoad) {
        EmployeeService.getEmployees().then(res => {
            setEmployees(res.data);
            setFirstLoad(false);
        }).catch(_ => {
            localStorage.removeItem("jwt");
            navigate("/");
        })
    }

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployeeById(id).then(res => {
            setEmployees(employees.filter(employee => employee.id !== id));
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

    const addEmployee = () => {
        navigate('/new/registration');
    }

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <button className="btn btn-primary" disabled={ROLE !== "ADMIN"} onClick={addEmployee}> Register New Employee</button>
        
            </div>
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
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.employeeId}</td>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName}</td>
                            
                                        <td>
                                            <button onClick={() => editEmployee(employee.id)} className="btn btn-info" disabled={ROLE !== "ADMIN"} >Update </button>
                                            <button style={{ marginLeft: "10px" }} disabled={ROLE !== "ADMIN"} onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => viewEmployee(employee.id)} className="btn btn-info">View </button>
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
export default ListEmployeeComponent;