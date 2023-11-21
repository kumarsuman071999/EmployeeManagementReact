import React from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import LoginService1 from "../service/LoginService1";






const LoginComponent = () => {


    const navigate = useNavigate();

    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleUserNameChange = event => setUserName(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);



    const handleSubmit = async (e) => {
        e.preventDefault();
        try{

            const loginCredentials = { username, password };
        
            const response = await LoginService1.authenticate(loginCredentials)
            const body = response.data;
            if (body.jwt) {
                localStorage.clear();
                localStorage.setItem("jwt", body.jwt);
                localStorage.setItem("role", body.role);
                localStorage.setItem("username",username);
                if(body.role==="ADMIN"){
                    navigate("/adminPage")
                }
                else{
                    navigate("/userPage")
                }
            
            } 
            setUserName("");
            setPassword("");


        }catch(error){
            
    
            toast.error("invalid username and password")
            
        };
        


    };

    

    return (
        <div>


<Container>
    <Row>
        <Col sm={{ size:6,offset:3}}>
        <Card color="secondary">
            <CardHeader><h2>Login our website</h2></CardHeader>

            <CardBody>
                <Form >
                    <FormGroup>
                        <Label for='username'>Enter UserName</Label>
                        <Input id='username' type='text' placeholder='Enter User name'
                           
                            value={username}
                            onChange={handleUserNameChange}
                            
                        >

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='password'>Enter Password</Label>
                        <Input id='password' type='password' placeholder='Enter password'
                             
                            

                            value={password}
                            onChange={handlePasswordChange}
                            
                            
                        >

                        </Input>
                    </FormGroup>
                    

                    <Container className='text-center'>
                        <Button  
                        // preventdefault
        
                        onClick={handleSubmit} 
                        color='primary'>Login</Button>

                    </Container>

                    
                </Form>

            </CardBody>
        </Card>
        </Col>
    </Row>
    
</Container>





       

        </div>
    );
}

export default LoginComponent;