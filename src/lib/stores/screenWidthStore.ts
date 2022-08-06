import { NARROW_WIDTH } from "$lib/style/variables";
import { writable } from "svelte/store";

/**
 * Store of screen width. Updates on resize event.
 */
export const screenWidth = writable(NARROW_WIDTH+1); // start wide