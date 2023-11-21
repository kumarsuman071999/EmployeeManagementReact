

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";


import EmployeeService from "../service/EmployeeService";

function ChangePassword() {


  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  

  const ROLE = localStorage.getItem("role") ? localStorage.getItem("role") : "USER";
  const navigate = useNavigate();


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


  


  

  const chnagePassword = (e) => {
    e.preventDefault();
    
    const requestMap ={oldPassword,newPassword};
    const objTOJson=JSON.stringify(requestMap);


    
    
    EmployeeService.updatePasswordChange(objTOJson).then((res) => {
      
        if (ROLE === "ADMIN") {
          navigate("/employees");
        } else {
          navigate("/userPage");
        }
      })
      .catch((error) => {
        toast.error("invalid  password")
        
      });
  };




  
  // password validator
  useEffect(() => {
    const isPwdValid = Object.values(pwdValidation).every(Boolean);
    console.log(isPwdValid);
    setIsValid(isPwdValid);
    console.log({isValid});
}, [isValid,pwdValidation])


 const validatePasword = (e) => {
    
    const newPassword = e.target.value;
    console.log(newPassword);
    // regex.test(string)
    const lowercase = /(?=.*[a-z])/.test(newPassword);
    const uppercase = /(?=.*[A-Z])/.test(newPassword);
    const number = /(?=.*\d)/.test(newPassword);
    const symbol = /(?=.*[\W_])/.test(newPassword);
    const length = newPassword.length >= 8;
    setNewPassword(newPassword)
    setPwdValidation({ lowercase, uppercase, number, symbol, length });
 }
  


  

  const cancel = () => {
    if (ROLE === "ADMIN") {
      navigate("/employees");
    } else {
      navigate("/userPage");
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Card color="secondary">
            <CardHeader>
              <h2>Login our website</h2>
            </CardHeader>

            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="oldPassword">Enter Old Password</Label>
                  <Input
                    id="oldPassword"
                    type="password"
                    placeholder="Enter Old Password"
                    value={oldPassword}
                    onChange={(e)=>setOldPassword(e.target.value)}
                    required
                  ></Input>
                </FormGroup>

                <FormGroup>
                  <Label for="newPassword">Enter new Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={validatePasword}
                  ></Input>
                      <div className='pwdStrength'>
                            <div className={lowercase ?'text-success':'text-danger'}>LowerCase Character :a-z</div>
                            <div className={uppercase ?'text-success':'text-danger'}>Upeer case Character :A_Z</div>
                            <div className={number ?'text-success':'text-danger'}>Numeric Character :0:9</div>
                            <div className={symbol ?'text-success':'text-danger'}>Special Character : @</div>
                            <div className={length ?'text-success':'text-danger'}>Password should consist of 8 or more Character</div>
                        </div>

                </FormGroup>

                <Container className="text-center">
                  <Button
                    disabled={!isValid}
                    
                    onClick={chnagePassword}
                    color="primary"
                  >
                    Save
                  </Button>

                  <Button onClick={cancel} color="danger">
                    Cancel
                  </Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangePassword;
