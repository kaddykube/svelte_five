<script lang="ts">
  type Props = {
    input: string;
  };
  let { input = $bindable() }: Props = $props();
</script>

<input
  class="border border-gray-300 mr-2 rounded-xl p-2 w-full"
  type="text"
  bind:value={input}
/>
