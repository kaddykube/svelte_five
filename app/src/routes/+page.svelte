<script>
  // @ts-nocheck

  import Todos from "$lib/components/todos.svelte";
  import FlexWrapper from "$lib/components/wrapper.svelte";
</script>

<div class="w-[100vw] min-h-[80vh] flex items-center justify-center font-libre">
  <div class="max-w-[600px] w-full">
    <FlexWrapper>
      <Todos />
    </FlexWrapper>
  </div>
</div>
