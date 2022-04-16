<script lang="ts">
  import { mod } from "$lib/utils";
  import type { NonemptyArray } from "$lib/types";
  import classNames from "classnames";
  import { base } from "$app/paths";

  export let images: NonemptyArray<string>;
  export let linkImages = false;

  let currIdx = 0;
  const numImgs = images.length;
  let hideUi = true;

  enum SlideState {
    NONE,
    SLIDE_TO_PREV,
    SLIDE_TO_NEXT,
  }
  let transitionState: SlideState = SlideState.NONE;

  // takes target image index, returns function that changes image
  // this allows it to be used as a callback while taking a param
  // https://stackoverflow.com/a/45448802
  const changeImage = (target: number) => () => {
    if (transitionState != SlideState.NONE) return;
    if (target == mod(currIdx - 1, numImgs)) {
      transitionState = SlideState.SLIDE_TO_PREV;
    } else if (target == mod(currIdx + 1, numImgs)) {
      transitionState = SlideState.SLIDE_TO_NEXT
    }
    setTimeout(() => {
      currIdx = target;
      currIdx = mod(currIdx, numImgs);
      transitionState = SlideState.NONE;
    }, 2000);
  }

  const hideUiTimer = () => hideUi = true;
  const showUiTimer = () => hideUi = false;
</script>

<div class="carousel" on:mouseleave={hideUiTimer} on:mouseenter={showUiTimer}>
  <div class="carousel-images">
    {#each images as img, i}
      <a
        class={classNames(
          {
            active: i == currIdx,
            prev: i == mod(currIdx - 1, numImgs),
            next: i == mod(currIdx + 1, numImgs),
            "slide-to-prev": transitionState == SlideState.SLIDE_TO_PREV,
            "slide-to-next": transitionState == SlideState.SLIDE_TO_NEXT,
          }
        )}
        href={`${base}/${img}`}
        rel="external noopener"
        target="_blank"
        style={linkImages ? "cursor:pointer" : "pointer-events:none"}
      >
        <img src="{base}/{img}" alt="Carousel" />
      </a>
    {/each}
  </div>
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

    .carousel-images {
      overflow: hidden;
      display: flex;
      flex-direction: row;
      width: 100%;

      a {
        // flex-shrink: 0;
        transition: transform 2000ms ease;
        display: none;
          
        &.active {
          display: block;

          &.slide-to-prev {
            transform: translateX(100%);
          }

          &.slide-to-next {
            transform: translateX(-100%);
          }
        }
  
        &.prev {
          &.slide-to-prev {
            display: block;
            // transform: translateX(100%)
          }
        }
  
        &.next {
          &.slide-to-next {
            display: block;
            // transform: translateX(-100%)
          }
        }
  
        img {
          width: 100%;
          display: block;
        }
      }
    }

    .carousel-ui {
      $indicator-full-height: 24px;
      $indicator-collapsed-height: 3px;
      $indicator-padding-top: 8px;

      .carousel-button {
        transition: opacity 200ms ease;

        position: absolute;
        top: 0;
        bottom: calc(#{$indicator-full-height} + #{$indicator-padding-top});
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 0 0 4px rgba(51, 51, 51, 0.606);
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
        padding-top: $indicator-padding-top;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
  
        .indicator {
          $gap: 8px;
          height: $indicator-full-height;
          width: calc(32px + #{$gap});
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          overflow: hidden;
  
          cursor: pointer;
          
          .graphic {
            background-color: rgba($color-skyline-blue, 0.4);
            height: $indicator-collapsed-height;
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
            color: $color-light-gray;
          }
  
          &.active .graphic {
            background-color: rgba($color-theme-red, 0.9);
          }
        }
      }
    }

    // desktop
    @media (min-width: $narrow-width) {
      .carousel-ui.hidden .carousel-button {
        opacity: 0;
      }
    }
  }
</style>