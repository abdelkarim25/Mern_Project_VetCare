import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { deletePet, getOwnerById, deleteVisit } from "../../../../services/api";
import { formatDate } from '../../../common/utils';


function Info() {
    const { id } = useParams()
    const [owner, setOwner] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
      }, []);
    
    const fetchData = async () => {
        try {
          const response = await getOwnerById(id);
          setOwner(response.data);
        } catch (error) {
          console.log("Error while fetching data", error);
        } finally {
            setLoading(false);
        }
    };

    const handleRemovePet = async (petId) => {
       /* if (window.confirm("Are you sure you want to remove this pet?")) {
            try {
                await deletePet(petId);
                fetchData();
            } catch (error) {
                console.error("Error removing pet:", error);
                alert("Failed to remove pet.");
            }
        }*/

        try {
            const response = await deletePet(id, petId);
            if(response.status === 200){
                const newPets = owner.pets.filter(pet => pet._id !== petId)
                setOwner(prev => {
                    return {
                        ...prev, 
                        pets: newPets
                    }
                });
                // setOwner({...owner, pets: newPets});
                // fetchData();
            }
        } catch (error) {
            console.log("Error while fetching data", error);
        }
    };

    const handleRemoveVisit = async (petId, visitId) => {
         try {
             const response = await deleteVisit(id, petId, visitId);
             if(response.status === 200){
                setOwner(prev => {
                    const newPets = prev.pets.map(pet => {
                        if(pet._id === petId){
                            const newVisits = pet.visits.filter(visit => visit._id !== visitId)
                            return {...pet, visits: newVisits}
                        }

                        return pet;
                    })

                    return {...prev, pets: newPets}
                });
             }
         } catch (error) {
             console.log("Error while fetching data", error);
         }
     };


    return (
            <div className="container mt-4">
                <div className="row mb-4">
                    <div className="col">
                        <h1 className="section-title">Owner Information</h1>
                        {loading ? 
                            <div className="mt-4 d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        :
                        <>
                            <div className="row mb-3">
                                <div className="col-md-2 fw-bold">Name</div>
                                <div className="col-md-10">{owner.First_Name} {owner.Last_Name}</div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-2 fw-bold">Address</div>
                                <div className="col-md-10">{owner.Adress}</div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-2 fw-bold">City</div>
                                <div className="col-md-10">{owner.City}</div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-2 fw-bold">Telephone</div>
                                <div className="col-md-10">{owner.Telephone}</div>
                            </div>
                            <div className="mt-3">
                                <Link to={`/owners/${id}/update`} className="btn-fowner">Edit Owner</Link>
                                <Link to={`/owners/${id}/pets/create`} className="btn-fowner">Add New Pet</Link>
                            </div>
                        </>
                        }
                    </div>
                </div>
    
                <div className="row">
                    <div className="col">
                        <h2 className="section-title">Pets and Visits</h2>
                            {owner.pets?.map(pet => 
                                <div key={pet._id} className="card pet-card mb-4">
                                    <div className="card-body">
                                        <h5 className="card-title">{pet.name}</h5>
                                        <div className="row mb-2">
                                            <div className="col-md-2 fw-bold">Birth Date</div>
                                            <div className="col-md-4">{formatDate(pet.birthDate)}</div>
                                        </div>
                                            {pet.visits?.map(visit =>
                                                <>
                                                    <div key={visit._id} className="row mb-3">
                                                        <div className="col-md-2 fw-bold">Visit Date</div>
                                                        <div className="col-md-4">{formatDate(visit.date)}</div>
                                                        <div className="col-md-2 fw-bold">Description</div>
                                                        <div className="col-md-10">{visit.description}</div>
                                                    </div>
                                                    <Link to={`/owners/${owner._id}/pets/${pet._id}/visits/${visit._id}/edit`} className="btn-fowner">Edit Visit</Link>
                                                    <button onClick={() => handleRemoveVisit(pet._id, visit._id)} className="btn btn-danger btn-sm">
                                                        Remove Visit
                                                    </button>
                                                </>
                                            )}
                                        <div className="row">
                                            <div className="col-md-2 fw-bold">Type</div>
                                            <div className="col-md-4">{pet.type}</div>
                                            <div className="col-md-6 text-end">
                                                <Link to={`/owners/${owner._id}/pets/${pet._id}/visits/create`} className="btn-fowner">Add Visit</Link>
                                                <Link to={`/owners/${owner._id}/pets/${pet._id}/edit`} className="btn-fowner">Edit Pet</Link>
                                                <button onClick={() => handleRemovePet(pet._id)} className="btn btn-danger btn-sm">
                                                    Remove Pet
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
    );
}
export default Info