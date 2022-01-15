<script lang="ts">
  import CenterContainer from "$lib/components/CenterContainer.svelte";
import Header from "$lib/components/Header.svelte";
  import Project from "$lib/components/Project.svelte";
  import { projects } from "./_project-data";
</script>

<svelte:head>
  <title>Noah Wager - Projects</title>
</svelte:head>

<section>
	<Header header="Projects" />
	<div id="content">
		<CenterContainer>
			<div id="projects" style="overflow:hidden">
				{#each projects as proj}
					<Project project={proj} />
				{/each}
			</div>
		</CenterContainer>
	</div>
</section>
