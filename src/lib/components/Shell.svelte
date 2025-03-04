<script lang="ts">
	import { type Snippet } from "svelte"

	const { children }: { children?: Snippet } = $props()
</script>

<main class="relative h-full pt-[var(--nav-height)]">
	{@render children?.()}
</main>

<style>
	main {
		min-height: 100vh;
	}
</style>
