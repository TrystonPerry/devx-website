<script lang="ts">
	import { type Snippet } from "svelte"
	import { Shell, Nav, Footer, navLinks } from "$lib"
	import "../app.css"

	let { children }: { children?: Snippet } = $props()
</script>

<Shell>
	<Nav links={navLinks} />
	{@render children?.()}
	<Footer />
</Shell>
