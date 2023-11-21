import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const HeaderComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const onLogoutClick = () => {
        localStorage.clear();
        navigate("/");
    }

    const updatePassword=()=>{
        navigate("/update/password")
    }
   

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">Employee Management</div>
                    
                
                    {(location.pathname !== "/" && location.pathname !== "/BOS/index.jsp") ? <button className="btn btn-primary" style={{ marginRight: 30 }} onClick={updatePassword}> Update Password</button> : <></>}
                    {(location.pathname !== "/" && location.pathname !== "/BOS/index.jsp") ? <button className="btn btn-primary" style={{ marginRight: 30  }} onClick={onLogoutClick} > Logout</button> : <></>}

                    
                </nav>
            </header>
        </div>
    )
}
export default HeaderComponent;