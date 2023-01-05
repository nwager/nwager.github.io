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

  export let leftSticky = false;
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
  <div class={classNames("column left-column", { sticky: leftSticky })}>
    <slot name="left-column"></slot>
  </div>
  <div class={classNames("column right-column", { sticky: rightSticky })}>
    <slot name="right-column"></slot>
  </div>
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

      .column {
        &.sticky {
          position: sticky;
          top: $navbar-height;
        }

        &.left-column {
          grid-area: left;
          grid-column: 1;
        }
  
        &.right-column {
          grid-area: right;
          grid-column: 1;
        }
      }
    }
	}
</style>