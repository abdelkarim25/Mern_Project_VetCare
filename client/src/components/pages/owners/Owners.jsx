import "./owners.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { deleteOwner } from "../../../services/api";

export default function Owners() {
  const [owners, setOwners] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const params = {};
    if (search) {
      params.lastName = search;
    }

    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/owners", {
        params: params,
      });
      setOwners(response.data);
    } catch (error) {
      console.log("Error while fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const handChangeSearch = (value) => {
    setSearch(value);
  };

  const handleClick = () => {
    fetchData();
  };
  
  const handleDelete = async (id) => {
    try {
      const response = await deleteOwner(id);
      if(response.status === 200){
        const newOwners = owners.filter(owner => owner._id !== id)
        setOwners(newOwners);
        // fetchData();
      }
    } catch (error) {
      console.log("Error while fetching data", error);
    }
  };


  return (
    <>
      <div className="general">
        <div className="container ">
          <br />
          <br />
          <br />
          <h1> Find Owner </h1>
          <br />
          <br />
          <br />

          <label>Search :</label>
          <input
            type="text"
            value={search}
            onChange={(e) => handChangeSearch(e.target.value)}
            id="input-name"
            className="mb-1 form-control col-8 ml-0 text-hover-costem"
            placeholder="Last Name"
          />

          <button onClick={handleClick} className="btn-fowner">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
            Find
          </button>
          <br />
          <br />
        </div>
      </div>

      <div className="container mt-4">
        <h1 className="mb-4">Owners</h1>
        <br />
        
        <Link to="/owners/create" className="btn-fowner">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 640 512">
          <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304
           178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3
            512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24
             10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
          Add Owner
        </Link>
        <br />
        {loading === true ? (
          <div className="mt-4 d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          
          <div className="table-responsive mt-4">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Telephone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {owners.map((owner) => (
                  <tr key={owner._id}>
                    <td>
                      <Link to={`/owners/${owner._id}`}>
                        {owner.First_Name} {owner.Last_Name}
                      </Link>
                    </td>
                    <td>{owner.Adress}</td>
                    <td>{owner.City}</td>
                    <td>{owner.Telephone}</td>
                    <td>
                      <button onClick={() => handleDelete(owner._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}