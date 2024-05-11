import { create } from 'zustand';
import type IBoard from '../types/board';
import boards from '../data/boards';

type BoardType = {
  boards: IBoard[];
  selectedBoard?: IBoard;
  setBoards: (boards: IBoard[]) => void;
  setSelectedBoard: (board: IBoard) => void;
};

export const useBoardStore = create<BoardType>((set) => ({
  boards: boards,
  selectedBoard: boards[0],
  setBoards: (boards: IBoard[]) => set(() => ({ boards })),
  setSelectedBoard: (board: IBoard) => set(() => ({ selectedBoard: board })),
}));
