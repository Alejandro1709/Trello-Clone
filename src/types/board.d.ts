export interface IList {
  id: string;
  title: string;
  items: string[];
}

export default interface IBoard {
  id: string;
  title: string;
  lists: IList[];
}
