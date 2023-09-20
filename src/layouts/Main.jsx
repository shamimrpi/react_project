


import { Route,Routes } from 'react-router-dom';
import Table from '../pages/Table';
import Dashboard from '../pages/Dashboard';
function Main() {
    return (
        
        <div className="Main">
            <div id="content">
                <Routes>
                    <Route exact path="/" element={<Dashboard title="Dashboard" />} />
                    <Route path="/table" element={<Table title="Table" />} />
                </Routes>
            </div>
        </div>
    );
}

export default Main;
