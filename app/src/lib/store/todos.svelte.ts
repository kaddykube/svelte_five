export enum Review {
  AMAZING = "amazing",
  AVERAGE = "average",
  TERRIBLE = "terrible",
}

export type Item = { text: string; status: boolean; review: Review };

export function createList() {
  let list: Item[] = $state([]);

  const addItem = (text: string, status: boolean, review: Review) => {
    list.push({ text: text, status: status, review: review });
  };

  const removeItem = (index: number) => {
    list.splice(index, 1);
  };

  const setStatus = (index: number) => {
    list[index].status = !list[index].status;
  };

  return {
    get list() {
      return list;
    },
    addItem,
    removeItem,
    setStatus,
  };
}
