import useTheme from '@/hooks/useTheme';
import Echart from 'echarts-for-react';

const ChartCustomers = () => {
	const theme = useTheme((state) => state.theme);

	const option = {
		grid: {
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			height: 180,
			width: 328,
		},
		xAxis: {
			type: 'category',
			data: ['01 May', '02 May', '03 May', '04 May', '05 May', '06 May', '07 May'],
			axisLabel: {
				interval: 5,
				textStyle: {
					color: theme === 'dark' ? '#8991A8' : '#3E465B',
					fontSize: 12,
					fontWeight: 400,
				},
			},
			axisPointer: {
				type: 'none',
			},
			axisTick: {
				show: false,
			},
			axisLine: {
				lineStyle: {
					color: theme === 'dark' ? '#31374A' : '#E3E6ED',
					width: 1,
				},
			},
		},
		yAxis: {
			show: false,
		},
		series: [
			{
				name: 'May',
				data: [150, 100, 300, 200, 250, 180, 250],
				type: 'line',
				showSymbol: false,
				itemStyle: {
					color: theme === 'dark' ? '#31374A' : '#E3E6ED',
				},
				emphasis: {
					label: {
						label: {
							show: false,
							formatter: '{c}',
							showContent: false,
						},
					},
				},
			},
			{
				name: 'April',
				data: [200, 150, 250, 100, 500, 400, 600],
				type: 'line',
				showSymbol: false,
				itemStyle: {
					color: theme === 'dark' ? '#92B9FF' : '#3D7FFF',
				},
				emphasis: {
					label: {
						label: {
							show: false,
							formatter: '{c}',
							showContent: false,
						},
					},
				},
			},
		],
		tooltip: {
			show: true,
			trigger: 'axis',
			backgroundColor: theme === 'dark' ? '#222834' : '#eff2f6',
			borderColor: theme === 'dark' ? '#525b75' : '#e3e6ed',
			borderWidth: 1,
			textStyle: {
				color: theme === 'dark' ? '#ffffff' : '#000000',
				fontSize: 14,
				fontWeight: 'bold',
			},
		},
	};

	return <Echart option={option} />;
};

export default ChartCustomers;
