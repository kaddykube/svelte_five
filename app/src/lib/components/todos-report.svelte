<script lang="ts">
  import { type Item } from "$lib/store/todos.svelte";
  type Props = {
    list: Item[];
    listObject: {
      readonly list: Item[];
      addItem: (text: string) => void;
    };
  };
  let { list, listObject }: Props = $props();

  let listT = $derived(listObject);

  $effect(() => {
    console.log("in report componente:", listT.list);
  });
</script>

{#each list as item}
  <p class="text-green-400">{item.text}</p>
{/each}
