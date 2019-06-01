// a library to wrap and simplify api calls
import apisauce from 'apisauce';

const api = apisauce.create({
	// base URL is read from the "constructor"
	baseURL: 'https://tilawati-api.herokuapp.com/api/',
	// here are some default headers
	headers: {
		'Content-Type': 'application/json'
	},
	// 10 second timeout...
	timeout: 100000
});

export const authUser = (email, password) => api.post('login', { email, password });

export const addUser = (body) =>
	api.post(
		'register',
		{ ...body }
	);

export const getTilawasService = (token) =>
	api.get('tilawas/index', null, {
		headers: {
			'Authorization ': `Bearer ${token}`
		}
	});

export const searchTilawa = (token, body) =>
	api.get(
		'tilawas/search',
		{ ...body },
		{
			headers: {
				'Authorization ': `Bearer ${token}`
			}
		}
	);

export const addTilawa = (body, token) =>
	api.post(
		'tilawas/add',
		{ ...body },
		{
			headers: {
				'Authorization ': `Bearer ${token}`
			}
		}
	);

export const addComment = (id, body) => api.post(`tilawas/${id}/comments/add`, { ...body });

export const likeTilawa = (id, token) =>
	api.post(
		`tilawas/${id}/notes/add`,
		{},
		{
			headers: {
				'Authorization ': `Bearer ${token}`
			}
		}
	);

export const getCurrentUser = (token) => 
	api.get('auth' , null , {
		headers: {
			'Authorization ': `Bearer ${token}`
		}
	}) ;
// let's return back our create method as the default.
