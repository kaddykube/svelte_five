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
 
</script>

<!-- display listitem as row | just show completed tasks -->
{#snippet listRow(item, index)}
  <div class="flex justify-between border-b-[1px] px-2 pb-1 border-gray-200 items-center">
    <p class={`${item.status && 'text-lime-500'}`}>{item.text}</p>
    <button class="text-black border-[1px] w-[22px] h-[30px] rounded-full text-center pb-2 hover:shadow-lg" onclick={() => remove(index)}>-</button>
  </div>
{/snippet}

<!-- display listitem as row | just show open tasks -->
{#snippet listRowOpen(item, index)}
  <div class="flex justify-between border-b-[1px] px-2 py-2 border-gray-200 items-center">
    <p class=''>{item.text}</p>
    <button class="text-lime-500 border-[1px] w-[22px] h-[30px] rounded-full text-center pb-2 hover:shadow-lg" onclick={() => setStatus(index)}>&check;</button>
  </div>
{/snippet}

<!-- display list report or admin page -->
{#snippet tabContent(content)}
    {#if content === "report"}
        <ToDosReport list={listObject.list} {listRow} {listRowOpen}>
        </ToDosReport>
    {:else if content === "admin"}
        <ToDosAdmin listObject={listObject}>  
          {#each listObject.list as item, index}
              {@render listRow(item, index)}
          {/each}
        </ToDosAdmin>
    {/if}
{/snippet}

<!-- Tabs -->
<div class="w-full">
  {#if tabs && tabs.length > 0}
    <Tabs.Root
      value={tabs[0].trigger}
      class=" rounded-lg bg-white shadow-md w-full p-[10px] gradient-border"
    >
      <Tabs.List
        class="rounded-lg p-2 flex gap-2 shadow-md  leading-[0.01em] text-gray-400  font-mulish"
      >
        {#each tabs as tab}
          <Tabs.Trigger
            value={tab.trigger}
            class="capitalize  rounded-lg py-4 px-8 border bg-gray-50 border-white data-[state=active]:text-white data-[state=active]:bg-lime-500 data-[state=active]:shadow-md  "
            >{tab.trigger}</Tabs.Trigger
          >
        {/each}
      </Tabs.List>
      {#each tabs as tab}
        <Tabs.Content value={tab.trigger} class="w-full shadow-md h-auto min-h-[300px] p-2">
            {@render tabContent(tab.content)}
        </Tabs.Content>
      {/each}
    </Tabs.Root>
  {/if}
</div>
