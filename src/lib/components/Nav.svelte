<script lang="ts">
	import { page } from "$app/state"
	import { externalLinks } from "$lib"

	interface NavLink {
		title: string
		path: string
	}

	const { links = [] }: { links?: NavLink[] } = $props()
</script>

<nav
	class="fixed top-0 mx-0 my-0 flex h-[var(--nav-height)] w-[100vw] items-center justify-between bg-[#1e1e1e] px-4 text-white"
>
	<a href="/">
		<img alt="" src="/images/logo-header.png" class="h-12 rounded" />
	</a>

	<!-- links -->
	<div class="flex items-center gap-4">
		{#each links as link (link.path)}
			<a href={link.path} aria-current={page.url.pathname.startsWith(link.path) ? "page" : null}>
				{link.title}
			</a>
		{/each}
	</div>

	<!-- external links -->
	<div class="flex">
		<a href={externalLinks.discord} class="h-full">Join us on discord</a>
	</div>
</nav>
