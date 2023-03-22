import type { RequestHandler } from '@sveltejs/kit'

// GET /api/newsletter
export const GET: RequestHandler = async (event) => {
	const options: ResponseInit = {
		status: 418,
		headers: {
			egg: 'Eggceptional egg'
		}
	}

	return new Response('Egg', options)
}

// POST /api/newsletter
export const POST: RequestHandler = async ({ request }) => {
	const data = await request.formData()
	const email = data.get('email')

	// subscribe the email
	console.log(email)

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
