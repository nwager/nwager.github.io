<script lang="ts">
  import CenterContainer from "$lib/components/CenterContainer.svelte";
	import Header from "$lib/components/Header.svelte";
import Markdown from "$lib/components/Markdown.svelte";
  import Project from "$lib/components/Project.svelte";
  import { projects } from "./_project-data";
</script>

<svelte:head>
  <title>Noah Wager - Projects</title>
</svelte:head>

<section>
	<Header header="Projects" />
	<CenterContainer>
		<div id="projects">
			{#each projects as proj}
				<Project project={proj} />
			{/each}
		</div>
	</CenterContainer>
</section>
