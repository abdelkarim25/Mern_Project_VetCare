import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function OwnerInfo() {

    return (
        <>
        <Navbar/>
            <div class="container mt-4">

                <div class="row mb-4">
                    <div class="col">
                        <h1 class="section-title">Owner Information</h1>
                        <div class="row mb-3">
                            <div class="col-md-2 fw-bold">Name</div>
                            <div class="col-md-10">Carlos Estaban</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-2 fw-bold">Address</div>
                            <div class="col-md-10">2335 Independence La.</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-2 fw-bold">City</div>
                            <div class="col-md-10">Waunakee</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-2 fw-bold">Telephone</div>
                            <div class="col-md-10">6085555487</div>
                        </div>
                        <div class="mt-3">
                            <Link to="/UpdateOwner" className="btn-fowner">
                            Edit Owner
                            </Link>
                            <Link to="/AddPet" className="btn-fowner">
                            Add New Pet
                            </Link>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col">
                        <h2 class="section-title">Pets and Visits</h2>

                        <div class="card pet-card mb-4">
                            <div class="card-body">
                                <h5 class="card-title">Lucky</h5>

                                <div class="row mb-2">
                                    <div class="col-md-2 fw-bold">Birth Date</div>
                                    <div class="col-md-4">2010-06-24</div>
                                    <div class="col-md-2 fw-bold">Visit Date</div>
                                    <div class="col-md-4">2025-03-09</div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-2 fw-bold">Description</div>
                                    <div class="col-md-10">Analyse complete</div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2 fw-bold">Type</div>
                                    <div class="col-md-4">dog</div>
                                    <div class="col-md-6 text-end">
                                    <Link to="/AddVisit" className="btn-fowner">
                                            Add Visit
                                        </Link>
                                        <Link to="/UpdatePet" className="btn-fowner">
                                            Edit Pet
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                       
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default OwnerInfo