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
                                <td>James Carter</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td>Linda Douglas</td>
                                <td>dentistry surgery</td>
                            </tr>
                            <tr>
                                <td>Sharon Jenkins</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td>Helen Leary</td>
                                <td>radiology</td>
                            </tr>
                            <tr>
                                <td>Rafael Ortega</td>
                                <td>surgery</td>
                            </tr>
                            <tr>
                                <td>Henry Stevens</td>
                                <td>radiology</td>
                            </tr>
                        </tbody>
                    </table>
                    <br /><br /><br /><br />
                </div>
            </div>
        </>
    );
}