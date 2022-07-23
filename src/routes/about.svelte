<script lang="ts">
	import { base } from "$app/paths";
	import ColumnContainer from "$lib/components/ColumnContainer.svelte";
  import Header from "$lib/components/Header.svelte";

	const contacts = [
		{
			icon: "envelope-fill",
			text: "noahwager@gmail.com",
			link: "mailto:noahwager@gmail.com",
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
	<ColumnContainer styles={{"target-width": "50vw", "min-width": "50ch", "max-width": "75ch"}}>
		<img class="myface" src="{base}/images/about/face.png" alt="My face" />
		<div class="bio">
			<h2>About Me</h2>
			<p>
				I am a third-year student in Computer Engineering at the University of Washington, Seattle (UW). I have experience in both software and hardware roles, with skills in front-end development and electronics.
			</p>

			<h2>Design, Build, Fly</h2>
			
			<p>
				I'm an active member of <a href="https://www.designbuildflyuw.com/" target="_blank" rel="noopener">Design, Build, Fly UW</a>, an engineering club at UW. Dozens of students collaborate in subteams to design and manufacture a mid-size RC airplane to compete with other schools in a <a href="https://www.aiaa.org/dbf" target="_blank" rel="noopener">competition hosted by the AIAA</a>.
				<br/>
				As a member of the Avionics team, I am responsible for creating wiring schematics, assembling and soldering electrical components, and installing the flight controller and control surfaces.
			</p>
			<figure>
				<a class="image-link" href="{base}/images/about/uw22albatross.jpg" target="_blank" rel="noopener">
					<img src="{base}/images/about/uw22albatross-1024.jpg" alt="DBF plane 2022: UW-22 Albatross" />
				</a>
				<figcaption>Our plane for the 2022 competition: the UW-22 Albatross.</figcaption>
			</figure>

			<h2>Music</h2>
			<p>
				When I'm not working on projects, I spend much of my free time playing electric bass and guitar. I started on bass in 2012 and began learning guitar in high school, playing covers at School of Rock, Portland.
				<br/>
				I currently play bass for <a href="https://thesleepyhaunts.com/home/" target="_blank" rel="noopener">The Sleepy Haunts</a>, an indie-pop band with rock influence. We recently played in MoPOP's <a href="https://mopop.org/sound-off-2022" target="_blank" rel="noopener">2022 Sound Off!</a> showcase (<a href="https://www.youtube.com/watch?v=RDYRUcaeVVM&ab_channel=MuseumofPopCulture" target="_blank" rel="noopener">cool video</a>), where we performed in the museum's Sky Church with other up-and-coming Seattle artists.
			</p>
			<figure>
				<a class="image-link" href="{base}/images/about/soundoff.jpg" target="_blank" rel="noopener">
					<img src="{base}/images/about/soundoff-1024.jpg" alt="The Sleepy Haunts at MoPOP's Skychurch." />
				</a>
				<figcaption>The Sleepy Haunts at MoPOP's Skychurch.</figcaption>
			</figure>

			<h2>Contact</h2>
			{#each contacts as {icon, text, link}}
				<div class="contact-item">
					<span class="icon icon-{icon}" />
					{#if link}
						<a href={link} target="_blank" rel="noopener">{text}</a>
					{:else}
						<span>{text}</span>
					{/if}
				</div>
			{/each}
		</div>
	</ColumnContainer>
</section>

<style lang="scss">
	@import "src/lib/style/variables";

	.myface {
		margin-top: 2em;
	}

	.bio {
		text-align: left;
		box-sizing: border-box;
		padding: 0 1.4em;

		h2 {
			@include Noah-Bold;
		}

		p {
			br {
				display: block;
				content: "";
				margin-top: 1em;
			}
		}

		figure {
			margin: 0;

			.image-link {
				cursor: default;
				
				img {
					width: 100%;
					border-radius: 6px;
				}
			}

			figcaption {
				font-style: italic;
				text-align: center;
			}
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