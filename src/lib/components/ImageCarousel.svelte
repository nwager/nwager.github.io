<script lang="ts">
  import { mod, NonemptyArray } from "$lib/utils";
  import classNames from "classnames";
  import { base } from "$app/paths";

  export let images: NonemptyArray<string>;
  export let linkImages = false;

  let currIdx = 0;
  const numImgs = images.length;
  let hideUi = true;

  // takes target image index, returns function that changes image
  // this allows it to be used as a callback while taking a param
  // https://stackoverflow.com/a/45448802
  const changeImage = (target: number) => _ => {
    currIdx = target;
    currIdx = mod(currIdx, numImgs);
  }

  const hideUiTimer = () => hideUi = true;
  const showUiTimer = () => hideUi = false;
</script>

<div class="carousel" on:mouseleave={hideUiTimer} on:mouseenter={showUiTimer}>
  {#each images as img, i}
    <a
      class={classNames({active: i == currIdx})}
      href={`${base}/${img}`}
      rel="external"
      target="_blank"
      style={!linkImages ? "pointer-events:none" : ""}
    >
      <img src="{base}/{img}" alt="Carousel" />
    </a>
  {/each}
  {#if numImgs > 1}
    <div class={classNames("carousel-ui", {hidden: hideUi})}>
      <div class="carousel-button prev" on:click={changeImage(currIdx - 1)}>
        <div class="icon icon-chevron-left" />
      </div>
      <div class="carousel-button next" on:click={changeImage(currIdx + 1)}>
        <div class="icon icon-chevron-right" />
      </div>
      <div class="indicator-container">
        {#each images as _, i}
          <div
            class={classNames("indicator", {active: i == currIdx})}
            on:click={changeImage(i)}
          >
            <div class="graphic">{i+1}</div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .carousel {
    width: 100%;
    position: relative;

    a {
      display: none;
      cursor: default;
        
      &.active {
        display: block;
      }

      img {
        height: 100%;
        width: 100%;
        display: block;
        object-fit: contain;
      }
    }

    .carousel-ui {
      transition: opacity 200ms ease;

      .carousel-button {
        position: absolute;
        top: 0; // why do I need this?
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &.prev {
          padding-right: 10%;
        }

        &.next {
          padding-left: 10%;
        }
  
        &:hover .icon {
          opacity: 1;
        }
  
        .icon {
          color: white;
          font-size: 3em;
          opacity: 0.5;
        }
  
        &.prev {
          left: 0;
        }
  
        &.next {
          right: 0;
        }
      }
  
      .indicator-container {
        position: absolute;
        bottom: 0;
        padding-bottom: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
  
        .indicator {
          $gap: 8px;
          height: 24px;
          width: calc(32px + #{$gap});
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          overflow: hidden;
  
          cursor: pointer;
          
          .graphic {
            background-color: #ffffff8c;
            height: 3px;
            border-radius: 3px;
            width: calc(100% - #{$gap});
            display: flex;
            align-items: center;
            justify-content: center;
            color: transparent;
            font-weight: bold;
  
            transition: height 100ms ease;
          }
  
          &:hover .graphic{
            height: 100%;
            color: black;
            mix-blend-mode: screen;
          }
  
          &.active .graphic {
            background-color: white;
          }
        }
      }
    }

    // desktop
    @media (min-width: $narrow-width) {
      .carousel-ui.hidden {
        opacity: 0;
      }
    }
  }
</style>