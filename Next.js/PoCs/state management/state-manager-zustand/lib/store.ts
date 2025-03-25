import { create } from 'zustand';

type Store = {
  count: number;
  increment: () => void;
}

const useStore = create<Store>((set, get) => ({
  count:0,
  increment: () => set((state: any) => ({count: state.count +1})),
}));

export default useStore