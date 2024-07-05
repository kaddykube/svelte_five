export type Item = { text: string; status: boolean };

export function createList() {
  let list: Item[] = $state([]);

  const addItem = (text: string, status: boolean) => {
    list.push({ text: text, status: status });
    list = list;
  };

  const removeItem = (index: number) => {
    list.splice(index, 1);
    list = list;
  };

  return {
    get list() {
      return list;
    },
    addItem,
    removeItem,
  };
}
