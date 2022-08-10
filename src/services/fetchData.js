import serviceWrapper from './serviceWrapper';

const API_URL = 'https://www.namava.ir/api/v3.0/search/advance?';

async function fetchData ( query, pageNumber, mediaType ) {
	try {
		const { data } = await serviceWrapper( {
			url: `${API_URL}type=${mediaType}&count=20&page=${pageNumber}&query=${query}`,
			method: 'get',
		} );

		const items = data.result.result_items[0].groups?.Media.items || [];
		const total = data.result.total || 0;
		console.log( items )

		return { items, total };
	} catch ( error ) {
		console.error( error );
	}
}

export default fetchData;
