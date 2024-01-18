import { TItem } from '@/types/types';
import { create } from 'zustand';

// @ts-ignore
import SVG__HomeIcon from '@/public/assets/sideBarIcons/homeIcon.svg?url';
// @ts-ignore
import SVG__Cart from '@/public/assets/sideBarIcons/cart.svg?url';
// @ts-ignore
import SVG__Phone from '@/public/assets/sideBarIcons/phone.svg?url';
// @ts-ignore
import SVG__Board from '@/public/assets/sideBarIcons/board.svg?url';
// @ts-ignore
import SVG__Chat from '@/public/assets/sideBarIcons/chat.svg?url';
// @ts-ignore
import SVG__Email from '@/public/assets/sideBarIcons/mail.svg?url';
// @ts-ignore
import SVG__Events from '@/public/assets/sideBarIcons/events.svg?url';
// @ts-ignore
import SVG__Kanban from '@/public/assets/sideBarIcons/canban.svg?url';
// @ts-ignore
import SVG__Social from '@/public/assets/sideBarIcons/social.svg?url';
// @ts-ignore
import SVG__Calendar from '@/public/assets/sideBarIcons/calendar.svg?url';
// @ts-ignore
import SVG__Starters from '@/public/assets/sideBarIcons/starter.svg?url';
// @ts-ignore
import SVG__Faq from '@/public/assets/sideBarIcons/faq.svg?url';
// @ts-ignore
import SVG__Forms from '@/public/assets/sideBarIcons/forms.svg?url';
// @ts-ignore
import SVG__Icons from '@/public/assets/sideBarIcons/icons.svg?url';
// @ts-ignore
import SVG__Tables from '@/public/assets/sideBarIcons/tables.svg?url';
// @ts-ignore
import SVG__Echarts from '@/public/assets/sideBarIcons/echarts.svg?url';
// @ts-ignore
import SVG__Components from '@/public/assets/sideBarIcons/components.svg?url';
// @ts-ignore
import SVG__Utilities from '@/public/assets/sideBarIcons/utilities.svg?url';
// @ts-ignore
import SVG__Widgets from '@/public/assets/sideBarIcons/widgets.svg?url';
// @ts-ignore
import SVG__Multilevel from '@/public/assets/sideBarIcons/multilevel.svg?url';
// @ts-ignore
import SVG__GettingStarted from '@/public/assets/sideBarIcons/gettingstarted.svg?url';
// @ts-ignore
import SVG__Customization from '@/public/assets/sideBarIcons/customization.svg?url';
// @ts-ignore
import SVG__Layout from '@/public/assets/sideBarIcons/layoutdoc.svg?url';
// @ts-ignore
import SVG__Gulp from '@/public/assets/sideBarIcons/gulp.svg?url';
// @ts-ignore
import SVG__Design from '@/public/assets/sideBarIcons/designe.svg?url';
// @ts-ignore
import SVG__Changelog from '@/public/assets/sideBarIcons/changelog.svg?url';
// @ts-ignore
import SVG__Showcase from '@/public/assets/sideBarIcons/showcase.svg?url';
// @ts-ignore
import SVG__Landing from '@/public/assets/sideBarIcons/landing.svg?url';
// @ts-ignore
import SVG__Pricing from '@/public/assets/sideBarIcons/pricing.svg?url';
// @ts-ignore
import SVG__Notification from '@/public/assets/sideBarIcons/notifications.svg?url';
// @ts-ignore
import SVG__Members from '@/public/assets/sideBarIcons/members.svg?url';
// @ts-ignore
import SVG__Timeline from '@/public/assets/sideBarIcons/timeline.svg?url';
// @ts-ignore
import SVG__Errors from '@/public/assets/sideBarIcons/errors.svg?url';
// @ts-ignore
import SVG__Authentication from '@/public/assets/sideBarIcons/authentication.svg?url';
// @ts-ignore
import SVG__Layouts from '@/public/assets/sideBarIcons/layout.svg?url';
// @ts-ignore

