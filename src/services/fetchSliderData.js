import serviceWrapper from './serviceWrapper';

const API_URL = 'https://www.namava.ir/api/v2.0/medias/sliders/1316';

async function fetchData () {
	try {
		const { data } = await serviceWrapper( {
			url: `${API_URL}`,
			method: 'get',
		} );

		const items = data.result;


		return { items };
	} catch ( error ) {
		console.error( error );
	}
}

export default fetchData;
