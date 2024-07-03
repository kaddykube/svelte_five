<script lang="ts">
  let m = 0;

  function handleMousemove(event: MouseEvent) {
    m = event.clientX;
  }

  // Idee:
  /* 
  add canvas 
  bind linear gradient background position on mouse X
  use svelte 5 effect rune 
  */
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class={`bg-lime-200 w-full h-[100px] flex`}
  on:mousemove={handleMousemove}
></div>
