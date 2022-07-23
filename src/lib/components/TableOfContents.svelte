<script lang="ts">
  import type { Link } from "$lib/types";
  import { onMount } from "svelte";

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
  <h2 class="toc-title">Table of Contents</h2>
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
    width: 100%;
    background-color: aquamarine;

    ul {
      margin: 0;
      text-align: left;
    }

    .toc-title {
      margin: 0;
    }
  }
</style>