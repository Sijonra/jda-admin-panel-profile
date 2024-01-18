import useTheme from '@/hooks/useTheme';
import Echart from 'echarts-for-react';

const ChartCoupons = () => {
	const theme = useTheme((state) => state.theme);

	const option = {
		color: ['#85a9ff', '#adc5ff', '#3874ff'],
		tooltip: {
			trigger: 'item',
			padding: [7, 10],
			backgroundColor: theme === 'dark' ? '#222834' : '#eff2f6;',
			borderColor: theme === 'dark' ? '#373e53' : '#cbd0dd',
			borderWidth: 1,
			transitionDuration: 0,
			formatter: '{b}: {c}',
			textStyle: {
				color: theme === 'dark' ? '#ffffff' : '#000000',
				fontSize: 14,
				fontWeight: 'bold',
			},
		},
		legend: { show: false },
		series: [
			{
				name: '72%',
				type: 'pie',
				radius: ['100%', '87%'],
				avoidLabelOverlap: false,
				emphasis: {
					scale: false,
					itemStyle: {
						color: 'inherit',
					},
				},
				itemStyle: {
					borderWidth: 2,
					borderColor: theme === 'dark' ? '#0f111a' : '#f5f7fa',
				},
				label: {
					show: true,
					position: 'center',
					formatter: '{a}',
					fontSize: 23,
					color: theme === 'dark' ? '#eff2f6' : '#141824',
				},
				data: [
					{ value: 7200000, name: 'Percentage discount' },
					{ value: 1800000, name: 'Fixed card discount' },
					{ value: 1000000, name: 'Fixed product discount' },
				],
			},
		],
		grid: { containLabel: true, width: 328, height: 115 },
	};

	return <Echart style={{ height: '115px' }} option={option} />;
};

export default ChartCoupons;
