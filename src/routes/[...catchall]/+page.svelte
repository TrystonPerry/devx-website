<script lang="ts">
	import { isPreviewing, Content } from "@builder.io/sdk-svelte"
	import { PUBLIC_BUILDER_API_KEY } from "$env/static/public"
	import { type PageProps } from "./$types"
	import { customComponents } from "./customComponents"

	const { data }: PageProps = $props()

	// show unpublished content when in preview mode.
	const canShowContent = data.content || isPreviewing()
</script>

{#if canShowContent}
	<Content model="page" content={data.content} apiKey={PUBLIC_BUILDER_API_KEY} {customComponents} />
{:else}
	Content Not Found
{/if}
