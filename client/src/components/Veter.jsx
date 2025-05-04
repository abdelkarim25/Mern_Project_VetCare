import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Verter() {
    return (

        <>
            <div class="container mt-5">
                <h1 class="mb-4">Veterinarians</h1>
                <br />
                <div class="table-responsive">
                    <br /><br /><br /><br />
                    <table class="table table-striped table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Specialties</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Dr. Emily Carter</td>
                                <td>Dental Care</td>
                            </tr>
                            <tr>
                                <td>Dr. Michael Lee</td>
                                <td>Nutritional Counseling</td>
                            </tr>
                            <tr>
                                <td>Sarah Thompson</td>
                                <td>Diagnostics (imaging and laboratory)</td>
                            </tr>
                            <tr>
                                <td>Sophia Fisher</td>
                                <td>Preventive Medicine and Vaccination</td>
                            </tr>
                            <tr>
                                <td>David Johnson</td>
                                <td>Internal Medicine (general)</td>
                            </tr>
                            <tr>
                                <td>Karim Ahmed</td>
                                <td>General Surgery</td>
                            </tr>
                        </tbody>
                    </table>
                    <br /><br /><br /><br />
                </div>
            </div>
        </>
    );
}