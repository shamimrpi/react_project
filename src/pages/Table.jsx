
import useDocumentTitle from '../assets/js/custom'

function Table(props) {
    useDocumentTitle('Table');
    return (
          <div className="Dashboard">
              <div className="container-fluid">
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">{props.title}</h1>
                      <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                          className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                  </div>
  
                  <div className="row">
                        <h1>Table</h1>
                  </div>
                  
              </div>
        </div>
    
    );
  }
  
  export default Table;
  