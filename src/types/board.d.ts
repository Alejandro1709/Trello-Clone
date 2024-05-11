export interface IList {
  id: string;
  title: string;
  items: string[];
}

export default interface IBoard {
  id?: number;
  title: string;
  slug: string;
  lists?: IList[];
}
