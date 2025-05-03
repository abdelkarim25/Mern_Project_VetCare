import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateOwner, getOwnerById } from "../../../../services/api";
//import "./owner.css";

export default function EditOwner() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [owner, setOwner] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        telephone: ""
    });

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
            const response = await getOwnerById(id);
            const {First_Name, Last_Name, City, Adress, Telephone} = response.data
            setOwner({
                firstName: First_Name,
                lastName: Last_Name,
                city: City,
                address: Adress,
                telephone: Telephone
            });
        } catch (error) {
            console.log("Error while fetching data", error);
        } finally {
            setLoading(false);
        }
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOwner({...owner, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!owner.firstName.trim() || !owner.lastName.trim() || !owner.address.trim() || !owner.city.trim() || !owner.telephone.trim()) {
            setError("All fields are required");
            return;
        }
        
        setError(null);
        
        try {
            const response = await updateOwner(id, owner)
            if (response.status === 201) {
                console.log("Owner updated successfully.")
                navigate(`/owners/${id}`);
            }
        } catch (err) {
            if(err.status === 422) {
                setError(err.response.data.message);
            } else {
               console.error("Error updating owner:", err);
            }
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="general">
            {loading ?
                (
                    <div className="mt-4 d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                ) : (
                    <div className="container">
                        <h1>update Owner</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="form-control text-hover-costem"
                                    placeholder="First Name"
                                    value={owner.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="form-control text-hover-costem"
                                    placeholder="Last Name"
                                    value={owner.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address:</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="form-control text-hover-costem"
                                    placeholder="Address"
                                    value={owner.address}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">City:</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    className="form-control text-hover-costem"
                                    placeholder="City"
                                    value={owner.city}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="telephone" className="form-label">Telephone:</label>
                                <input
                                    type="text"
                                    id="telephone"
                                    name="telephone"
                                    className="form-control text-hover-costem"
                                    placeholder="Telephone"
                                    value={owner.telephone}
                                    onChange={handleChange}
                                />
                            </div>

                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}

                            <button disabled={loading} type="submit" className="btn-fowner">
                                {loading ? "Updating..." : "Update Owner"}
                            </button>
                        </form>
                    </div>
                )
            }
        </div>
    );
}