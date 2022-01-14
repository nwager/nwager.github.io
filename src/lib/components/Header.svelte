<script lang=ts>
  import { base } from "$app/paths";
</script>

<div id="header">
  <img src="{base}/images/pdx-banner.jpg" alt="Portland skyline" />
  <h1>Noah Wager</h1>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  #header {
    min-height: 7em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid $color-theme-red;
    padding: 1em;
    position: relative;

    img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: -1000;
      background-color: $color-skyline-blue; // when waiting for img
    }

    h1 {
      margin: 0;
      color: $color-white;
      text-shadow: 2px 2px $color-theme-red;
      font-size: 3.5em;
      @include Noah-Bold;
    }
  }

  @media (min-width: $medium-width) {
    #header {
      min-height: 12em;

      h1 {
        font-size: 6em;
      }
    }
	}
</style>