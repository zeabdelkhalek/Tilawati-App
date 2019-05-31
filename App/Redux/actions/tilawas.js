import { SET_TILAWAS } from './actionTypes';
import { getTilawasService } from '../../Services/Api';

export const getTilawas = () => {
	return (dispatch , getState ) => {
		const promise = new Promise((resolve, reject) => {
			const token = getState().auth.token; 
			if(!token) {
				reject() ;
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

export const setTilawas = (data) => {
    return {
		type : SET_TILAWAS ,
		tilawas : data
	};
}
