import AsyncStorage from '@react-native-community/async-storage';
import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN, LOGIN_ERROR } from './actionTypes';
import { authUser, addUser } from '../../Services/Api';

export const tryAuth = (authData) => {
	return (dispatch) => {
		const promise = new Promise((resolve, reject) => {
			authUser(authData.email, authData.password)
				.catch((err) => {
					reject();
				})
				// .then(res => res.json())
				.then((res) => {
					if (!res.ok) {
						dispatch(loginError(res.data[0]));
						reject();
					} else {
						dispatch(authStoreToken(res.data.accessToken.token, res.data.accessToken.refreshToken));
						resolve();
					}
				});
		});
		return promise;
	};
};

export const tryRegister = (Data) => {
	return (dispatch) => {
		const promise = new Promise((resolve, reject) => {
			addUser(Data)
				.catch((err) => {
					reject();
				})
				// .then(res => res.json())
				.then((res) => {
					if (!res.ok) {
						dispatch(loginError(res.data[0].message));
						reject();
					} else {
						console.warn(res.data);

						dispatch(authStoreToken(res.data.accessToken.token, res.data.accessToken.refreshToken));
						resolve();
					}
				});
		});
		return promise;
	};
};

export const authStoreToken = (token, refreshToken) => {
	return (dispatch) => {
		const now = new Date();
		const expiryDate = now.getTime() + 7200 * 1000;
		dispatch(authSetToken(token, expiryDate));
		AsyncStorage.setItem('ap:auth:token', token);
		AsyncStorage.setItem('ap:auth:expiryDate', expiryDate.toString());
		AsyncStorage.setItem('ap:auth:refreshToken', refreshToken);
	};
};

export const authSetToken = (token, expiryDate) => {
	return {
		type: AUTH_SET_TOKEN,
		token: token,
		expiryDate: expiryDate
	};
};

export const authGetToken = () => {
	return (dispatch, getState) => {
		const promise = new Promise((resolve, reject) => {
			const token = getState().auth.token;
			const expiryDate = getState().auth.expiryDate;
			if (!token || new Date(expiryDate) <= new Date()) {
				let fetchedToken;
				AsyncStorage.getItem('ap:auth:token')
					.catch((err) => {
						reject(err);
					})
					.then((tokenFromStorage) => {
						fetchedToken = tokenFromStorage;
						if (!tokenFromStorage) {
							reject();
							return;
						}
						return AsyncStorage.getItem('ap:auth:expiryDate');
					})
					.then((expiryDate) => {
						const parsedExpiryDate = new Date(parseInt(expiryDate));
						const now = new Date();
						if (parsedExpiryDate > now) {
							dispatch(authSetToken(fetchedToken));
							resolve(fetchedToken);
						} else {
							reject();
						}
					})
					.catch((err) => reject());
			} else {
				resolve(token);
			}
		});
		return promise;
		// .catch(err => {
		//   return AsyncStorage.getItem("ap:auth:refreshToken")
		//     .then(refreshToken => {
		//       return fetch(
		//         "https://securetoken.googleapis.com/v1/token?key=" + API_KEY,
		//         {
		//           method: "POST",
		//           headers: {
		//             "Content-Type": "application/x-www-form-urlencoded"
		//           },
		//           body: "grant_type=refresh_token&refresh_token=" + refreshToken
		//         }
		//       );
		//     })
		//     .then(res => res.json())
		//     .then(parsedRes => {
		//       if (parsedRes.id_token) {
		//         console.warn("Refresh token worked!");
		//         dispatch(
		//           authStoreToken(
		//             parsedRes.id_token,
		//             parsedRes.expires_in,
		//             parsedRes.refresh_token
		//           )
		//         );
		//         return parsedRes.id_token;
		//       } else {
		//         dispatch(authClearStorage());
		//       }
		//     });
		// })
		// .then(token => {
		//   if (!token) {
		//     throw new Error();
		//   } else {
		//     return token;
		//   }
		// });
	};
};

export const authClearStorage = () => {
	return (dispatch) => {
		AsyncStorage.removeItem('ap:auth:token');
		AsyncStorage.removeItem('ap:auth:expiryDate');
		return AsyncStorage.removeItem('ap:auth:refreshToken');
	};
};

export const authwarnout = () => {
	return (dispatch) => {
		dispatch(authClearStorage());
		dispatch(authRemoveToken());
	};
};

export const authRemoveToken = () => {
	return {
		type: AUTH_REMOVE_TOKEN
	};
};

export const loginError = (err) => {
	return {
		type: LOGIN_ERROR,
		error: err
	};
};
