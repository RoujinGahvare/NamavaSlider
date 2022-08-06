import axios from "axios";

function serviceWrapper({ url, method }) {
	const options = {
		method,
		url,
	};
	const response = axios(options);
	return response;
}

export default serviceWrapper;
