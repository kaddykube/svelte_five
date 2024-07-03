export function createList() {
  let list: string[] = $state([]);
  return {
    get list() {
      return list;
    },
    addItem: (text: string) => {
      list.push(text);
    },
  };
}
