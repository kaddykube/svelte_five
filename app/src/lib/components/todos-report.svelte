<script lang="ts">
  import { type Snippet } from "svelte";
  import { type Item, Review} from "$lib/store/todos.svelte"
  import ReviewFilter from "./filter/review-filter.svelte";


type Props = {
  list: Item[],
  listRow: (prop: Item, index: number) => any,
  listRowOpen: (prop: Item, index: number) => any,
}
  let { list, listRow, listRowOpen }: Props = $props();

  $inspect(list);

  let reviewFilter: Review | undefined = $state(undefined);


</script>
<div>
{#if  listRow}
  <p class="w-full h-fit rounded-2xl bg-gray-50 p-2 my-2">offene Tasks</p>
  <div class="justify-end flex w-full">
  <ReviewFilter bind:input={reviewFilter}/>
</div>
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

