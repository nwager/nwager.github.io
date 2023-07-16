<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { screenWidth } from "$lib/stores/screenWidthStore";
  import { NARROW_WIDTH } from "$lib/style/variables";
  import type { Link } from "$lib/types";
	import { onMount } from "svelte";
  import { projects } from "../../routes/_project-data";
  import LinkList from "./LinkList.svelte";
	import { textToHashLink } from "$lib/utils";

  type NavItem = Link & {dropdownItems?: Link[]};

  const navItems: NavItem[] = [
    {
      text: "Projects",
      url: base + "/",
    }, {
      text: "About",
      url: base + "/about"
    },
  ];

  onMount(() => {
    const links = projects.map(p => p.title).map(text => {
      return {
        text,
        url: `${base}/#${textToHashLink(text)}`
      }
    })
    links.unshift({ text: "MAIN PAGE", url: `${base}/` });
    navItems[0].dropdownItems = links;
  });
  
  let activeDropdown = -1;
  $: titleName = $screenWidth >= NARROW_WIDTH ? "Noah Wager" : "NW";

  function collapseDropdown(navElt: HTMLElement) {
    (navElt.querySelector(".nav-dropdown") as HTMLElement)
      .style.height = "0px";
  }

  function onNavClick(i: number) {
    return (e: MouseEvent) => {
      activeDropdown = activeDropdown === i ? -1 : i;
      if (!navItems[i].dropdownItems) return;
      const navElt = e.currentTarget as HTMLElement;
      if (activeDropdown === i) {
        const h = navElt.querySelector(".nav-dropdown-measure").clientHeight;
        const ddElt = navElt.querySelector(".nav-dropdown") as HTMLElement;
        ddElt.style.height = `${h}px`;
      } else {
        collapseDropdown(navElt);
      }
    }
  }

  function onNavBlur(i: number) {
    return (e: FocusEvent) => {
      const navElt = e.currentTarget as HTMLElement;
      const relatedTarget = e.relatedTarget as Element;
      // if focus moved to a non-child, deactivate
      if (!navElt.contains(relatedTarget) && i === activeDropdown) {
        activeDropdown = -1;
        collapseDropdown(navElt);
      }
    }
  }
</script>

<div id="navbar">
  <a class="title-name" href="{base}/">{titleName}</a>
  {#each navItems as item, i}
    <a
      class="nav-item"
      class:active={item.url === $page.url.pathname}
      class:dropdown-active={i === activeDropdown}
      href={item.dropdownItems ? "javascript: void(0)" : item.url}
      rel="noopener"
      on:click={onNavClick(i)}
      on:blur={onNavBlur(i)}
    >
      {item.text}
      {#if item.dropdownItems}
        <span class="dropdown-icon icon icon-chevron-up" />
        <div class="nav-dropdown">
          <div class="nav-dropdown-measure">
            <LinkList links={item.dropdownItems} />
          </div>
        </div>
      {/if}
    </a>
  {/each}
</div>

<style lang="scss">
  // change navbar-height here
  @import "src/lib/style/variables";

  #navbar {
    $navbar-side-padding: 1em;

    position: fixed;
    top: 0;
    width: 100%;
    height: $navbar-height;
    box-sizing: border-box;
    padding: 0 $navbar-side-padding;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background-color: $color-skyline-blue;
    z-index: 1000;
    font-size: calc(#{$navbar-height} / 2.3);
    box-shadow: 0 1px 5px rgb(0 0 0 / 57%);

    @mixin navLink {
      @include Noah-Bold;
      color: $color-white;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      $border-width: 0.2em;
      border-top: $border-width solid transparent;
      border-bottom: $border-width solid transparent;

      @media (hover: hover) {
        &:hover {
          text-decoration: none;
          color: $color-theme-lightred;
          border-bottom-color: $color-theme-lightred;
        }
      }
    }

    .title-name {
      @include navLink();
      margin-right: auto;
      
      @media (min-width: $narrow-width) {
        position: absolute;
        left: $navbar-side-padding;
      }
    }
    
    .nav-item {
      &.active {
        border-bottom-color: $color-white;
      }

      @include navLink();

      .dropdown-icon {
        margin-left: 0.4em;
        transition: transform 100ms linear;
        font-weight: 900;
        font-size: 0.8em;
      }

      .nav-dropdown {
        display: block;
        position: absolute;
        overflow: hidden;
        top: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        background-color: $color-skyline-blue;
        color: $color-white;
        
        height: 0;
        transition: height 150ms linear;

        @media (max-width: $narrow-width) {
          left: 0;
          right: 0;
        }

        // styling for link list
        :global(.linklist a) {
          background-color: transparent;
          @include navLink();
          border: none;
          font-size: 0.9em;
        }
      }

      &.dropdown-active {
        .dropdown-icon {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>