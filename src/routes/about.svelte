<script lang="ts">
	import { base } from "$app/paths";
	import CenterContainer from "$lib/components/CenterContainer.svelte";
  import Header from "$lib/components/Header.svelte";

	const contacts = [
		{
			icon: "envelope-fill",
			text: "noahwager@gmail.com",
		},
		{
			icon: "linkedin",
			text: "linkedin.com/in/noah-wager",
			link: "https://www.linkedin.com/in/noah-wager",
		},
	]
</script>

<svelte:head>
  <title>Noah Wager - About</title>
</svelte:head>

<section>
	<Header header="About" />
	<CenterContainer styles={{"target-width": "50vw", "min-width": "35em"}}>
		<img src="{base}/images/face.png" alt="My face" />
		<div class="bio">
			<h2>About Me</h2>
			<p>
				I am a junior in Computer Engineering at the University of Washington, Seattle. In addition to working with software and hardware, I like playing electric bass and guitar, with an almost-negligible amount of drums and piano.
			</p>
			<h2>Contact</h2>
			{#each contacts as {icon, text, link}}
				<div class="contact-item">
					<span class="icon icon-{icon}" />
					{#if link}
						<a href={link}>{text}</a>
					{:else}
						<span>{text}</span>
					{/if}
				</div>
			{/each}
		</div>
	</CenterContainer>
</section>

<style lang="scss">
	@import "src/lib/style/variables.scss";

	img {
		margin-top: 2em;
	}

	.bio {
		text-align: left;
		box-sizing: border-box;
		padding: 0 1.4em;

		h2 {
			@include Noah-Bold;
		}

		.contact-item {
			display: flex;
			align-items: center;
			gap: 0.6em;
			margin-bottom: 0.8em;
			font-size: 1.1em;
		}
	}
</style>