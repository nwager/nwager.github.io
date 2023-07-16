<script lang="ts">
  import type { Link } from "$lib/types";

  export let title: string | undefined = undefined;
  export let links: Link[] = [];
</script>

<div class="linklist">
  {#if title}
    <div class="linklist-title">{title}</div>
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

  .linklist {
    padding: 0.6em;

    .linklist-title {
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
          padding: 0.3em;
          @include Noah-Regular;
          border-radius: 6px;

          transition: background-color 0.1s linear;

          &:hover {
            background-color: #f0f0f0;
          }
        }
      }
    }
  }
</style>