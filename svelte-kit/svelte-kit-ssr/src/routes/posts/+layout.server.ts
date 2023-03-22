import { prismaClient } from '$lib/prisma'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
	const posts = prismaClient.post.findMany({
		select: {
			title: true,
			slug: true
		},
		take: 4
	})

	return { posts }
}
