import type IBoard from '../types/board';

const boards: IBoard[] = [
  {
    id: 1,
    title: 'Da Mario Board',
    slug: 'da-mario-board',
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
    id: 2,
    title: 'Test Board',
    slug: 'test-board',
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
