<script lang="ts">
  import type { Link } from "$lib/types";
  import { onMount } from "svelte";

  export let title: string | undefined = undefined;
  export let sections: string[];
  let links: Link[] = [];

  /**
   * Encode text to a safe format for text link hashes.
   */
  const encodeText = (text: string) => {
    return encodeURIComponent(text)
      .replace('-', '%2D') // url-encode hyphens
  }

  onMount(() => {
    links = sections.map(text => {
      return {
        text,
        url: `${window.location.href}#:~:text=${encodeText(text)}`
      }
    })
  });
</script>

<div class="toc">
  {#if title}
    <div class="toc-title">{title}</div>
  {/if}
  <ul>
    {#each links as {text, url}}
      <li>
        <a href={url}>{text}</a>
      </li>  
    {/each}
  </ul>
</div>

<style lang="scss">
  @import "src/lib/style/variables";

  .toc {
    position: sticky;
    top: 0;
    padding: 0.6em;

    .toc-title {
      margin: 0;
      text-align: left;
      margin-bottom: 0.2em;
      font-size: 1.2em;
      font-weight: 500;
    }

    ul {
      margin: 0;
      padding: 0;
      text-align: left;
      list-style-type: none;

      li {
        a {
          display: inline-block;
          text-decoration: none;
          color: $color-text-dark;
          padding: 0.3em;
          @include Noah-Regular;

          transition: background-color 0.1s linear;

          &:hover {
            background-color: #f0f0f0;
            border-radius: 6px;
          }
        }
      }
    }
  }
</style>