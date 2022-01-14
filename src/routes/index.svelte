<script lang="ts">
import { base } from "$app/paths";

  import Project from "$lib/components/Project.svelte";
  import { projects } from "./_project-data";
</script>

<main>
	<div id="header">
		<h1>Noah Wager</h1>
	</div>
	<div id="content">
    <a href="{base}/about">About</a>
		<div id="projects">
			{#each projects as proj}
				<Project project={proj} />
			{/each}
		</div>
	</div>
</main>

<style lang="scss">
	@import "src/lib/style/variables.scss";

	// mobile
	main {
		text-align: center;
		width: 100%;

		#header {
			background-image: url("/images/pdx-banner.jpg");
			min-height: 7em;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 4px solid #ff3e00;
			padding: 1em;

			h1 {
				margin: 0;
				color: white;
				text-shadow: 2px 2px #ff3e00;
				font-size: 3.5em;
				font-weight: 100;
				font-family: 'Noah-Bold';
			}
		}

		#content {
			width: 100%;
		}
	}

	// desktop
	@media (min-width: $medium-width) {
		main {
			#header {
				min-height: 12em;

				h1 {
					font-size: 6em;
				}
			}

			#content {
				width: 70vw;
				max-width: 60em;
				margin: 0 auto;
			}
		}
	}
</style>