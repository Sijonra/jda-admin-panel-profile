import { create } from 'zustand';

interface ISideBarCollapse {
	isOpen: boolean;
	toggleScrollBarCollapse: () => void;
}

const useSideBarCollapse = create<ISideBarCollapse>((set) => ({
	isOpen: true,
	toggleScrollBarCollapse: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSideBarCollapse;
