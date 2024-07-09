<script lang="ts">
  import { Select } from "bits-ui";
  import { Review } from "$lib/store/todos.svelte";

  type Props = {
    input: Review | undefined;
    clickFunc: () => void;
  };

  let { input = $bindable(), clickFunc }: Props = $props();

  const themes = [
    { value: Review.AMAZING, label: Review.AMAZING },
    { value: Review.AVERAGE, label: Review.AVERAGE },
    { value: Review.TERRIBLE, label: Review.TERRIBLE },
  ];

  let selected = $state({ value: input });

  $effect(() => {
    input = selected.value;
  });
</script>

<Select.Root items={themes} bind:selected>
  <Select.Trigger
    class="h-fit w-[140px] inline-flex items-center rounded-lg border  bg-white px-[10px] "
    aria-label="filtern"
  >
    <Select.Value class="" placeholder="filtern" />
    <div class="ml-auto">&#10549;</div>
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
<button
  class="text-black border-[1px] rounded-full text-center px-2 ml-1 hover:shadow-lg"
  onclick={clickFunc}>&#x232B;</button
>
