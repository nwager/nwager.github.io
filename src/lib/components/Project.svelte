<script lang="ts">
  import type { ProjectData } from "src/routes/_project-data";
  import ImageCarousel from "./ImageCarousel.svelte";

  export let project: ProjectData;
  let {title, description, images, links} = project;
  
</script>

<div class="project">
  <ImageCarousel {images} />
  <div class="text-container">
    <h2>{title}</h2>
    <p class={"description"}>{description}</p>
    <div class="link-container">
      {#each links as [text, href]}
        <a href={href} target="_blank">{text}</a>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  // mobile
  .project {
    --spacing: 2em;
    margin-top: var(--spacing);

    &:last-child {
      margin-bottom: var(--spacing);
    }

    // desktop
    @media (min-width: $medium-width) {
      overflow: hidden;
      border-radius: 10px;
      --spacing: 5em;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

      .text-container {
        background-color: $color-light-gray;

        h2 {
          @include Noah-Bold;
        }
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
      }

      .link-container {
        margin-top: 0.5em;
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