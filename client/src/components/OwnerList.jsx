import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getOwners } from '../services/api';
import Spinner from './common/Spinner';

export default function OwnerList() {
    const [owners, setOwners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOwners = async () => {
            try {
                setLoading(true);
                const data = await getOwners();
                setOwners(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch owners. Please try again later.');
                console.error('Error fetching owners:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchOwners();
    }, []);

    if (loading) return <Spinner />;

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h1 className="mb-4">Owners</h1>
                <br />

                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                {!error && (
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Telephone</th>
                                    <th>Pets</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {owners.length > 0 ? (
                                    owners.map(owner => (
                                        <tr key={owner._id}>
                                            <td>
                                                <Link to={`/owners/${owner._id}`}>
                                                    {owner.firstName} {owner.lastName}
                                                </Link>
                                            </td>
                                            <td>{owner.address}</td>
                                            <td>{owner.city}</td>
                                            <td>{owner.telephone}</td>
                                            <td>
                                                {/* We'll implement a way to show pets here in a full implementation */}
                                                {/* This would require an API call to get pets for each owner */}
                                            </td>
                                            <td>
                                                <Link to={`/owners/${owner._id}/edit`} className="btn-fowner btn-sm me-2">
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center">No owners found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className="mt-3">
                    <Link to="/AddOwner" className="btn-fowner">
                        Add Owner
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}