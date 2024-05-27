import type IBoard from '../types/board';

const boards: IBoard[] = [
  {
    id: 1,
    title: 'Ales board',
    slug: 'ales-board',
    lists: [
      {
        id: 1,
        title: 'To Do',
        items: ['Create Basic Database', 'Seed Database'],
      },
      {
        id: 2,
        title: 'In Progress',
        items: ['Create Basic Server'],
      },
      {
        id: 3,
        title: 'Done',
        items: ['Create Project'],
      },
    ],
  },
  {
    id: 2,
    title: 'Test Board',
    slug: 'test-board',
    lists: [
      {
        id: 4,
        title: 'To Do',
        items: [],
      },
      {
        id: 5,
        title: 'In Progress',
        items: [],
      },
      {
        id: 6,
        title: 'Done',
        items: [],
      },
    ],
  },
];

export default boards;
