export type Item = { text: string; status: boolean };

export function createList() {
  let list: Item[] = $state([]);

  const addItem = (text: string) => {
    list.push({ text: text, status: false });
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
