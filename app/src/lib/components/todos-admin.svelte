<script lang="ts">
  import { Review, type Item } from "$lib/store/todos.svelte";
  import type { Snippet } from "svelte";
  import TextInput from "./inputs/text-input.svelte";
  import { Switch, Label } from "bits-ui";
  import RadioInputTrafficLight from "./inputs/radio-input-trafficLight.svelte";

  type Props = {
    listObject: {
      readonly list: Item[];
      addItem: (text: string, status: boolean, review: Review) => void;
    };
    children: Snippet;
  };
  let { listObject, children }: Props = $props();

  let status = $state(false);

  let trafficLight: Review = $state(Review.AVERAGE);

  let input: string = $state("");

  function clickFunc() {
    listObject.addItem(`Task: ${input}`, status, trafficLight);
  }
</script>

<div class="flex flex-col w-full h-full p-2">
  {#if children}
    <p class="w-full rounded-2xl bg-gray-50 p-2 my-2">alle Tasks</p>
    {@render children()}
  {/if}

  <p class="w-full rounded-2xl bg-gray-50 p-2 my-2 mt-4">Tasks hinzufügen</p>
  <div class="flex items-center justify-end pt-2 gap-4">
    <TextInput bind:input />
    <div class="flex flex-col items-center pr-2">
      <Switch.Root
        bind:checked={status}
        id="status"
        class="peer inline-flex h-[26px] min-h-[26px] w-[50px] shrink-0 cursor-pointer bg-gray-200 items-center rounded-full px-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-lime-500 data-[state=unchecked]:bg-blue data-[state=unchecked]:shadow-mini-inset"
      >
        <Switch.Thumb
          class="pointer-events-none block size-[20px] shrink-0 rounded-full bg-white transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini"
        />
      </Switch.Root>
      <Label.Root for="status" class="text-[12px] font-medium uppercase"
        >status</Label.Root
      >
    </div>
    <RadioInputTrafficLight bind:input={trafficLight} />
  </div>
  <button
    class="rounded-xl p-2 px-10 w-[100px] shadow-md border mt-2 self-end hover:shadow-sm"
    onclick={clickFunc}>+</button
  >
</div>
