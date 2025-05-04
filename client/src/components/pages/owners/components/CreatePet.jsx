import './animal.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { createPet } from '../../../../services/api';


export default function CreatePet() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [pet, setPet] = useState({
        name: "",
        birthDate: "",
        type: "",
        // ownerId: id
    });

    const handleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value } = e.target;
        setPet({...pet, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (!pet.name.trim() || !pet.birthDate.trim() || !pet.type.trim()) {
            setError("All fields are required");
            return;
        }
        
        setError(null);
        
        try {
            setLoading(true);
            const response = await createPet(id, pet)
            if (response.status === 201) {
                console.log("pet created successfully.")
                navigate(`/owners/${id}`);
            }
        } catch (err) {
            if(err.status === 422) {
                setError(err.response.data.message);
            } else {
                console.error("Error creating pet:", err);
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="container">
            <h1>Add  New  Pet</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="input-name" name='name' value={pet.name} onChange={handleChange} class="form-control col-8 ml-0 text-hover-costem" placeholder="Pet Name" aria-label="Username" aria-describedby="addon-wrapping" />
                
                <label htmlFor=""> Birth day : </label>
                <br />
                <input type="date" id="input-name" name='birthDate' value={pet.birthDate} onChange={handleChange} class="form-control col-8 ml-0 text-hover-costem" placeholder=" " aria-label="Username" aria-describedby="addon-wrapping" />
                
                <label htmlFor=""> Type : </label>
                <br /> 
                <select class="form-select form-control" id="input-name" name='type' value={pet.type} onChange={handleChange}>
                    <option value=""></option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="turtle">Turtle</option>
                    <option value="hamster">Hamster</option>
                </select>
                
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                <button disabled={loading} type="submit" className="btn-fowner">
                    {loading ? "Adding..." : "Add Pet"}
                </button>
                
            </form>
        </div>
    );
}