<script lang="ts">
  import { type Item } from "$lib/store/todos.svelte";
  import type { Snippet } from "svelte";
  type Props = {
    listObject: {
      readonly list: Item[];
      addItem: (text: string) => void;
    };
    listChildren: Snippet;
  };
  let { listObject, listChildren }: Props = $props();

  let count = $state(0);
  function clickFunc() {
    count++;
    listObject.addItem(`ITEM ${count}`);
  }
</script>

    {@render listChildren()}
<div class="flex">
  <button
    class="capitalize rounded-[7px] p-2 mt-2 border shadow-md"
    onclick={clickFunc}>item+</button
  >
</div>
