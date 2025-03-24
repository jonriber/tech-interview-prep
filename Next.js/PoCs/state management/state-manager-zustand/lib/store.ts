import { create } from 'zustand';

const useStore = create((set, get) => ({
  count:0,
  increment: () => set((state: any) => ({count: state.count +1})),
}));

export default useStore