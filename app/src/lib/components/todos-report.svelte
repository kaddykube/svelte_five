<script lang="ts">
  import { type Snippet } from "svelte";
  import { type Item} from "$lib/store/todos.svelte"
// props 
type Props = {
  list: Item[],
  children: Snippet,
}
  let { list, children }: Props = $props();
</script>
<div>
{#if children}

{@render children()}
{/if}

</div>

