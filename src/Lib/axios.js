import Axios from 'axios';

export const get = async (url) => {
	return  await Axios.get(url);
}

export const post = async (url, data) => {
	return await Axios.post(url, data);
}