<script lang="ts">
  type Props = {
    input: string;
  };
  let { input }: Props = $props();

  $inspect(input);
</script>

<input
  class="border-2 border-gray-300 mr-2 rounded-lg p-2"
  type="text"
  bind:value={input}
/>
