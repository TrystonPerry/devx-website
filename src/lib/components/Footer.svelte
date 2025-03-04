<script lang="ts">
	import { externalLinks } from "$lib/siteConfig"
</script>

<footer class="flex w-[100vw] justify-between bg-[#1e1e1e] p-4 text-white">
	<p>© Copyright 2025. All rights reserved</p>

	<div class="flex gap-4">
		<a
			href={externalLinks.linkedInUrl}
			aria-label="LinkedIn"
			class="h-full w-[2rem] bg-[url($lib/icons/linkedin.svg)] bg-center bg-no-repeat"
		>
		</a>
		<a
			href={externalLinks.youtube}
			aria-label="YouTube"
			class="h-full w-[2rem] bg-[url($lib/icons/youtube.svg)] bg-center bg-no-repeat"
		>
		</a>
		<a
			href={externalLinks.lumaUrl}
			aria-label="Luma Calendar"
			class="h-full w-[2rem] bg-[url($lib/icons/luma.svg)] bg-center bg-no-repeat"
		>
		</a>
		<a
			href={externalLinks.meetupUrl}
			aria-label="Meetup Group"
			class="h-full w-[2rem] bg-[url($lib/icons/meetup.svg)] bg-center bg-no-repeat"
		>
		</a>
		<a
			href={externalLinks.discord}
			aria-label="Discord Chat"
			class="h-full w-[2rem] bg-[url($lib/icons/discord.svg)] bg-center bg-no-repeat"
		>
		</a>
		<a
			href={externalLinks.github}
			aria-label="Github"
			class="h-full w-[2rem] bg-[url($lib/icons/github.svg)] bg-center bg-no-repeat"
		>
		</a>
	</div>
</footer>
