<script lang="ts">
  import { type Item, Review } from "$lib/store/todos.svelte";
  import ReviewFilter from "./filter/review-filter.svelte";

  type Props = {
    list: Item[];
    listRow: (prop: Item, index: number) => any;
    listRowOpen: (prop: Item, index: number) => any;
  };
  let { list, listRow, listRowOpen }: Props = $props();

  let filterCleared: boolean = $state(false);
  let reviewFilter: Review | undefined = $state(undefined);

  let filteredList = $derived(
    list.filter((item) => {
      if (reviewFilter) {
        return item.review === reviewFilter;
      }
      return item;
    }),
  );

  function clearFilter() {
    reviewFilter = undefined;
    filterCleared = !filterCleared;
  }
</script>

<div>
  {#if listRow}
    <p class="w-full h-fit rounded-2xl bg-gray-50 p-2 my-2">offene Tasks</p>
    <div class="justify-end flex w-full">
      {#key filterCleared}
        <ReviewFilter bind:input={reviewFilter} clickFunc={clearFilter} />
      {/key}
    </div>
    {#each filteredList as item, index}
      {#if !item.status}
        {@render listRowOpen(item, index)}
      {/if}
    {/each}
    <p class="w-full rounded-2xl bg-gray-50 p-2 my-2">erledigte Tasks</p>
    {#each filteredList as item, index}
      {#if item.status}
        {@render listRow(item, index)}
      {/if}
    {/each}
  {/if}
</div>
