<script lang="ts">
  import ColumnContainer from "$lib/components/ColumnContainer.svelte";
	import Header from "$lib/components/Header.svelte";
  import Project from "$lib/components/Project.svelte";
	import TableOfContents from "$lib/components/TableOfContents.svelte";
	import { screenWidth } from "$lib/stores/screenWidthStore";
	import { NARROW_WIDTH } from "$lib/style/variables";
  import { projects } from "./_project-data";

	$: isNarrow = $screenWidth <= NARROW_WIDTH;
</script>

<svelte:head>
  <title>Noah Wager - Projects</title>
</svelte:head>

<section>
	<Header header="Projects" />
	<ColumnContainer leftSticky={true}>
		<div slot="left-column">
			{#if !isNarrow}
				<TableOfContents slot="left-column" sections={projects.map(p => p.title)} />
			{/if}
		</div>
		<!-- begin default slot -->
		<div id="projects">
			{#each projects as proj}
				<Project project={proj} />
			{/each}
		</div>
		<!-- end default slot -->
	</ColumnContainer>
</section>
