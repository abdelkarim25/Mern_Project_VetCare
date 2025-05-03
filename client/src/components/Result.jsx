import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Result() {

    return (
        <>
        <Navbar/>
            <div class="table-responsive container">
                <br />
                <h1>
                    Owner Information
                </h1>
                <br />
                <table class="table table-striped table-hover">
                <tbody>
                            <tr>
                                <td>Name</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td>Address </td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td>Telephone</td>
                                <td>none</td>
                            </tr>
                           
                        </tbody>
                </table>

            </div>
            <Footer/>
        </>
    );
}