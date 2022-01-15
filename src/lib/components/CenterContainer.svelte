<script lang="ts">
  interface Styles {
    "target-width"?: string;
    "max-width"?: string;
    "min-width"?: string;
  }
  export let styles: Styles = {
    "target-width": "70vw",
    "max-width": "60em",
    "min-width": "initial",
  }
</script>

<div
  class="center-container"
  style={
    Object.entries(styles)
    .map(([key, value]) => `--${key}:${value}`)
    .join(';')
  }
>
  <slot></slot>
</div>

<style lang="scss">
	@import "src/lib/style/variables.scss";

	// mobile
  .center-container {
    width: 100%;
  }

	// desktop
	@media (min-width: $medium-width) {
    .center-container {
      margin: 0 auto;
      width: var(--target-width);
      max-width: var(--max-width);
      min-width: var(--min-width);
    }
	}
</style>