<script lang="ts">
  import ToDoItem from "$lib/components/version2/todo-item.svelte";

  let list: string[] = $state([]);
  list.push("item 1");
  list.push("item 2");

  list.push("item 2");
</script>

{#snippet snippetText()}
    <p>---</p>
{/snippet}

{#snippet todo(item)}
    <ToDoItem text={item} {snippetText} />
{/snippet}


{#each list as item}
    {@render todo(item)}    
{/each}
