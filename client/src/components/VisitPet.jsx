import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";


export default function VisitPet() {
    return (
        <>
        <Navbar/>
        <div className="container mt-4">
            <h1 className="mb-4">New Visit</h1>
            
            <div className="table-responsive mb-4">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Telephone</th>
                            <th>Pets</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>George Franklin</td>
                            <td>110 W. Liberty St.</td>
                            <td>Madison</td>
                            <td>6085551023</td>
                            <td>Leo</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-3 ml-0">
                <label htmlFor="visit-date" className="form-label">
                    Date:
                </label>
                <input 
                    type="date" 
                    id="visit-date" 
                    className="form-control" 
                    aria-label="Visit date" 
                />
            </div>

            <div className="form-floating mb-3">
                <textarea 
                    className="form-control " 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea2" 
                    style={{ height: '100px' }}
                ></textarea>
                <label htmlFor="floatingTextarea2">Description</label>
                <Link to="/OwnerInfo" className="btn-fowner">
                        Add Visit
            </Link>
            </div>
            <div>
                <label> Priviouse  Visit </label>
                <div className="table-responsive mb-4">
                <table className="table table-striped table-hover">
                <tbody>
                        <tr>
                            <td>Date  </td>
                            <td> Description </td>
                         
                        </tr>
                        <tr>
                            <td> 20/10/2006</td>
                            <td> Analyse Complet </td>
                           
                        </tr>
                        <tbody>
                       
                    </tbody>
                    </tbody>
                </table>
                </div>
            </div>

        </div>
        <Footer/>
        </>
    );
}