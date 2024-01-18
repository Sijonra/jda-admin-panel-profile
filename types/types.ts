export type TItem = {
	id: number;
	arrow: boolean;
	title: string;
	svg: any;
	subItems?: TSubItem[] | false;
	labelActive?: boolean;
	labelNew?: boolean;
};

export type TSubItem = {
	id: number;
	title: string;
	arrow: boolean;
	content?: string[];
	labelActive?: boolean;
	labelNew?: boolean;
};
