<script lang="ts">
  import { createList, type Item } from "$lib/store/todos.svelte";
  // wird nicht geupdated, also bisher nicht reactive
  const list = createList();
</script>

<div class=" pt-[50px] w-1/3 font-libre">
  <h2 class="text-[20px] p-2">heute zu erledigen</h2>
  <ol>
    {#if list}
      {#each list.list as li}
        <li>{li.text}</li>
      {/each}
    {/if}
  </ol>
</div>
