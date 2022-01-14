<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import Project from "$lib/components/Project.svelte";
  import { projects } from "./_project-data";
</script>

<section>
	<Header />
	<div id="content">
		<div id="projects">
			{#each projects as proj}
				<Project project={proj} />
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@import "src/lib/style/variables.scss";

	// mobile
	section {
		text-align: center;
		width: 100%;

		#content {
			width: 100%;
		}
	}

	// desktop
	@media (min-width: $medium-width) {
		section {
      #content {
        margin: 0 auto;
				width: 70vw;
				max-width: 60em;
			}
		}
	}
</style>