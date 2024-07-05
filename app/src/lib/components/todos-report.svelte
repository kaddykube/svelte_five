<script lang="ts">
  import { type Snippet } from "svelte";
  import { type Item} from "$lib/store/todos.svelte"

type Props = {
  list: Item[],
  listHead: Snippet,
  listRow: (prop: Item, index: number) => any,
  listRowOpen: (prop: Item, index: number) => any,
}
  let { list, listHead, listRow, listRowOpen }: Props = $props();
</script>
<div>
{#if listHead && listRow}
  {@render listHead()}
  <p class="w-full rounded-2xl bg-gray-50 p-2 my-2">offene Tasks</p>
  {#each list as item, index}
    {#if !item.status}
      {@render listRowOpen(item, index)}
    {/if}
  {/each}
  <p class="w-full rounded-2xl bg-gray-50 p-2 my-2">erledigte Tasks</p>
  {#each list as item, index}
    {#if item.status}
      {@render listRow(item, index)}
    {/if}
  {/each}
{/if}

</div>

