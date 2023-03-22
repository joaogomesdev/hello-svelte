import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { prismaClient } from '$lib/prisma'

export const load: PageServerLoad = async ({ params }) => {
	const post = await prismaClient.post.findUnique({
		where: {
			slug: params.slug
		}
	})

	if (!post) {
		throw error(404, 'Post not found')
	}

	return { post }
}
