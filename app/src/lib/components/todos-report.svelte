<script lang="ts">
  import type { Snippet } from "svelte";
  type Props = {
    listChildren: Snippet;
  };
  let { listChildren }: Props = $props();
</script>
    {@render listChildren()}
