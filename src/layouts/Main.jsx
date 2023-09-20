


import { Route,Routes,Navigate } from 'react-router-dom';
import Table from '../pages/Table';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import { isAuthenticated } from '../helpers/index';
function Main() {
    return (
        
        <div className="Main">
            <div id="content">
                <Routes>
                    <Route path="/" element={ isAuthenticated() ? <Dashboard /> : <Navigate to="/login" /> } />
                    <Route exact path="/" element={<Dashboard title="Dashboard" />} />
                    <Route path="/table" element={<Table title="Table" />} />
                    <Route path="/login" element={<Login title="login" />} />
                   
                </Routes>
            </div>
        </div>
    );
}

export default Main;
