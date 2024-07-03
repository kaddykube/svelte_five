<script>
  import TodoList from "$lib/components/version2/todo-list.svelte";
  import Wrapper from "$lib/components/wrapper.svelte";
</script>

<div class="w-[100vw] h-fit flex flex-col items-center font-libre">
  <div class="max-w-[600px] w-full h-full pt-[50px] flex items-center">
    <Wrapper>
      List Items:
      <TodoList />
    </Wrapper>
  </div>
</div>
