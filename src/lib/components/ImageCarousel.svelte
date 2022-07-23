<script lang="ts">
  import { mod } from "$lib/utils";
  import type { NonemptyArray } from "$lib/types";
  import classNames from "classnames";
  import { base } from "$app/paths";

  export let images: NonemptyArray<string>;
  export let linkImages = false;
  export let imageStyle: string = "";

  const numImgs = images.length;
  const slidingTime = 400; // transition time for sliding effect in ms
  let currIdx = 0;
  let hideUi = true;

  // takes target image index, returns function that changes image
  // this allows it to be used as a callback while taking a param
  // https://stackoverflow.com/a/45448802
  const changeImage = (target: number) => () => {
    currIdx = mod(target, numImgs);
  }

  // callbacks to show/hide UI on mouse enter/exit
  const setUiHidden = () => hideUi = true;
  const setUiVisible = () => hideUi = false;

  // swipe gesture handling
  type ClientPos = {x: number, y: number};
  let swipeStart: ClientPos, swipeEnd: ClientPos, swipeStartTime: number;
  const onTouchStart = (e: TouchEvent) => {
    swipeStart = {x: e.touches[0].clientX, y: e.touches[0].clientY};
    swipeStartTime = e.timeStamp;
  }
  const onTouchMove = (e: TouchEvent) => {
    const pos: ClientPos = {x: e.touches[0].clientX,
                            y: e.touches[0].clientY};
    const deltaX = pos.x - swipeStart.x;
    const deltaT = e.timeStamp - swipeStartTime;
    // if swipe was fast and horizontal, don't scroll the page
    // (the carousel eats the touch event)
    if (Math.abs(deltaX) / (deltaT) > 0.7) {
      e.preventDefault();
    }
  }
  const onTouchEnd = (e: TouchEvent) => {
    swipeEnd = {x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY};
    const deltaX = swipeEnd.x - swipeStart.x; // px
    const deltaT = e.timeStamp - swipeStartTime; // ms
    const dir = deltaX < 0 ? 1 : -1;
    const noMore = (currIdx == 0 && dir == -1) ||
                   (currIdx == numImgs - 1 && dir == 1);
    // only swipe carousel if swipe was far and fast enough
    // and we're not at the end of the carousel
    if (!noMore && Math.abs(deltaX) > 60 && deltaT < 300) {
      currIdx = mod(currIdx + dir, numImgs);
    }
  }
</script>

<div
  class="carousel"
  on:mouseleave={setUiHidden}
  on:mouseenter={setUiVisible}
  on:touchstart={onTouchStart}
  on:touchend={onTouchEnd}
  on:touchmove={onTouchMove}
>
  <ul
    class="carousel-inner"
    style={`--sliding-time:${slidingTime}ms;transform:translateX(-${currIdx*100}%)`}
  >
    {#each images as img}
      <li class="carousel-slide">
        <a
          href={`${base}/${img}`}
          rel="external noopener"
          target="_blank"
          style={linkImages ? "cursor:pointer" : "pointer-events:none"}
        >
          <img src="{base}/{img}" alt="Carousel" style={imageStyle} />
        </a>
      </li>
    {/each}
  </ul>
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
  @import "src/lib/style/variables";

  .carousel {
    position: relative;
    width: 100%;

    .carousel-inner {
      position: relative;
      display: flex;
      width: 100%;
      aspect-ratio: 16 / 9;
      list-style: none;
      margin: 0;
      padding: 0;
      transition: transform var(--sliding-time) ease;

      .carousel-slide {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        overflow: hidden;
        user-select: none;
  
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
      }
    }

    .carousel-ui {
      $indicator-full-height: 24px;
      $indicator-collapsed-height: 5px;
      $indicator-padding-top: 8px;

      .carousel-button {
        transition: opacity 200ms ease;

        position: absolute;
        top: 0;
        // don't extend to indicator, just height of image
        bottom: calc(#{$indicator-full-height} + #{$indicator-padding-top});
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 0 0 4px rgba(51, 51, 51, 0.606);
        cursor: pointer;
        background: transparent;

        &.prev {
          padding-right: 1em;
          left: 0;
          background: linear-gradient(
            90deg,
            rgba(28, 28, 28, 0.496) 0%,
            rgba(43, 43, 43, 0.329) 40%,
            rgba(255,255,255,0) 100%
          );
        }

        &.next {
          padding-left: 1em;
          right: 0;
          background: linear-gradient(
            -90deg,
            rgba(28, 28, 28, 0.678) 0%,
            rgba(43, 43, 43, 0.329) 40%,
            rgba(255,255,255,0) 100%
          );
        }
  
        &:hover .icon {
          opacity: 1;
        }
  
        .icon {
          color: white;
          font-size: 1.6em;
          opacity: 0.5;
        }

        // desktop
        @media (min-width: $medium-width) {
          &.next {
            padding-left: 8%;
          }

          &.prev {
            padding-right: 8%;
          }

          .icon {
            font-size: 3em;
          }
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