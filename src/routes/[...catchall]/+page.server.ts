import { PUBLIC_BUILDER_API_KEY } from "$env/static/public"
import { fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-svelte"
import type { PageServerLoad } from "./$types"

export const load = async function load(event) {
	const content = await fetchOneEntry({
		model: "page",
		apiKey: PUBLIC_BUILDER_API_KEY,
		options: getBuilderSearchParams(event.url.searchParams),
		userAttributes: {
			urlPath: event.url.pathname || "/"
		}
	})

	return { content }
} satisfies PageServerLoad
