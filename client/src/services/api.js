// src/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Owner API calls
export const getOwners = async () => {
  try {
    const response = await axios.get(`${API_URL}/owners`);
    return response;
  } catch (error) {
    console.error('Error fetching owners:', error);
    throw error;
  }
};

export const getOwnerById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/owners/${id}`);
    return response;
  } catch (error) {
    console.error(`Error fetching owner ${id}:`, error);
    throw error;
  }
};

export const createOwner = async (owner) => {
  try {
    const response = await axios.post(`${API_URL}/owners`, owner);
    return response;
  } catch (error) {
    console.error('Error creating owner:', error);
    throw error;
  }
};

export const updateOwner = async (id, owner) => {
  try {
    const response = await axios.put(`${API_URL}/owners/${id}`, owner);
    return response;
  } catch (error) {
    console.error(`Error updating owner ${id}:`, error);
    throw error;
  }
};

export const deleteOwner = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/owners/${id}`);
    return response;
  } catch (error) {
    console.error(`Error deleting owner ${id}:`, error);
    throw error;
  }
};

export const searchOwners = async (lastName) => {
  try {
    const response = await axios.get(`${API_URL}/owners/search/${lastName}`);
    return response;
  } catch (error) {
    console.error(`Error searching owners with lastName ${lastName}:`, error);
    throw error;
  }
};

export const getOwnerPets = async (ownerId) => {
  try {
    const response = await axios.get(`${API_URL}/owners/${ownerId}/pets`);
    return response;
  } catch (error) {
    console.error(`Error fetching pets for owner ${ownerId}:`, error);
    throw error;
  }
};

// Pet APIs
export const createPet = async (id, pet) => {
  try {
    const response = await axios.post(`${API_URL}/owners/${id}/pets`, pet);
    return response;
  } catch (error) {
    console.error('Error creating pet:', error);
    throw error;
  }
};

export const updatePet = async (id, petId, pet) => {
  try {
    const response = await axios.put(`${API_URL}/owners/${id}/pets/${petId}`, pet);
    return response;
  } catch (error) {
    console.error(`Error updating pet ${petId}:`, error);
    throw error;
  }
};

export const getPetById = async (id, petId) => {
  try {
    const response = await axios.get(`${API_URL}/owners/${id}/pets/${petId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching pet ${petId}:`, error);
    throw error;
  }
};

export const deletePet = async (id, petId) => {
  try {
    const response = await axios.delete(`${API_URL}/owners/${id}/pets/${petId}`);
    return response;
  } catch (error) {
    console.error(`Error deleting pet ${petId}:`, error);
    throw error;
  }
};

//Visits APIs
export const getVisitById = async (id, petId, visitId) => {
  try {
    const response = await axios.get(`${API_URL}/owners/${id}/pets/${petId}/visits/${visitId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching visits for pet ${petId}:`, error);
    throw error;
  }
};

export const createVisit = async (id, petId, visit) => { 
  try {
    const response = await axios.post(`${API_URL}/owners/${id}/pets/${petId}/visits`, visit);
    return response;
  } catch (error) {
    console.error('Error creating the visit:', error);
    throw error;
  }
};

export const updateVisit = async (id, petId, visitId, visit) => { 
  try {
    const response = await axios.put(`${API_URL}/owners/${id}/pets/${petId}/visits/${visitId}`, visit);
    return response;
  } catch (error) {
    console.error('Error updating the visit:', error);
    throw error;
  }
};

export const deleteVisit = async (id, petId, visitId) => { 
  try {
    const response = await axios.delete(`${API_URL}/owners/${id}/pets/${petId}/visits/${visitId}`);
    return response;
  } catch (error) {
    console.error('Error deleting the visit:', error);
    throw error;
  }
};