import './animal.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getVisitById, updateVisit } from '../../../../services/api';
import { formatDate } from '../../../common/utils';


export default function EditVisit() {
    const { id, petId, visitId } = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [visit, setVisit] = useState({
        date: "",
        description: "",
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await getVisitById(id, petId, visitId);
            const { date, description } = response.data;
            setVisit({ date, description });
        } catch (error) {
            console.error("Error while fetching visit data:", error);
            setError("Failed to load visit information.");
        } finally {
            setLoading(false);
        }
    };

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
            const response = await updateVisit(id, petId, visitId, visit)
            if (response.status === 201) {
                console.log("visit updated successfully.")
                navigate(`/owners/${id}`);
            }
        } catch (err) {
            if(err.status === 422) {
                setError(err.response.data.message);
            } else {
                console.error("Error updating visit:", err);
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="container">
            <h1>Add  New  Visit</h1>
            <form onSubmit={handleSubmit}>
                <input type="date" id="input-name" name='date' value={formatDate(visit.date)} onChange={handleChange} class="form-control col-8 ml-0 text-hover-costem" />
                
                <label htmlFor=""> Description : </label>
                <br /> 
                <textarea className="form-control" name='description' value={visit.description} onChange={handleChange}></textarea>
                
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                <button disabled={loading} type="submit" className="btn-fowner">
                    {loading ? "Updating..." : "Update Visit"}
                </button>
                
            </form>
        </div>
    );
}