interface ISideBarItems {
	itemsHome: TItem[];
	itemsApps: TItem[];
	itemsPages: TItem[];
	itemsModules: TItem[];
	itemsDocumentation: TItem[];
}

const sideBarItems = create<ISideBarItems>((set) => ({
	itemsHome: [
		{
			id: 0,
			arrow: true,
			title: 'Home',
			svg: SVG__HomeIcon,
			subItems: [
				{
					id: 0,
					title: 'E commerce',
					arrow: false,
				},
				{
					id: 1,
					title: 'Project manager',
					arrow: false,
				},
				{
					id: 2,
					title: 'CRM',
					arrow: false,
					labelNew: true,
				},
				{
					id: 3,
					title: 'Social feed',
					arrow: false,
				},
			],
		},
	],
	itemsApps: [
		{
			id: 0,
			arrow: true,
			title: 'E Commerce',
			svg: SVG__Cart,
			subItems: [
				{
					id: 0,
					title: 'Admin',
					arrow: true,
					content: [
						'Add product',
						'Products',
						'Customers',
						'Customers details',
						'Orders',
						'Order details',
						'Refund',
					],
				},
				{
					id: 1,
					title: 'Customer',
					arrow: true,
					content: [
						'Homepage',
						'Product details',
						'Product filter',
						'Cart',
						'Checkout',
						'Shipping info',
						'Profile',
						'Favorite stores',
						'Wishlist',
						'Order tracking',
						'Invoice',
					],
				},
			],
		},
		{
			id: 1,
			arrow: true,
			title: 'CRM',
			labelActive: true,
			svg: SVG__Phone,
			subItems: [
				{
					id: 0,
					title: 'Analytics',
					arrow: false,
				},
				{
					id: 1,
					title: 'Deals',
					arrow: false,
					labelNew: true,
				},
				{
					id: 2,
					title: 'Deal detail',
					arrow: false,
				},
				{
					id: 3,
					title: 'Leads',
					arrow: false,
				},
				{
					id: 4,
					title: 'Lead details',
					arrow: false,
				},
				{
					id: 5,
					title: 'Reports',
					arrow: false,
				},
				{
					id: 6,
					title: 'Report details',
					arrow: false,
					labelNew: true,
				},
				{
					id: 7,
					title: 'Add contact',
					arrow: false,
				},
			],
		},
		{
			id: 2,
			arrow: true,
			title: 'Project management',
			svg: SVG__Board,
			subItems: [
				{
					id: 0,
					title: 'Create new',
					arrow: false,
				},
				{
					id: 1,
					title: 'Project list',
					arrow: false,
				},
				{
					id: 2,
					title: 'Project card',
					arrow: false,
				},
				{
					id: 3,
					title: 'Project board',
					arrow: false,
				},
				{
					id: 4,
					title: 'Todo list',
					arrow: false,
				},
				{
					id: 5,
					title: 'Project details',
					arrow: false,
				},
			],
		},
		{
			id: 3,
			arrow: false,
			title: 'Chat',
			svg: SVG__Chat,
		},
		{
			id: 4,
			arrow: true,
			title: 'Email',
			svg: SVG__Email,
			subItems: [
				{
					id: 0,
					title: 'Inbox',
					arrow: false,
				},
				{
					id: 1,
					title: 'Email details',
					arrow: false,
				},
				{
					id: 2,
					title: 'Compose',
					arrow: false,
				},
			],
		},
		{
			id: 5,
			arrow: true,
			title: 'Events',
			svg: SVG__Events,
			subItems: [
				{
					id: 0,
					title: 'Create event',
					arrow: false,
				},
				{
					id: 1,
					title: 'Event detail',
					arrow: false,
				},
			],
		},
		{
			id: 6,
			arrow: true,
			title: 'Kanban',
			svg: SVG__Kanban,
			labelActive: true,
			subItems: [
				{
					id: 0,
					title: 'Kanban',
					arrow: false,
				},
				{
					id: 1,
					title: 'Boards',
					labelNew: true,
					arrow: false,
				},
				{
					id: 2,
					title: 'Create board',
					arrow: false,
				},
			],
		},
		{
			id: 7,
			arrow: true,
			title: 'Social',
			svg: SVG__Social,
			subItems: [
				{
					id: 0,
					title: 'Profile',
					arrow: false,
				},
				{
					id: 1,
					title: 'Settings',
					arrow: false,
				},
			],
		},
		{
			id: 8,
			arrow: false,
			title: 'Calendar',
			svg: SVG__Calendar,
		},
	],
	itemsPages: [
		{
			id: 0,
			arrow: false,
			title: 'Starter',
			svg: SVG__Starters,
		},
		{
			id: 1,
			arrow: true,
			title: 'Faq',
			labelActive: true,
			svg: SVG__Faq,
			subItems: [
				{
					id: 0,
					title: 'Faq accordion',
					arrow: false,
				},
				{
					id: 1,
					title: 'Faq tab',
					arrow: false,
					labelNew: true,
				},
			],
		},
		{
			id: 2,
			arrow: true,
			title: 'Landing',
			svg: SVG__Landing,
			labelActive: true,
			subItems: [
				{
					id: 0,
					title: 'Default',
					arrow: false,
				},
				{
					id: 1,
					title: 'Alternate',
					arrow: false,
					labelNew: true,
				},
			],
		},
		{
			id: 3,
			arrow: true,
			title: 'Pricing',
			svg: SVG__Pricing,
			subItems: [
				{
					id: 0,
					title: 'Pricing column',
					arrow: false,
				},
				{
					id: 1,
					title: 'Pricing grid',
					arrow: false,
				},
			],
		},
		{
			id: 4,
			arrow: false,
			title: 'Notification',
			svg: SVG__Notification,
		},
		{
			id: 5,
			arrow: false,
			title: 'Members',
			svg: SVG__Members,
		},
		{
			id: 6,
			arrow: false,
			title: 'Timeline',
			svg: SVG__Timeline,
		},
		{
			id: 7,
			arrow: true,
			title: 'Errors',
			svg: SVG__Errors,
			labelActive: true,
			subItems: [
				{
					id: 0,
					title: '404',
					arrow: false,
				},
				{
					id: 1,
					title: '403',
					arrow: false,
					labelNew: true,
				},
				{
					id: 2,
					title: '500',
					arrow: false,
				},
			],
		},
		{
			id: 8,
			arrow: true,
			title: 'Authentication',
			svg: SVG__Authentication,
			labelActive: true,
			subItems: [
				{
					id: 0,
					title: 'Simple',
					labelActive: true,
					arrow: true,
					content: [
						'Sign in',
						'Sign up',
						'Sign out',
						'Forgot password',
						'Reset password',
						'Lock',
						'2FA',
					],
				},
				{
					id: 1,
					title: 'Simple',
					labelActive: true,
					arrow: true,
					content: [
						'Sign in',
						'Sign up',
						'Sign out',
						'Forgot password',
						'Reset password',
						'Lock',
						'2FA',
					],
				},
				{
					id: 2,
					title: 'Simple',
					labelActive: true,
					arrow: true,
					content: [
						'Sign in',
						'Sign up',
						'Sign out',
						'Forgot password',
						'Reset password',
						'Lock',
						'2FA',
					],
				},
			],
		},
		{
			id: 9,
			arrow: true,
			title: 'Layouts',
			svg: SVG__Layouts,
			subItems: [
				{
					id: 0,
					title: 'Vertical sidenav',
					arrow: false,
				},
				{
					id: 1,
					title: 'Dark mode',
					arrow: false,
				},
				{
					id: 2,
					title: 'Sidenav collapse',
					arrow: false,
				},
				{
					id: 3,
					title: 'Dark nav',
					arrow: false,
				},
				{
					id: 4,
					title: 'Top nav slim',
					arrow: false,
				},
				{
					id: 5,
					title: 'Navbar top slim',
					arrow: false,
				},
				{
					id: 6,
					title: 'Navbar top',
					arrow: false,
				},
				{
					id: 7,
					title: 'Combo nav',
					arrow: false,
				},
				{
					id: 8,
					title: 'Dual nav',
					arrow: false,
				},
			],
		},
	],
	itemsModules: [
		{
			id: 0,
			arrow: true,
			title: 'Forms',
			svg: SVG__Forms,
			subItems: [
				{
					id: 0,
					title: 'Basic',
					arrow: true,
					content: [
						'Form control',
						'Input group',
						'Select',
						'Checks',
						'Range',
						'Labels',
						'Layout',
					],
				},
				{
					id: 1,
					title: 'Advance',
					arrow: true,
					content: ['Validation', 'Wizard'],
				},
			],
		},
		{
			id: 1,
			arrow: true,
			title: 'Icons',
			svg: SVG__Icons,
			subItems: [
				{
					id: 0,
					title: 'Feather',
					arrow: false,
				},
				{
					id: 1,
					title: 'Font awesome',
					arrow: false,
				},
				{
					id: 2,
					title: 'Unicons',
					arrow: false,
				},
			],
		},
		{
			id: 2,
			arrow: true,
			title: 'Tables',
			svg: SVG__Tables,
			subItems: [
				{
					id: 0,
					title: 'Basic tables',
					arrow: false,
				},
				{
					id: 1,
					title: 'Advanced tables',
					arrow: false,
				},
				{
					id: 2,
					title: 'Bulk Select',
					arrow: false,
				},
			],
		},
		{
			id: 3,
			arrow: true,
			title: 'ECharts',
			svg: SVG__Echarts,
			subItems: [
				{
					id: 0,
					title: 'Line charts',
					arrow: false,
				},
				{
					id: 1,
					title: 'Bar charts',
					arrow: false,
				},
				{
					id: 2,
					title: 'Candlestick charts',
					arrow: false,
				},
			],
		},
		{
			id: 4,
			arrow: true,
			title: 'Components',
			svg: SVG__Components,
			subItems: [
				{
					id: 0,
					title: 'Accordion',
					arrow: false,
				},
				{
					id: 1,
					title: 'Avatar',
					arrow: false,
				},
				{
					id: 2,
					title: 'Alerts',
					arrow: false,
				},
				{
					id: 3,
					title: 'Badge',
					arrow: false,
				},
				{
					id: 4,
					title: 'Buttons',
					arrow: false,
				},
				{
					id: 5,
					title: 'Calendar',
					arrow: false,
				},
				{
					id: 6,
					title: 'Card',
					arrow: false,
				},
				{
					id: 7,
					title: 'Carousel',
					arrow: true,
					content: ['Bootstrap', 'Swiper'],
				},
				{
					id: 8,
					title: 'Collapse',
					arrow: false,
				},
				{
					id: 9,
					title: 'Dropdown',
					arrow: false,
				},
				{
					id: 10,
					title: 'Listgroup',
					arrow: false,
				},
				{
					id: 11,
					title: 'Modals',
					arrow: false,
				},
				{
					id: 12,
					title: 'Navs & Tabs',
					arrow: true,
					content: ['Navs', 'Navbars', 'Tabs'],
				},
				{
					id: 13,
					title: 'Offcanvas',
					arrow: false,
				},
				{
					id: 14,
					title: 'Progress bar',
					arrow: false,
				},
				{
					id: 15,
					title: 'Placeholder',
					arrow: false,
				},
				{
					id: 16,
					title: 'Pagination',
					arrow: false,
				},
				{
					id: 17,
					title: 'Propovers',
					arrow: false,
				},
				{
					id: 18,
					title: 'Scrollspy',
					arrow: false,
				},
				{
					id: 19,
					title: 'Sortable',
					arrow: false,
				},
				{
					id: 20,
					title: 'Toast',
					arrow: false,
				},
			],
		},
		{
			id: 5,
			arrow: true,
			title: 'Utilities',
			svg: SVG__Utilities,
			subItems: [
				{
					id: 0,
					title: 'Accordion',
					arrow: false,
				},
				{
					id: 1,
					title: 'Avatar',
					arrow: false,
				},
				{
					id: 2,
					title: 'Alerts',
					arrow: false,
				},
				{
					id: 3,
					title: 'Badge',
					arrow: false,
				},
				{
					id: 4,
					title: 'Buttons',
					arrow: false,
				},
				{
					id: 5,
					title: 'Calendar',
					arrow: false,
				},
				{
					id: 6,
					title: 'Card',
					arrow: false,
				},
				{
					id: 7,
					title: 'Carousel',
					arrow: true,
					content: ['Bootstrap', 'Swiper'],
				},
				{
					id: 8,
					title: 'Collapse',
					arrow: false,
				},
				{
					id: 9,
					title: 'Dropdown',
					arrow: false,
				},
				{
					id: 10,
					title: 'Listgroup',
					arrow: false,
				},
				{
					id: 11,
					title: 'Modals',
					arrow: false,
				},
				{
					id: 12,
					title: 'Navs & Tabs',
					arrow: true,
					content: ['Navs', 'Navbars', 'Tabs'],
				},
				{
					id: 13,
					title: 'Offcanvas',
					arrow: false,
				},
				{
					id: 14,
					title: 'Progress bar',
					arrow: false,
				},
				{
					id: 15,
					title: 'Placeholder',
					arrow: false,
				},
				{
					id: 16,
					title: 'Pagination',
					arrow: false,
				},
				{
					id: 17,
					title: 'Propovers',
					arrow: false,
				},
				{
					id: 18,
					title: 'Scrollspy',
					arrow: false,
				},
				{
					id: 19,
					title: 'Sortable',
					arrow: false,
				},
				{
					id: 20,
					title: 'Toast',
					arrow: false,
				},
			],
		},
		{
			id: 6,
			arrow: false,
			title: 'Widgets',
			svg: SVG__Widgets,
			labelNew: true,
		},
		{
			id: 7,
			arrow: true,
			title: 'Multi level',
			svg: SVG__Multilevel,
			subItems: [
				{
					id: 0,
					title: 'Level two',
					arrow: true,
					content: ['Item 1', 'Item 2'],
				},
				{
					id: 1,
					title: 'Level three',
					arrow: true,
					content: ['Item 3', 'Item 4'],
				},
				{
					id: 2,
					title: 'Level four',
					arrow: true,
					content: ['Item 5', 'Item 6'],
				},
			],
		},
	],
	itemsDocumentation: [
		{
			id: 0,
			arrow: false,
			title: 'Getting Started',
			svg: SVG__GettingStarted,
		},
		{
			id: 1,
			arrow: true,
			title: 'Customization',
			svg: SVG__Customization,
			subItems: [
				{
					id: 0,
					title: 'Configuration',
					arrow: false,
				},
				{
					id: 1,
					title: 'Styling',
					arrow: false,
				},
				{
					id: 2,
					title: 'Dark mode',
					arrow: false,
				},
				{
					id: 3,
					title: 'Plugin',
					arrow: false,
				},
			],
		},
		{
			id: 2,
			arrow: true,
			title: 'Layout doc',
			svg: SVG__Layout,
			subItems: [
				{
					id: 0,
					title: 'Vertical navbar',
					arrow: false,
				},
				{
					id: 1,
					title: 'Horizontal navbar',
					arrow: false,
				},
				{
					id: 2,
					title: 'Combo navbar',
					arrow: false,
				},
				{
					id: 3,
					title: 'Dual nav',
					arrow: false,
				},
			],
		},
		{
			id: 3,
			arrow: false,
			title: 'Gulp',
			svg: SVG__Gulp,
		},
		{
			id: 4,
			arrow: false,
			title: 'Design file',
			svg: SVG__Design,
		},
		{
			id: 5,
			arrow: false,
			title: 'Changelog',
			svg: SVG__Changelog,
		},
		{
			id: 6,
			arrow: false,
			title: 'Showcase',
			svg: SVG__Showcase,
		},
	],
}));

export default sideBarItems;
