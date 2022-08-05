<script lang="ts">
  import classNames from "classnames";

  interface Styles {
    "target-width"?: string;
    "max-width"?: string;
    "min-width"?: string;
    "background-color"?: string;
  }
  export let styles: Styles | undefined = undefined;
  let defaultStyles: Styles = {
    "target-width": "55vw",
    "max-width": "60em",
    "min-width": "initial",
    "background-color": "transparent",
  }
  Object.assign(defaultStyles, styles);

  export let leftComponent: any = null;
  export let leftProps: any = null;
  export let leftSticky = false;
  export let rightComponent: any = null;
  export let rightProps: object = {};
  export let rightSticky = false;
</script>

<div
  class="column-container"
  style={
    Object.entries(defaultStyles)
    .map(([key, value]) => `--${key}:${value}`)
    .join(';')
  }
>
  <div class="content">
    <slot></slot>
  </div>
  {#if leftComponent}
    <div class={classNames("left-sidebar", { sticky: leftSticky })}>
      <svelte:component this={leftComponent} {...leftProps} />
    </div>
  {/if}
  {#if rightComponent}
    <div class={classNames("right-sidebar", { sticky: rightSticky })}>
      <svelte:component this={rightComponent} {...rightProps} />
    </div>
  {/if}
</div>

<style lang="scss">
	@import "src/lib/style/variables";

  .column-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background-color);

    .content {
      width: calc(100% - 2.5em);
    }
  }

	// desktop
	@media (min-width: $medium-width) {
    .column-container {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 1fr auto 1fr;
      grid-template-areas:
        "left center right"
      ;
      justify-items: stretch;
      align-items: start;

      .content {
        grid-area: center;
        width: var(--target-width);
        max-width: var(--max-width);
        min-width: var(--min-width);
      }

      .left-sidebar {
        grid-area: left;
        grid-column: 1;

        &.sticky {
          position: sticky;
          top: $navbar-height;
        }
      }

      .right-sidebar {
        grid-area: right;
        grid-column: 1;

        &.sticky {
          position: sticky;
          top: $navbar-height;
        }
      }
    }
	}
</style>