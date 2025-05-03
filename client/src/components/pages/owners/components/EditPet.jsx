import './animal.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPetById, updatePet } from '../../../../services/api';
import { formatDate } from '../../../common/utils';

export default function EditPet() {
    const { id, petId } = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pet, setPet] = useState({
        name: "",
        birthDate: "",
        type: ""
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await getPetById(id, petId);
            const { name, birthDate, type } = response.data;
            setPet({ name, birthDate, type });
        } catch (error) {
            console.error("Error while fetching pet data:", error);
            setError("Failed to load pet information.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPet({ ...pet, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!pet.name.trim() || !pet.birthDate.trim() || !pet.type.trim()) {
            setError("All fields are required");
            return;
        }

        setError(null);

        try {
            const response = await updatePet(id, petId, pet);
            if (response.status === 201) {
                console.log("Pet updated successfully.");
                navigate(`/owners/${id}`);
            }
        } catch (err) {
            console.error("Error updating pet:", err);
        } finally {
            setLoading(false);
        }
    };
        

    return (
        <div className="container">
            <h1>Edit Pet</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="input-name"
                    name="name"
                    value={pet.name}
                    onChange={handleChange}
                    className="form-control col-8 ml-0 text-hover-costem"
                    placeholder="Pet Name"
                />
                <label>Birth Date:</label>
                <input
                    type="date"
                    id="input-birthday"
                    name="birthDate"
                    value={formatDate(pet.birthDate)}
                    onChange={handleChange}
                    className="form-control col-8 ml-0 text-hover-costem"
                />
                <label>Type:</label>
                <select
                    className="form-select form-control"
                    id="input-type"
                    name="type"
                    value={pet.type}
                    onChange={handleChange}
                >
                    <option value=""></option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn-fowner" disabled={loading}>
                    {loading ? "Updating..." : "Update Pet"}
                </button>
            </form>
        </div>
    );
    }
