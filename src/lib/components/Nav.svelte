<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { NARROW_WIDTH } from "$lib/utils";

  const links = {
    "Projects": `${base}/`,
    "About": `${base}/about`,
  };

  let windowWidth;
  $: titleName = windowWidth < NARROW_WIDTH ? "NW" : "Noah Wager";
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div id="navbar">
  <a class="title-name" href="{base}/">{titleName}</a>
  {#each Object.entries(links) as [name, link]}
    <a class:active={$page.url.pathname === link} href={link}>{name}</a>
  {/each}
</div>

<style lang="scss">
  // change navbar-height here
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
    font-size: calc(#{$navbar-height} / 2.3);
    box-shadow: 0 1px 5px rgb(0 0 0 / 57%);
    
    a {
      @include Noah-Bold;
      color: $color-white;
      text-shadow: 1px 1px $color-theme-red;
      height: 100%;
      display: flex;
      align-items: center;
      box-sizing: border-box;

      &.active {
        $border-width: 0.2em;
        border-top: $border-width solid transparent;
        border-bottom: $border-width solid $color-theme-red;
      }

      &.title-name {
        margin-right: auto;
      }
    }

    @media (hover: hover) {
      a:hover {
        text-decoration: none;
        color: $color-theme-red;
        text-shadow: 1px 1px $color-white;
      }
    }
  }
</style>