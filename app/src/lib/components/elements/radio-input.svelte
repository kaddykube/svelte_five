<script lang="ts">
  let value = $state("HEUTE");
</script>

<div class="flex justify-center items-center p-2 border-slate-500 border-[1px]">
  <input type="radio" bind:value />
  <p class="pl-2">Heute fällig</p>
</div>
