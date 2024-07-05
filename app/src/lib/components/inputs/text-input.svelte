<script lang="ts">
  type Props = {
    input: string;
  };
  let { input = $bindable() }: Props = $props();
</script>

<input
  class="border-2 border-gray-300 mr-2 rounded-lg p-2 w-full"
  type="text"
  bind:value={input}
/>
