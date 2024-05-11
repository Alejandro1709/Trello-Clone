import type IBoard from '../types/board';

const boards: IBoard[] = [
  {
    id: 'b01',
    title: 'Da Mario Board',
    lists: [
      {
        id: 'l01',
        title: 'To Do',
        items: ['Create Basic Database', 'Seed Database'],
      },
      {
        id: 'l02',
        title: 'In Progress',
        items: ['Create Basic Server'],
      },
      {
        id: 'l03',
        title: 'Done',
        items: ['Create Project'],
      },
    ],
  },
  {
    id: 'b02',
    title: 'Test Board',
    lists: [
      {
        id: 'l02',
        title: 'To Do',
        items: [],
      },
      {
        id: 'l03',
        title: 'In Progress',
        items: [],
      },
      {
        id: 'l04',
        title: 'Done',
        items: [],
      },
    ],
  },
];

export default boards;
