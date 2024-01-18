import useTheme from '@/hooks/useTheme';
import Echart from 'echarts-for-react';

const ChartPaying = () => {
	const theme = useTheme((state) => state.theme);

	const option = {
		tooltip: {
			trigger: 'item',
			padding: [7, 10],
			backgroundColor: theme === 'dark' ? '#222834' : '#eff2f6',
			borderColor: theme === 'dark' ? '#373e53' : '#cbd0dd',
			textStyle: { color: theme === 'dark' ? '#eff2f6' : '#141824' },
			borderWidth: 1,
			transitionDuration: 0,
			formatter: '{b}: {c}',
		},
		legend: { show: false },
		series: [
			{
				type: 'gauge',
				center: ['50%', '60%'],
				name: 'Paying customer',
				startAngle: 180,
				endAngle: 0,
				min: 0,
				max: 100,
				splitNumber: 12,
				itemStyle: {
					color: theme === 'dark' ? '#85a9ff' : '#3874ff',
				},
				progress: {
					show: true,
					roundCap: true,
					width: 12,
					itemStyle: {
						shadowBlur: 0,
						shadowColor: '#0000',
					},
				},
				pointer: {
					show: false,
				},
				axisLine: {
					roundCap: true,
					lineStyle: {
						width: 12,
						color: [[1, theme === 'dark' ? '#1d2332' : '#e5edff']],
					},
				},
				axisTick: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisLabel: {
					show: false,
				},
				title: {
					show: false,
				},
				detail: {
					show: false,
				},
				data: [
					{
						value: 30,
						name: 'Paying customer',
					},
				],
			},
		],
		grid: { containLabel: true, width: 328, height: 144 },
	};

	return <Echart style={{ height: '144px' }} option={option} />;
};

export default ChartPaying;
