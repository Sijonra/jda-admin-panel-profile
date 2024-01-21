import { create } from 'zustand';

interface ISideBarCollapse {
	isOpen: boolean;
	toggleScrollBarCollapse: () => void;
}

const useSideBarCollapse = create<ISideBarCollapse>((set) => ({
	isOpen: false,
	toggleScrollBarCollapse: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSideBarCollapse;
