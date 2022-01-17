<script lang=ts>
  import { base } from "$app/paths";
  import GithubCorner from "./GithubCorner.svelte";

  export let header = '';
</script>

<div id="header">
  <GithubCorner
    url={"https://github.com/nwager"}
    cornerColor={"white"}
    octoColor={"black"}
  />
  <img src="{base}/images/pdx-banner.jpg" alt="Portland skyline" />
  <div class="text-container">
    <h1>Noah Wager</h1>
    {#if header}
      <h2>{header}</h2>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  #header {
    min-height: 9em;
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

    .text-container {
      @include Noah-Bold;
      color: $color-white;

      h1 {
        margin: 0;
        font-size: 3.5em;
        text-shadow: 0.04em 0.04em $color-theme-red;
        letter-spacing: -2px;
      }

      h2 {
        margin: 0;
        font-size: 1.5em;
        text-shadow: 0.05em 0.05em $color-theme-red;
      }
    }
  }

  // desktop
  @media (min-width: $medium-width) {
    #header {
      min-height: 12em;

      .text-container {
        h1 {
          font-size: 6em;
          text-shadow: 0.03em 0.03em $color-theme-red;
          letter-spacing: inherit;
        }
        
        h2 {
          font-size: 2em;
        }
      }
    }
	}
</style>