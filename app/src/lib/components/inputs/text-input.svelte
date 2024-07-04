<script lang="ts">
  type Props = {
    value: string;
  };
  let { value }: Props = $props();

  let makeText = function (def: string) {
    let myText = $state(def);
    return {
      get text() {
        return myText;
      },
      set text(v) {
        myText = v;
      },
    };
  };
  let text = makeText("");
</script>

{text.text}
<input
  class="border-2 border-gray-300 mr-2 rounded-lg p-2"
  type="text"
  bind:value={text.text}
/>
