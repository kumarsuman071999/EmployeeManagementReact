import React, {useState, useEffect } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import EmployeeService from '../service/EmployeeService';
import { useNavigate,useParams } from 'react-router-dom';

function AddEmployee() {
  const navigate = useNavigate();

  //get employee id using param
  const {id}=useParams();
  const ROLE = localStorage.getItem("role") ? localStorage.getItem("role") : "USER";

  

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dob,setDob]=useState("");
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const [zipcode,setZipcode]=useState("");
    const[mobileNo,setMobileNo]=useState("");
    const [departmment,setDepartmment]=useState("");
    const [employeeId,setEmployeeId]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");



    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email,dob,address,city,state,zipcode,mobileNo,departmment,employeeId,username,password,role };
        if(id){
          EmployeeService.updateEmployee(employee,id).then((response)=>{
            if(ROLE==="ADMIN"){
                navigate('/employees');
            }
            else{
                navigate('/userPage');
    
            }

          }).catch(error=>{
            console.log(error);
          })
        }
         else{
            navigate('/employees');

    
       }

    
            
    }
    

    

     // update employee api call
    useEffect(() => {
      EmployeeService.getEmployeeById(id).then((response)=>{
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmail(response.data.email)
        setDob(response.data.dob)
        setAddress(response.data.address)
        setCity(response.data.city)
        setState(response.data.state)
        setZipcode(response.data.zipcode)
        setMobileNo(response.data.mobileNo)
        setDepartmment(response.data.departmment)
        setEmployeeId(response.data.employeeId)
        setUsername(response.data.username)
        setPassword(response.data.password)
        setRole(response.data.role)
      }).catch(error=>{
        console.log(error);
      })
    
     
    }, [id])
    

    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value);
    }

    const changeEmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const changeDobHandler = (event) => {
        setDob(event.target.value);
    }

    const changeAddressHandler = (event) => {
        setAddress(event.target.value);
    }

    const changeStateHandler = (event) => {
        setState(event.target.value);
    }

    const changeCityHandler = (event) => {
        setCity(event.target.value);
    }

    const changeZipcodeHandler = (event) => {
        setZipcode(event.target.value);
    }

    const changeMobileNoHandler = (event) => {
        setMobileNo(event.target.value);
    }

    const changeDepartmentHandler = (event) => {
        setDepartmment(event.target.value);
    }

    const changeEmployeIdHandler = (event) => {
        setEmployeeId(event.target.value);
    }

    

    const changeRoleHandler = (event) => {
        setRole(event.target.value);
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
    
    <Container>
    <Row>
        <Col sm={{ size:6,offset:3}}>
        <Card color="secondary">
            <CardHeader>Update Employee</CardHeader>

            <CardBody>
                <Form >

                <FormGroup>
                        <Label for='firstName'>Enter FirstName</Label>
                        <Input id='firstName' type='text' placeholder='Enter First Name'
                            value={firstName}
                            onChange={changeFirstNameHandler}    
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='lastName'>Enter LastName</Label>
                        <Input id='LastName' type='text' placeholder='Enter LastName'
                            value={lastName}
                            onChange={changeLastNameHandler}    
                        >

                        </Input>
                    </FormGroup>

                   

                    

                    <FormGroup>
                        <Label for='email'>Enter Email</Label>
                        <Input id='email' type='email' placeholder='Enter Email'
                            value={email}
                            onChange={changeEmailHandler}    
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='dob'>Enter DOB</Label>
                        <Input id='dob' type='date' placeholder='Enter Date of Birth'
                            value={dob}
                            onChange={changeDobHandler}    
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='address'>Enter Address</Label>
                        <Input id='address' type='text' placeholder='Enter Address'
                            value={address}
                            onChange={changeAddressHandler}    
                        >

                        </Input>
                    </FormGroup>


                    <FormGroup>
                        <Label for='city'>Enter City</Label>
                        <Input id='city' type='text' placeholder='Enter City'
                            value={city}
                            onChange={changeCityHandler}    
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='state'>Enter State</Label>
                        <Input 
                        
                        id='state' type='text' placeholder='Enter State'
                            value={state}
                            onChange={changeStateHandler}    
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='zipCode'>Enter ZipCode</Label>
                        <Input id='zipCode' type='number' placeholder='Enter Zip Code:'
                            value={zipcode}
                            onChange={changeZipcodeHandler}    
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='mobileNo'>Enter Mobile No</Label>
                        <Input id='mobileNo' type='number' placeholder='Enter Mobile NO.'
                            value={mobileNo}
                            onChange={changeMobileNoHandler}    
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='department'>Enter Department</Label>
                        <Input id='department' type='text' placeholder='Enter Department'
                            value={departmment}
                            onChange={changeDepartmentHandler}    
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup  >
                        <Label for='employeeId'>Enter Employee Id</Label>
                        <Input id='employeeId' type='number' placeholder='Enter Employee Id'
                            value={employeeId}
                            onChange={changeEmployeIdHandler}    
                            disabled={ROLE !== "ADMIN"}
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup   >
                        <Label for='role'>Enter Role</Label>
                        <Input id='role' type='text' placeholder='Enter Role'
                            value={role}
                            onChange={changeRoleHandler}    
                            disabled={ROLE !== "ADMIN"}
                        >

                        </Input>
                    </FormGroup>

                    


                


                    <Container className='text-center'>
                    <Button  
                        
                        onClick={saveOrUpdateEmployee}
                        color='primary'>Save</Button>
                      
                    <Button  
            
        

                        onClick={cancel} 
                        color='danger'>Cancel</Button>
                        

                    </Container>
                </Form>

            </CardBody>
        </Card>
        </Col>
    </Row>
    
</Container>
  )
}

export default AddEmployee


