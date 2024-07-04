<script lang="ts">
  import { type Item } from "$lib/store/todos.svelte";
  import type { Snippet } from "svelte";
  import TextInput from "./inputs/text-input.svelte";
  type Props = {
    listObject: {
      readonly list: Item[];
      addItem: (text: string) => void;
    };
    listChildren: Snippet;
  };
  let { listObject, listChildren }: Props = $props();

  function clickFunc() {
    listObject.addItem(`ITEM ${'value of input'}`);
  }
</script>
    {@render listChildren()}
<div class="flex items-center ">
<TextInput/>
  <button
    class="capitalize rounded-[7px] p-2 px-4 border shadow-md"
    onclick={clickFunc}>+</button
  >
</div>
