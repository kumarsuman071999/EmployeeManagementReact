import React, {useState,useEffect} from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import EmployeeService from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
function NewRegistration() {


  const navigate=useNavigate();
  const ROLE = localStorage.getItem("role") ? localStorage.getItem("role") : "USER";

  // password validation
    const [pwdValidation, setPwdValidation] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
        length: false
    });

    const [isValid, setIsValid] = useState(false);

    const { lowercase, uppercase, number, symbol, length } = pwdValidation;

  

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [departmment,setDepartmment]=useState("");
    const [employeeId,setEmployeeId]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");

    const registerNewUser=(e)=>{
        e.preventDefault();

        const newEmployee = { firstName, lastName, departmment,employeeId,username,password,role };

        EmployeeService.createEmployeeRegistration(newEmployee).then((res)=>{
            navigate("/employees");
        }).catch((error)=>{
            toast.error("username already exist or Fill all field")

        });

    }


    // password validator
    useEffect(() => {
        const isPwdValid = Object.values(pwdValidation).every(Boolean);
        console.log(isPwdValid);
        setIsValid(isPwdValid);
        console.log({isValid});
    }, [isValid,pwdValidation])


    const validatePasword = (e) => {
        
        const password = e.target.value;
        console.log(password);
        // regex.test(string)
        const lowercase = /(?=.*[a-z])/.test(password);
        const uppercase = /(?=.*[A-Z])/.test(password);
        const number = /(?=.*\d)/.test(password);
        const symbol = /(?=.*[\W_])/.test(password);
        const length = password.length >= 8;
        setPassword(password)
        setPwdValidation({ lowercase, uppercase, number, symbol, length });
    }



    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value);
    }

   

    

    const changeDepartmentHandler = (event) => {
        setDepartmment(event.target.value);
    }

    const changeEmployeIdHandler = (event) => {
        setEmployeeId(event.target.value);
    }

    const changeUserNameHandler = (event) => {
        setUsername(event.target.value);
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
            <CardHeader>Employee Registration Form</CardHeader>

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

                    <FormGroup >
                        <Label for='username'>Enter UserName</Label>
                        <Input disabled={ROLE !== "ADMIN"} id='username' type='number' placeholder='Enter User name'
                            value={username}
                            onChange={changeUserNameHandler} 
                             
                            
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup >
                        <Label for='password'>Enter Password</Label>
                        <Input disabled={ROLE !== "ADMIN"} id='password' type='password' placeholder='Enter password'
                            value={password}
                            onChange={validatePasword}
                            // onChange={changePasswordHandler}
                             
                        >

                        </Input>
                        <div className='pwdStrength'>
                            <div className={lowercase ?'text-success':'text-danger'}>LowerCase Character :a-z</div>
                            <div className={uppercase ?'text-success':'text-danger'}>Upeer case Character :A_Z</div>
                            <div className={number ?'text-success':'text-danger'}>Numeric Character :0:9</div>
                            <div className={symbol ?'text-success':'text-danger'}>Special Character : @</div>
                            <div className={length ?'text-success':'text-danger'}>Password should consist of 8 or more Character</div>
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label for='department'>Enter Department</Label>
                        <Input id='department' type='text' placeholder='Enter Department'
                            value={departmment}
                            onChange={changeDepartmentHandler}    
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='employeeId'>Enter Employee Id</Label>
                        <Input id='employeeId' type='number' placeholder='Enter Employee Id'
                            value={employeeId}
                            onChange={changeEmployeIdHandler}    
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='role'>Enter Role</Label>
                        

                        <Input
                            value={role}
                            onChange={changeRoleHandler}   
                            id="role"
                            name="select"
                            type="select"
    >
                            
                            <option>USER </option>
                            <option>ADMIN</option>
      
                        </Input>
                    </FormGroup>

                    


                


                    <Container className='text-center'>
                    <Button  
                         disabled={!isValid}
                        
                        onClick={registerNewUser}
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

export default NewRegistration