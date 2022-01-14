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
        <a href={href}>{text}</a>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  $small-spacing: 1em;
  $large-spacing: 5em;

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

      .text-container {
        background-color: #f3f3f3;

        h2 {
          font-family: 'Noah-Bold';
        }
      }
    }

    .text-container {
      padding: 1em;
      margin: 0;
      font-size: 1.1em;
      text-align: left;
      
      h2 {
        margin: 0 0 0.5em 0;
      }
      
      .description {
        margin: 0;
      }

      .link-container {
        margin-top: 1em;

        a {
          display: block;

          &::after {
            content: " →";
          }
          
          &:not(:last-child) {
            margin-bottom: 1em;
          }

          @media (max-width: $medium-width) {
            white-space: nowrap;
            width: min-content;
            padding: 0.4em;
            background-color: #ebebeb;
            border-radius: 0.3em;
          }
        }
      }
    }
  }
</style>