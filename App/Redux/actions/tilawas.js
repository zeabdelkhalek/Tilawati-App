import { SET_TILAWAS, SET_TILAWAS_SEARCH } from './actionTypes';
import { getTilawasService, likeTilawa, searchTilawa , addTilawa } from '../../Services/Api';

export const getTilawas = () => {
	return (dispatch, getState) => {
		const promise = new Promise((resolve, reject) => {
			const token = getState().auth.token;
			if (!token) {
				reject();
			}
			getTilawasService(token)
				.catch((err) => {
					// console.warn(token);
					reject();
				})
				// .then(res => res.json())
				.then((res) => {
					if (!res.ok) {
						reject();
					} else {
						dispatch(setTilawas(res.data.data));
						resolve();
					}
				});
		});
		return promise;
	};
};

export const tryLike = (id) => {
	return (dispatch, getState) => {
		const promise = new Promise((resolve, reject) => {
			const token = getState().auth.token;
			likeTilawa(id, token).then((res) => {
				console.warn(res);

				if (!res.ok) {
					reject(res.problem);
				} else {
					resolve();
				}
			});
		});
		return promise;
	};
};
export const tryAddTilawa = (id) => {
	return (dispatch, getState) => {
		const promise = new Promise((resolve, reject) => {
			const token = getState().auth.token;
			addTilawa(body, token).then((res) => {
				console.warn(res);
				if (!res.ok) {
					reject(res.problem);
				} else {
					dispatch(getTilawas())
					resolve();
				}
			});
		});
		return promise;
	};
};

export const setTilawas = (data) => {
	return {
		type: SET_TILAWAS,
		tilawas: data
	};
};

export const setTilawasSearch = (data) => {
	return {
		type: SET_TILAWAS_SEARCH,
		tilawas: data
	};
};

export const trySearch = (query) => {
	return (dispatch, getState) => {
		const promise = new Promise((resolve, reject) => {
			const token = getState().auth.token;
			searchTilawa(token, query)
				.catch((err) => {
					reject(err);
				})
				.then((res) => {
					if (!res.ok) {
						reject();
					} else {
						dispatch(setTilawasSearch(res.data.data));
						resolve();
					}
				});
		});
		return promise;
	};
};
