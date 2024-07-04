<script lang="ts">
  import { type Item } from "$lib/store/todos.svelte";
  type Props = {
    list: Item[];
  };
  let { list }: Props = $props();
</script>

{#each list as item}
  <p class="">{item.text}</p>
{/each}
