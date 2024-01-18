import { create } from 'zustand';

interface IThemeState {
	theme: 'dark' | 'light';
	changeTheme: () => void;
}

const useTheme = create<IThemeState>((set) => ({
	theme: 'dark',
	changeTheme: () =>
		set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

export default useTheme;
