import axios from "axios";

const env = process.env.NODE_ENV;
export const URL =
	env === "developement"
		? "http://127.0.0.1:5000"
		: "https://tpigl.onrender.com";
export const ANNONCE = "annonces";
export const USER = "users";
export const MESANNONCE = "mesannonces/";

// these functions serve as a wrapper for the axios functions in order to avoid writting the url over and over again
export async function getAll(endpoint, options = {}) {
	return axios.get(`${URL}/${endpoint}`, options);
}

export async function get(endpoint, id, options = {}) {
	return axios.get(`${URL}/${endpoint}/${id}`, options);
}

export async function post(endpoint, data, options = {}) {
	return axios.post(`${URL}/${endpoint}`, data, options);
}

export async function patch(endpoint, id, data, options = {}) {
	return axios.patch(`${URL}/${endpoint}/${id}`, data, options);
}

export async function remove(endpoint, id, options = {}) {
	return axios.delete(`${URL}/${endpoint}/${id}`, options);
}
