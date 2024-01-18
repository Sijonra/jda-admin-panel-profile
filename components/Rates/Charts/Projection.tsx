import useTheme from '@/hooks/useTheme';
import Echart from 'echarts-for-react';

const Projection = () => {
	const theme = useTheme((state) => state.theme);

	const option = {
		tooltip: {
			trigger: 'axis',
			padding: [7, 10],
			backgroundColor: theme === 'dark' ? '#222834' : '#eff2f6',
			borderColor: theme === 'dark' ? '#373e53' : '#cbd0dd',
			textStyle: { color: theme === 'dark' ? '#eff2f6' : '#141824' },
			borderWidth: 1,
			transitionDuration: 0,
			axisPointer: {
				type: 'none',
			},
			formatter: '{b}: {c}',
		},
		legend: {
			data: ['Projected revenue', 'Actual revenue'],
			right: 'right',
			width: '100%',
			itemWidth: 16,
			itemHeight: 8,
			itemGap: 20,
			top: 3,
			inactiveColor: theme === 'dark' ? '#525b75' : '#8a94ad',
			textStyle: {
				color: theme === 'dark' ? '#9fa6bc' : '#31374a',
				fontWeight: 600,
				fontFamily: 'Nunito Sans',
			},
		},
		xAxis: {
			type: 'category',
			axisLabel: {
				color: theme === 'dark' ? '#949db5' : '#3e465b',
				interval: 3,
				fontFamily: 'Nunito Sans',
				fontWeight: 600,
				fontSize: 12.8,
			},
			axisLine: {
				lineStyle: {
					color: theme === 'dark' ? '#373e53' : '#cbd0dd',
				},
			},
			axisTick: false,
		},
		yAxis: {
			axisPointer: { type: 'none' },
			axisTick: 'none',
			splitLine: {
				interval: 5,
				lineStyle: {
					color: theme === 'dark' ? '#31374a' : '#e3e6ed',
				},
			},
			axisLine: { show: false },
			axisLabel: {
				fontFamily: 'Nunito Sans',
				fontWeight: 600,
				fontSize: 12.8,
				color: theme === 'dark' ? '#949db5' : '#3e465b',
				margin: 20,
				verticalAlign: 'bottom',
			},
		},
		series: [
			{
				name: 'Projected revenue',
				type: 'bar',
				barWidth: '6px',
				data: [
					38911, 29452, 31894, 47876, 31302, 27731, 25490, 30355, 27176, 30393,
				],
				barGap: '30%',
				label: { show: false },
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: theme === 'dark' ? '#92B9FF' : '#3D7FFF',
				},
			},
			{
				name: 'Actual revenue',
				type: 'bar',
				data: [
					44485, 20428, 47302, 45180, 31034, 46358, 26581, 36628, 38219, 43256,
				],
				barWidth: '6px',
				barGap: '30%',
				label: { show: false },
				z: 10,
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: theme === 'dark' ? '#1C2837' : '#C7EBFF',
				},
			},
		],
		grid: {
			right: 0,
			left: 3,
			bottom: 0,
			width: 741,
			height: 300,
			containLabel: true,
		},
		animation: false,
	};

	return <Echart style={{ height: '300px' }} option={option} />;
};

export default Projection;
