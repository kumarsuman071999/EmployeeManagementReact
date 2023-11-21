import axios from "axios";

const EMPLOYEE_API_BASE_URL="/api/v1/employees/";

let headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
}

const getEmployees = () => {
    headers = { ...headers, "Authorization": `Bearer  ${localStorage.getItem("jwt")}` };
    return axios.get(EMPLOYEE_API_BASE_URL, { headers });
}



const getEmployeeById = (employeeId) => {
    headers = { ...headers, "Authorization": `Bearer  ${localStorage.getItem("jwt")}` };
    return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId, { headers });
}

const updateEmployee = (employee, employeeId) => {
    headers = { ...headers, "Authorization": `Bearer  ${localStorage.getItem("jwt")}` };
    return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee, { headers });
}

const deleteEmployeeById = (employeeId) => {
    headers = { ...headers, "Authorization": `Bearer  ${localStorage.getItem("jwt")}` };
    return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId, { headers });
}

const updatePasswordChange = (requestMap) => {
    headers = { ...headers, "Authorization": `Bearer  ${localStorage.getItem("jwt")}` };
    return axios.post(EMPLOYEE_API_BASE_URL + 'password/', requestMap, { headers });
}

const createEmployeeRegistration = (newEmployee) => {
    headers = { ...headers, "Authorization": `Bearer  ${localStorage.getItem("jwt")}` };
    return axios.post(EMPLOYEE_API_BASE_URL + 'signup/', newEmployee, { headers });
}



export default {getEmployees, getEmployeeById, updateEmployee, deleteEmployeeById,updatePasswordChange,createEmployeeRegistration};