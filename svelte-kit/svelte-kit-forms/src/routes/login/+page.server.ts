import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { zfd } from 'zod-form-data';
export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const loginSchema = zfd.formData({
			user: zfd.text(),
			password: zfd.text()
		});

		const result = loginSchema.safeParse(formData);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};

			return fail(400, data);
		}

		throw redirect(303, '/todos');
	}
};
