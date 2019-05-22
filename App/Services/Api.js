// a library to wrap and simplify api calls
import apisauce from 'apisauce';

const api = apisauce.create({
	// base URL is read from the "constructor"
	baseURL: 'https://tilawati-api.herokuapp.com/api/',
	// here are some default headers
	headers: {
        "Content-Type": "application/json"
	},
	// 10 second timeout...
	timeout: 10000
});

export const authUser = (email, password) => api.post('login', { email, password })

// let's return back our create method as the default.
	