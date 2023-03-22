import type { Post } from '@prisma/client'
import type { PageLoad } from './$types'

// We are using the event "fetch" witch is the Svelte fetch, with that we can use relative paths

export const load: PageLoad = async ({ fetch, depends }) => {
	const randomNumber = Math.round(Math.random() * 30)
	const response = await fetch(`/api/posts?limit=${randomNumber}`)
	const posts: Post[] = await response.json()

	depends('app:posts')

	return { posts }
}
