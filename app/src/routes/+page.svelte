<script>
  import EffectBanner from "$lib/components/elements/effect-banner.svelte";
  import Wrapper from "$lib/components/elements/wrapper.svelte";
  import TodayTasks from "$lib/components/sections/today-tasks.svelte";
  import TodoList from "$lib/components/sections/todo-list.svelte";
</script>

<div class="w-[100vw] h-fit flex flex-col items-center font-libre">
  <EffectBanner></EffectBanner>
  <div class="max-w-[600px] w-full h-full pt-[50px] flex items-center">
    <Wrapper>
      <h1 class="text-lime-500 text-[30px]">Komponenten mit Svelte 5 bauen!</h1>

      <h1 class="text-lime-800 text-[22px] w-full text-left">
        Version 1: Komponenten geteilte TodoList via store
      </h1>
      <TodoList />
      <TodayTasks />
      <h1 class="text-lime-800 text-[22px] w-full text-left">
        Version 2: TODO Class
      </h1>
    </Wrapper>
  </div>
</div>
