<script lang="ts">
  import ColumnContainer from "$lib/components/ColumnContainer.svelte";
	import Header from "$lib/components/Header.svelte";
  import Project from "$lib/components/Project.svelte";
	import TableOfContents from "$lib/components/TableOfContents.svelte";
  import { projects } from "./_project-data";
</script>

<svelte:head>
  <title>Noah Wager - Projects</title>
</svelte:head>

<section>
	<Header header="Projects" />
	<ColumnContainer
		leftComponent={TableOfContents}
		leftProps={{ sections: projects.map(p => p.title) }}
		leftSticky={true}
	>
		<div id="projects">
			{#each projects as proj}
				<Project project={proj} />
			{/each}
		</div>
	</ColumnContainer>
</section>
