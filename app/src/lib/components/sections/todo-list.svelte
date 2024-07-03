<script>
  import TextInput from "../elements/text-input.svelte";
  import { createList } from "$lib/store/todos.svelte";
  import { onMount } from "svelte";

  const list = createList();

  onMount(() => {
    list.addItem("first on mount");
    list.addItem("second on mount");
  });
</script>

<div class=" pt-[50px] w-1/3 font-libre">
  <h2 class="text-[20px] p-2">Aufgabenliste</h2>
  <ul class="border-[1px] border-slate-500 rounded-md font-thin">
    {#each list.list as item}
      <li
        class="p-[10px] border-b-2 border-slate-100 flex justify-between w-full"
      >
        {item}
        <button class="bg-slate-400 px-2 text-white rounded-2xl"
          >&#10003;</button
        >
      </li>
    {/each}
  </ul>
  <p class="text-[20px] p-2">Aufgabe hinzufügen:</p>
  <TextInput />
</div>
