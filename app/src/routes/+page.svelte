<script>
  import Wrapper from "$lib/components/elements/wrapper.svelte";
  import TodayTasks from "$lib/components/sections/today-tasks.svelte";
  import TodoList from "$lib/components/sections/todo-list.svelte";
</script>

<div class="w-[100vw] h-[100vh] flex items-center">
  <div class="max-w-[2000px] w-full h-full pt-[100px]">
    <Wrapper>
      <h1 class="text-lime-500 text-[30px]">Komponenten mit Svelte 5 bauen!</h1>
      <TodoList />
      <TodayTasks />
    </Wrapper>
  </div>
</div>
