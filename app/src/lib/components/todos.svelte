<script lang="ts">
  import { Tabs } from "bits-ui";
  import ToDosAdmin from "$lib/components/todos-admin.svelte"
  import ToDosReport from "$lib/components/todos-report.svelte"
  import { createList, type Item } from "$lib/store/todos.svelte"

  const tabs = [
    { trigger: "report", content: "report", desciption: "" },
    { trigger: "admin", content: "admin", desciption: "" },
  ];

 let listObject = createList();

 function remove(index: number){
  listObject.removeItem(index);
 }

 function setStatus(index: number){
  listObject.setStatus(index);
 }

 // filter list 

 // 

</script>

{#snippet listHead()}
    <h1 class="pb-2">List</h1>
{/snippet}

{#snippet listRow(item, index)}
  <div class="flex justify-between border-b-[1px] px-2 pb-1 border-gray-200 items-center">
    <p class={`${item.status && 'text-lime-500'}`}>{item.text}</p>
    <button class="text-black border-[1px] w-[22px] h-[30px] rounded-full text-center pb-2 hover:shadow-lg" onclick={() => remove(index)}>-</button>
  </div>
{/snippet}

{#snippet listRowOpen(item, index)}
  <div class="flex justify-between border-b-[1px] px-2 pb-1 border-gray-200 items-center">
    <p class=''>{item.text}</p>
    <button class="text-lime-500 border-[1px] w-[22px] h-[30px] rounded-full text-center pb-2 hover:shadow-lg" onclick={() => setStatus(index)}>&check;</button>
  </div>
{/snippet}

{#snippet tabContent(content)}
    {#if content === "report"}
        <ToDosReport list={listObject.list} {listHead} {listRow} {listRowOpen}>
        </ToDosReport>
    {:else if content === "admin"}
        <ToDosAdmin listObject={listObject}>  
          {#each listObject.list as item, index}
              {@render listRow(item, index)}
          {/each}
        </ToDosAdmin>
    {/if}
{/snippet}

<div class="w-full">
  {#if tabs && tabs.length > 0}
    <Tabs.Root
      value={tabs[0].trigger}
      class=" rounded-lg bg-white shadow-md w-full p-[10px] gradient-border"
    >
      <Tabs.List
        class="rounded-9px p-2 flex gap-2 shadow-md rounded-[7px] leading-[0.01em] shadow-mini-inset text-gray-400  font-mulish"
      >
        {#each tabs as tab}
          <Tabs.Trigger
            value={tab.trigger}
            class="capitalize  rounded-[7px] py-4 px-8 border bg-gray-50 border-white data-[state=active]:text-white data-[state=active]:bg-lime-500 data-[state=active]:shadow-md  "
            >{tab.trigger}</Tabs.Trigger
          >
        {/each}
      </Tabs.List>
      {#each tabs as tab}
        <Tabs.Content value={tab.trigger} class="w-full shadow-md pt-2 min-h-[300px]">
          <div class="p-2">
            {@render tabContent(tab.content)}
          </div>
        </Tabs.Content>
      {/each}
    </Tabs.Root>
  {/if}
</div>
