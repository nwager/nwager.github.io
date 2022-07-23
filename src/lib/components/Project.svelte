<script lang="ts">
  import type { ProjectData } from "src/routes/_project-data";
  import ImageCarousel from "./ImageCarousel.svelte";

  export let project: ProjectData;
  let {title, description, images, links, styleOverride} = project;
  
</script>

<div class="project">
  <ImageCarousel {images} imageStyle={styleOverride} />
  <div class="text-container">
    <h2>{title}</h2>
    <p class={"description"}>{description}</p>
    {#if links}
      <div class="link-container">
        {#each links as {text, url}}
          <a href={url} target="_blank" rel="noopener">{text}</a>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables";

  .project {
    // fixes an issue with image carousel transitions
    @include transitionFix;
    --spacing: 3em;
    margin-top: var(--spacing);
    background-color: $color-light-gray;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:last-child {
      margin-bottom: var(--spacing);
    }

    // desktop
    @media (min-width: $medium-width) {
      --spacing: 5em;

      .text-container h2 {
        @include Noah-Bold; // font doesn't look good on mobile
      }
    }

    .text-container {
      padding: 1em;
      padding-bottom: 0.5em;
      margin: 0;
      text-align: left;
      
      h2 {
        margin: 0 0 0.5em 0;
      }
      
      .description {
        margin: 0;
        margin-bottom: 0.5em;
      }

      .link-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        a {
          // larger click area
          padding: 0.5em 2em;
          padding-left: 0;
          font-size: 1.1em;

          @media (max-width: $medium-width) {
            white-space: nowrap;
            width: min-content;
            padding: 0.4em;
            padding-left: 0;
          }
        }
      }
    }
  }
</style>