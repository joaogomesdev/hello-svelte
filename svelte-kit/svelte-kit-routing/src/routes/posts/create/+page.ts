import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
	// throw new Error('Ups!')
	// throw error(400, { message: 'Ups, its broken.' })
}
