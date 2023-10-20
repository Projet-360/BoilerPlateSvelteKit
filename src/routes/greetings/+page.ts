import { getAllGreetings } from '$api/Greetings';

export const load = async () => {
	console.log('test +page.ts');
	const greetings = await getAllGreetings();
	console.log('from back', greetings);

	return {
		greetings
	};
};
