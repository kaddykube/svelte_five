<script>
  import { Tabs } from "bits-ui";
  import ToDosAdmin from "$lib/components/todos-admin.svelte"

  const tabs = [
    { trigger: "report", content: "report", desciption: "" },
    { trigger: "admin", content: "admin", desciption: "" },
  ];
</script>

{#snippet snippetContent(content)}
    {#if content === "report"}
        <p>{content}</p>
    {:else if content === "admin"}
        <ToDosAdmin></ToDosAdmin>
    {/if}
{/snippet}



<div class="w-full">
  {#if tabs && tabs.length > 0}
    <Tabs.Root
      value={tabs[0].trigger}
      class=" rounded-lg border border-lime-300 shadow-md w-full p-[10px]"
    >
      <Tabs.List
        class="grid grid-cols-2 gap-1 rounded-9px  p-2  shadow-md rounded-[7px] leading-[0.01em] shadow-mini-inset text-gray-400 w-1/2 font-mulish"
      >
        {#each tabs as tab}
          <Tabs.Trigger
            value={tab.trigger}
            class="capitalize h-8 rounded-[7px] p-2 border bg-lime-50 border-white data-[state=active]:text-white data-[state=active]:border-lime-300 data-[state=active]:bg-lime-500 data-[state=active]:shadow-md  "
            >{tab.trigger}</Tabs.Trigger
          >
        {/each}
      </Tabs.List>
      {#each tabs as tab}
        <Tabs.Content value={tab.trigger} class="w-full shadow-md pt-2">
          <div class="p-2">
            {@render snippetContent(tab.content)}
          </div>
        </Tabs.Content>
      {/each}
    </Tabs.Root>
  {/if}
</div>
