export type Item = { text: string; when: "HEUTE" | "DEFAULT" };
export function createList() {
  let list: Item[] = $state([]);

  const addItem = (text: string, when: "HEUTE" | "DEFAULT") => {
    list.push({ text: text, when: when });
    list = list;
  };

  return {
    get list() {
      return list;
    },
    addItem,
  };
}
