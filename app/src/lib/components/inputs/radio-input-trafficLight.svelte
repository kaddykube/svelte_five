<script lang="ts">
  import { RadioGroup, Label } from "bits-ui";
  import { Review } from "$lib/store/todos.svelte";

  type Props = {
    input: string;
  };

  let { input = $bindable() }: Props = $props();

  let groupLight = [
    {
      value: Review.AMAZING,
      style: "text-lime-600",
      styleBorder:
        "data-[state=checked]:border-lime-200 data-[state=checked]:bg-lime-400",
      label: "&#9679;",
    },
    {
      value: Review.AVERAGE,
      style: "text-yellow-600",
      styleBorder:
        "data-[state=checked]:border-yellow-200 data-[state=checked]:bg-yellow-300",
      label: "&#9679;",
    },
    {
      value: Review.TERRIBLE,
      style: "text-rose-900",
      styleBorder:
        "data-[state=checked]:border-rose-200 data-[state=checked]:bg-rose-300",
      label: "&#9679;",
    },
  ];
</script>

<RadioGroup.Root
  class="flex gap-[2px] h-[40px] bg-gray-200 rounded-2xl px-2"
  bind:value={input}
>
  {#if groupLight}
    {#each groupLight as item}
      <div class="group flex select-none items-center transition-all">
        <Label.Root for="amazing" class={`absolute pl-1 pt-[1px] ${item.style}`}
          >{@html item.label}</Label.Root
        >
        <RadioGroup.Item
          id={item.value}
          value={item.value}
          class={`size-6 border-[3px] rounded-2xl ${item.styleBorder} shadow-lg `}
        />
      </div>
    {/each}
  {/if}
</RadioGroup.Root>
