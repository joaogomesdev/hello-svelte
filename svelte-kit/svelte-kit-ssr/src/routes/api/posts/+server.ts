import { prismaClient } from '$lib/prisma'
import { json, type RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async (event) => {
	const posts = await prismaClient.post.findMany({
		take: Math.round(Math.random() * 30)
	})

	// MDN http caching fot more informations
	event.setHeaders({
		'Cache-Control': 'max-age=60'
		// server side rendering - cache on a CDN
		// 'Cache-Control': 'public, max-age=0, s-maxage=60'
	})

	return json(posts)
}
