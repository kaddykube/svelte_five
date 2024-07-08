<script lang="ts">
  import { RadioGroup, Label } from "bits-ui";

  type Props = {
    input: string;
  };

  let { input = $bindable() }: Props = $props();

  let groupLight = [
    {
      value: "amazing",
      style: "data-[state=checked]:border-lime-300",
      label: "&#128994;",
    },
    {
      value: "average",
      style: "data-[state=checked]:border-yellow-200",
      label: "&#128993;",
    },
    {
      value: "terrible",
      style: "data-[state=checked]:border-rose-300",
      label: "&#128308;",
    },
  ];
</script>

<RadioGroup.Root class="flex flex-col gap-1" bind:value={input}>
  {#if groupLight}
    {#each groupLight as item}
      <div class="group flex select-none items-center transition-all">
        <RadioGroup.Item
          id={item.value}
          value={item.value}
          class={`size-4 border-[12px] rounded-2xl ${item.style} shadow-lg `}
        />
        <Label.Root for="amazing" class="absolute pl-1 pt-[1px]"
          >{@html item.label}</Label.Root
        >
      </div>
    {/each}
  {/if}
</RadioGroup.Root>
