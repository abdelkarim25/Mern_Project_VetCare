import './animal.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


export default function UpDatePet() {
    return (
        <>
        <Navbar/>
            <div>

                <h1>
                    Update  Pet  Information
                </h1>

                <div className="container">
                    <label> Owner</label>
                    <br />
                    <label> Carlos Estaban</label>
                    <br />
                    <input type="text" id="input-name" class="form-control col-8 ml-0 text-hover-costem" placeholder="Last Name" aria-label="Username" aria-describedby="addon-wrapping" />
                    <label htmlFor=""> Birth day : </label>
                    <br />
                    <input type="date" id="input-name" class="form-control col-8 ml-0 text-hover-costem" placeholder=" " aria-label="Username" aria-describedby="addon-wrapping" />
                    <select class="form-select form-control" id="input-name" multiple aria-label="Multiple select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <Link to="/OwnerInfo" className="btn-fowner">
                        Update The Pet 
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    );
}