import { prismaClient } from '$lib/prisma'
import { json, type RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ url }) => {
	// using URLSearchParams - MDN
	const limit = Number(url.searchParams.get('limit')) ?? 30
	const orderBy = url.searchParams.get('order') ?? 'asc'

	const posts = await prismaClient.post.findMany({
		orderBy: { id: orderBy },
		take: limit
	})

	// We can use UrlSearchParam as a state enabling to share a searched value by url

	return json(posts)
}
