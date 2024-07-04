<script lang="ts">
  import { Tabs } from "bits-ui";
  import ToDosAdmin from "$lib/components/todos-admin.svelte"
  import ToDosReport from "$lib/components/todos-report.svelte"
  import { createList, type Item } from "$lib/store/todos.svelte"

  const tabs = [
    { trigger: "report", content: "report", desciption: "" },
    { trigger: "admin", content: "admin", desciption: "" },
  ];

 let listT = createList();

 let count = $state(0);
 function clickFunc(){
  count++
  listT.addItem(`ITEM ${count}`);
 }

</script>

{#snippet snippetContent(content, list)}
    {#if content === "report"}
        <ToDosReport {list} listObject={listT}></ToDosReport>
    {:else if content === "admin"}
        <ToDosAdmin {list}></ToDosAdmin>
    {/if}
{/snippet}



<div class="w-full">
  {#if tabs && tabs.length > 0}
    <Tabs.Root
      value={tabs[0].trigger}
      class=" rounded-lg border border-lime-300 shadow-md w-full p-[10px]"
    >
      <Tabs.List
        class="rounded-9px  p-2 flex gap-2 shadow-md rounded-[7px] leading-[0.01em] shadow-mini-inset text-gray-400  font-mulish"
      >
        {#each tabs as tab}
          <Tabs.Trigger
            value={tab.trigger}
            class="capitalize  rounded-[7px] py-4 px-8 border bg-lime-50 border-white data-[state=active]:text-white data-[state=active]:border-lime-300 data-[state=active]:bg-lime-500 data-[state=active]:shadow-md  "
            >{tab.trigger}</Tabs.Trigger
          >
        {/each}
      </Tabs.List>
      {#each tabs as tab}
        <Tabs.Content value={tab.trigger} class="w-full shadow-md pt-2 min-h-[300px]">
          <div class="p-2">
            {@render snippetContent(tab.content, listT.list)}
          </div>
        </Tabs.Content>
      {/each}

  <button  class="capitalize  rounded-[7px] p-2 mt-2 border shadow-md "
   onclick={clickFunc}>item+</button>
    </Tabs.Root>
  {/if}
</div>
