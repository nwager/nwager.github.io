<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { browser } from "$app/env";
  import { screenWidth } from "$lib/stores/screenWidthStore";
  import { NARROW_WIDTH } from "$lib/style/variables";
  import type { Link, NonemptyArray } from "$lib/types";
  import { onDestroy, onMount } from "svelte";
  import { projects } from "../../routes/_project-data";
  import TableOfContents from "./TableOfContents.svelte";

  type NavItem = Link & {
    dropdownItems?: NonemptyArray<string>;
  }

  const navItems: NavItem[] = [
    {
      text: "Projects",
      url: `${base}/`,
      dropdownItems: projects.map(p => p.title) as NonemptyArray<string>,
    }, {
      text: "About",
      url: `${base}/about`
    },
  ];
  
  let activeDropdown = -1;

  $: titleName = $screenWidth >= NARROW_WIDTH ? "Noah Wager" : "NW";

  function onWindowClick(e: MouseEvent) {

  }

  onMount(async () => {
    window.addEventListener("click", onWindowClick);
  });

  onDestroy(async () => {
    if (browser) {
      window.removeEventListener("click", onWindowClick);
    }
  });
</script>

<div id="navbar">
  <a class="title-name" href="{base}/">{titleName}</a>
  {#each navItems as item, i}
    <a
      class="nav-item"
      class:active={item.url === $page.url.pathname}
      class:dropdown-active={i === activeDropdown}
      href={item.url}
      on:click={() => {
        activeDropdown = activeDropdown === i ? -1 : i;
      }}
    >
      {item.text}
      {#if item.dropdownItems}
        <div class="nav-dropdown">
          <TableOfContents sections={item.dropdownItems} />
        </div>
      {/if}
    </a>
  {/each}
</div>

<style lang="scss">
  // change navbar-height here
  @import "src/lib/style/variables";

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

    &::before {
      content: '';
      position: absolute;
      bottom: calc(0.9 * #{$navbar-height});
      background-color: $color-skyline-blue;
      height: 300px;
      width: 100%;
    }

    @mixin navLink {
      @include Noah-Bold;
      color: $color-white;
      text-shadow: 1px 1px $color-theme-red;
      height: 100%;
      display: flex;
      align-items: center;
      box-sizing: border-box;

      @media (hover: hover) {
        &:hover {
          text-decoration: none;
          color: $color-theme-red;
          text-shadow: 1px 1px $color-white;
        }
      }
    }

    .title-name {
      @include navLink();
      margin-right: auto
    }
    
    .nav-item {
      @include navLink();

      &.active {
        $border-width: 0.2em;
        border-top: $border-width solid transparent;
        border-bottom: $border-width solid $color-theme-red;
      }

      &.active {
        $border-width: 0.2em;
        border-top: $border-width solid transparent;
        border-bottom: $border-width solid $color-theme-red;
      }

      .nav-dropdown {
        display: none;
      }

      &.dropdown-active {
        .nav-dropdown {
          display: block;
          position: absolute;
          top: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: $color-skyline-blue;
          color: $color-white;
          text-shadow: none;

          :global(.toc a) {
            background-color: transparent;
            @include navLink();
            font-size: 0.9em;
          }
        }
      }
    }
  }
</style>