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