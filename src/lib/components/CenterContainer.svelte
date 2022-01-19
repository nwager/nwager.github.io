<script lang="ts">
  interface Styles {
    "target-width"?: string;
    "max-width"?: string;
    "min-width"?: string;
    "background-color"?: string;
  }
  export let styles: Styles | undefined = undefined;
  let defaultStyles: Styles = {
    "target-width": "70vw",
    "max-width": "60em",
    "min-width": "initial",
    "background-color": "transparent",
  }

  Object.assign(defaultStyles, styles);
</script>

<div
  class="center-container"
  style={
    Object.entries(defaultStyles)
    .map(([key, value]) => `--${key}:${value}`)
    .join(';')
  }
>
  <div class="content">
    <slot></slot>
  </div>
</div>

<style lang="scss">
	@import "src/lib/style/variables.scss";

	// mobile
  .center-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: var(--background-color);
  }

	// desktop
	@media (min-width: $medium-width) {
    .center-container .content {
      width: var(--target-width);
      max-width: var(--max-width);
      min-width: var(--min-width);
    }
	}
</style>