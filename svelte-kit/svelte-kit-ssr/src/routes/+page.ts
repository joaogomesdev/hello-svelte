import type { Post } from '@prisma/client'
import type { PageLoad } from './$types'

// We are using the event "fetch" witch is the Svelte fetch, with that we can use relative paths

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/posts')
	const posts: Post[] = await response.json()
	return { posts }
}
