import './animal.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { createVisit } from '../../../../services/api';


export default function CreateVisit() {
    const { id, petId } = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [visit, setVisit] = useState({
        date: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVisit({...visit, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!visit.date.trim() || !visit.description.trim()) {
            setError("All fields are required");
            return;
        }
        
        setError(null);
        
        try {
            setLoading(true);
            const response = await createVisit(id, petId, visit)
            if (response.status === 201) {
                console.log("visit created successfully.")
                navigate(`/owners/${id}`);
            }
        } catch (err) {
            if(err.status === 422) {
                setError(err.response.data.message);
            } else {
                console.error("Error creating visit:", err);
            }
        } finally {
            setLoading(false);
        }
    };


    // CreateVisit.jsx
return (
    <div className="container form-container">
        <h1>Add New Visit</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="visit-date" className="form-label">Visit Date</label>
                <input 
                    type="date" 
                    id="visit-date" 
                    name="date" 
                    value={visit.date} 
                    onChange={handleChange} 
                    className="form-control" 
                />
            </div>
            
            <div className="mb-3">
                <label htmlFor="visit-description" className="form-label">Description</label>
                <textarea 
                    id="visit-description" 
                    name="description" 
                    value={visit.description} 
                    onChange={handleChange} 
                    className="form-control" 
                    rows="4"
                ></textarea>
            </div>
            
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            
            <div className="form-footer">
                <button disabled={loading} type="submit" className="btn-fowner">
                    {loading ? "Adding..." : "Add Visit"}
                </button>
            </div>
        </form>
    </div>
);
}
