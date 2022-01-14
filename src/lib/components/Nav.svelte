<script lang="ts">
  import { base } from "$app/paths";
  import { NARROW_WIDTH } from "$lib/utils";

  const links = {
    "Projects": "",
    "About": "about",
  };

  let windowWidth;
  $: titleName = windowWidth < NARROW_WIDTH ? "NW" : "Noah Wager";
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div id="navbar">
  <a class="title-name" href="{base}/">{titleName}</a>
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
    justify-content: center;
    align-items: center;
    gap: 1em;
    background-color: $color-skyline-blue;
    z-index: 1000;
    font-size: calc(#{$navbar-height} / 2);
    
    a {
      @include Noah-Bold;
      color: $color-white;
      text-shadow: 1px 1px $color-theme-red;
      
      &:hover {
        text-decoration: none;
        color: $color-theme-red;
        text-shadow: 1px 1px $color-white;
      }

      &.title-name {
        margin-right: auto;
      }
    }

    // @media (max-width: $narrow-width) {
    //   .title-name {
    //     display: none;
    //   }
    // }
  }
</style>