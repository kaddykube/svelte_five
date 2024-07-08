<script lang="ts">
  import { Select } from "bits-ui";
  import { Review } from "$lib/store/todos.svelte";

  type Props = {
    input: Review | undefined;
  };

  let { input = $bindable() }: Props = $props();

  const themes = [
    { value: Review.AMAZING, label: Review.AMAZING },
    { value: Review.AVERAGE, label: Review.AVERAGE },
    { value: Review.TERRIBLE, label: Review.TERRIBLE },
  ];
</script>

<Select.Root items={themes}>
  <Select.Trigger
    bind:value={input}
    class="h-fit w-[100px] items-center rounded-lg border  bg-white px-[10px]  transition-color focus:outline-none"
    aria-label="filtern"
  >
    <Select.Value class="text-sm" placeholder="filtern" />
  </Select.Trigger>
  <Select.Content
    class="w-full rounded-xl border border-muted bg-white px-1 py-3 shadow-popover outline-none"
  >
    {#each themes as theme}
      <Select.Item
        class="flex  w-full select-none items-center rounded-button py-1 pl-2 text-sm outline-none transition-all duration-75 border-b-[1px]"
        value={theme.value}
        label={theme.label}
      ></Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
