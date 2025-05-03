import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Update(){

    return(
        <>
        <Navbar/>
        <div className="general">
            <div className="container">
                <h1>
                    Update Owner 
                </h1>
            <label> Last Name :</label>
            
            <input type="text" id="input-name" class="form-control col-8 ml-0 text-hover-costem" placeholder="Last Name" aria-label="Username" aria-describedby="addon-wrapping" />
            
            <label> First Name :</label>
            
            <input type="text" id="input-name" class="form-control col-8 ml-0 text-hover-costem" placeholder="Last Name" aria-label="Username" aria-describedby="addon-wrapping" />
            
            <label> Address :</label>
            
            <input type="text" id="input-name" class="form-control col-8 ml-0 text-hover-costem" placeholder="Last Name" aria-label="Username" aria-describedby="addon-wrapping" />
            
            <label> City :</label>
            
            <input type="text" id="input-name" class="form-control col-8 ml-0 text-hover-costem" placeholder="Last Name" aria-label="Username" aria-describedby="addon-wrapping" />
            
            <label> Telephone :</label>
            
            <input type="text" id="input-name" class="form-control col-8 ml-0 text-hover-costem" placeholder="Last Name" aria-label="Username" aria-describedby="addon-wrapping" />
            
            <Link to="/OwnerInfo" className="btn-fowner">
                        Update Owner
                    </Link>
            </div>
        </div>
        <Footer/>
        </>
    );
}