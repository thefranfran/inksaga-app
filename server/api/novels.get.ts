export default defineEventHandler(event => {
	const query = getQuery(event);

	console.log(query);

	return {
		data: {
			id: 1,
		},
	};
});
