<script lang="ts">
  import { type Item } from "$lib/store/todos.svelte";
  import type { Snippet } from "svelte";
  import TextInput from "./inputs/text-input.svelte";
  import { Switch, Label } from "bits-ui";

  type Props = {
    listObject: {
      readonly list: Item[];
      addItem: (text: string, status: boolean) => void;
    };
    children: Snippet;
  };
  let { listObject, children }: Props = $props();


  let status = $state(false);

/*   function createInput() {
    let input: string = $state("");

    return {
      get input() {
        return input;
      },
      set input(text: string) {
        input = text;
      },
    };
  } */

  let input: string = $state("");


  function clickFunc() {
    listObject.addItem(`Task: ${input}`, status);
  }


</script>
<div>
  {#if children}
  {@render children()}
  {/if}
  
  </div>
<div class="flex items-center justify-end pt-2">

  <!-- <TextInput bind:input={input}/> -->

  <TextInput {input}/>

  <div class="flex flex-col items-center pr-2">
    <Switch.Root
    bind:checked={status}
      id="status"
      class="peer inline-flex h-[26px] min-h-[26px] w-[50px] shrink-0 cursor-pointer bg-gray-400 items-center rounded-full px-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-lime-500 data-[state=unchecked]:bg-blue data-[state=unchecked]:shadow-mini-inset"
    >
      <Switch.Thumb
        class="pointer-events-none block size-[20px] shrink-0 rounded-full bg-white transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini"
      />
    </Switch.Root>
    <Label.Root for="status" class="text-[12px] font-medium uppercase"
      >status</Label.Root
    >
  </div>
  <button
    class="capitalize rounded-[7px] p-2 px-4 border shadow-md"
    onclick={clickFunc}>+</button
  >
</div>
