import { create } from 'zustand';

interface ISideBarState {
	isActive: boolean;
	toggleSideBar: () => void;
}

const useSidebar = create<ISideBarState>((set) => ({
	isActive: false,
	toggleSideBar: () => set((state) => ({ isActive: !state.isActive })),
}));

export default useSidebar;
