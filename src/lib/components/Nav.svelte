<script lang="ts">
  import { base } from "$app/paths";

  const links = {
    "Projects": "",
    "About": "about",
  };
</script>

<div id="navbar">
  <div class="title-name">Noah Wager</div>
  {#each Object.entries(links) as [name, link]}
    <a href="{base}/{link}">{name}</a>
  {/each}
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  #navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: $navbar-height;
    box-sizing: border-box;
    padding: 0 1em;
    display: flex;
    align-items: center;
    gap: 1em;
    background-color: #c9c9c9;
    z-index: 1000;
    color: black;
    font-size: calc(#{$navbar-height} / 2);

    a {
      color: black;
    }

    .title-name {
      margin-right: auto;
    }
  }
</style>