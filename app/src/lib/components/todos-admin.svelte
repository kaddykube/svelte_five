<script lang="ts">
  import { type Item } from "$lib/store/todos.svelte";
  import type { Snippet } from "svelte";
  import TextInput from "./inputs/text-input.svelte";
  type Props = {
    listObject: {
      readonly list: Item[];
      addItem: (text: string) => void;
    };
    children: Snippet;
  };
  let { listObject, children }: Props = $props();

  function clickFunc() {
    listObject.addItem(`ITEM ${'value of input'}`);
  }
</script>
<div>
  {#if children}
  
  {@render children()}
  {/if}
  
  </div>
<div class="flex items-center ">
<TextInput/>
  <button
    class="capitalize rounded-[7px] p-2 px-4 border shadow-md"
    onclick={clickFunc}>+</button
  >
</div>
