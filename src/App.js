
import './App.css';
import Footer from './layouts/Footer';
import Main from './layouts/Main';
import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <body id="page-top">
        <div className="App">
          <div id="wrapper">
            <Router>
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <Navbar />
                <Main />
              </div>
              <Footer />
            </div>
            </Router>
          </div>
      </div>
    </body>
  
  );
}

export default App;
