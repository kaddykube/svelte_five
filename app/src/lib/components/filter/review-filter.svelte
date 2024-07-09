<script lang="ts">
  import { Select } from "bits-ui";
  import { Review } from "$lib/store/todos.svelte";
  import Icon from "@iconify/svelte";

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
    class="h-fit w-[140px] inline-flex items-center rounded-lg border  bg-white px-[10px] "
    aria-label="filtern"
  >
    <Select.Value class="" placeholder="filtern" />
    <div class="ml-auto">
      <Icon icon="fluent:chevron-up-down-16-regular" />
    </div>
  </Select.Trigger>
  <Select.Content
    class="w-full rounded-xl border border-muted bg-white px-1 py-3 shadow-sm"
  >
    {#each themes as theme}
      <Select.Item
        class="flex w-full items-center rounded-lg py-1 pl-2 text-sm  border-b-[1px] cursor-pointer"
        value={theme.value}
        label={theme.label}
      ></Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
