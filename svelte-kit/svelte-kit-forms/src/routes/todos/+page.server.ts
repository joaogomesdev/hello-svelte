import { getTodos } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const todos = getTodos();

	return { todos };
};
