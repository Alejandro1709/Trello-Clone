import { create } from 'zustand';

type ModalState = {
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  setModalOpen: (isOpen: boolean) => set(() => ({ isModalOpen: isOpen })),
}));
