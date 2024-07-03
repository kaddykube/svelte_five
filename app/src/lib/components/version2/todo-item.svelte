<script lang="ts">
  class TodoItem {
    done = $state(false);
    text = $state("");

    constructor(text: string) {
      this.text = text;
    }
  }

  type Props = {
    text: string;
  };

  let { text }: Props = $props();

  const item = new TodoItem(text);
</script>

<p>{item.text}</p>
